import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, password } =
      await request.json();

    const adminUsername =
      process.env.ADMIN_USERNAME;

    const adminPassword =
      process.env.ADMIN_PASSWORD;

    if (
      username === adminUsername &&
      password === adminPassword
    ) {
      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Usuario o contraseña incorrectos",
      },
      {
        status: 401,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al procesar la solicitud",
      },
      {
        status: 500,
      }
    );
  }
}