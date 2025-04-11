import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "../../../../libs/db";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Datos recibidos:", data);

    if (!data.email || !data.password || !data.username) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const userFound = await db.user.findUnique({
      where: { email: data.email },
    });

    if (userFound) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const usernameFound = await db.user.findUnique({
      where: { username: data.username },
    });

    if (usernameFound) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log("Contraseña hasheada creada");

    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });
    console.log("Usuario creado:", newUser);

    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error detallado en registro:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return NextResponse.json(
      { 
        message: "Error en el registro",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
