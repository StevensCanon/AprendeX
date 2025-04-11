"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();

      if (!res.ok) {
        setError(responseData.message || "Error en el registro");
        return;
      }

      router.push("/auth/login");
    } catch (error) {
      setError("Error al conectar con el servidor");
    }
  });

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Registro
          </h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre Usuario:
            </label>
            <input
              type="text"
              {...register("username", {
                required: { value: true, message: "El nombre de usuario es requerido" },
                minLength: {
                  value: 3,
                  message: "El nombre de usuario debe tener al menos 3 caracteres",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="yourUser123"
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Correo Electronico:
            </label>
            <input
              type="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="user@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Contraseña:
            </label>
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirmar Contraseña:
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm Password is required",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Registrarse
            </button>
          </div>

          <div className="flex items-center justify-between pt-6">
            <a href="/" className="text-blue-800  underline">
              <small>Volver</small>
            </a>
            <a href="/auth/login">
              <small>
                <strong className="text-blue-950">Ya tienes cuenta?</strong>
                <strong className="underline text-blue-800 "> Iniciar Sesion</strong>
              </small>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
