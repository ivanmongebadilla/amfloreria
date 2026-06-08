import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(
    request: NextRequest
) {
    let response = NextResponse.next();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },

                setAll(cookiesToSet) {
                    cookiesToSet.forEach(
                        ({ name, value, options }) => {
                            response.cookies.set(
                                name,
                                value,
                                options
                            );
                        }
                    );
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const pathname =
        request.nextUrl.pathname;

    const isLoginPage =
        pathname === "/admin/login";

    const isProtectedRoute =
        pathname.startsWith(
            "/admin/dashboard"
        ) ||
        pathname.startsWith(
            "/admin/orders"
        ) ||
        pathname.startsWith(
            "/admin/products"
        );

    if (
        !user &&
        isProtectedRoute
    ) {
        return NextResponse.redirect(
            new URL(
                "/admin/login",
                request.url
            )
        );
    }

    if (
        user &&
        isLoginPage
    ) {
        return NextResponse.redirect(
            new URL(
                "/admin/dashboard",
                request.url
            )
        );
    }

    return response;
}

export const config = {
    matcher: [
        "/admin/:path*",
    ],
};