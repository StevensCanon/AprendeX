"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);
    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });

  return (
    <div className="flex items-center justify-center pt-20 ">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        <form onSubmit={onSubmit}>
          {error && (
            <div className="mb-4 p-4 rounded-md bg-red-100 text-red-700">
              {error}
            </div>
          )}
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Iniciar Sesión
          </h1>
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
          <div className="mb-6">
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
              placeholder="******"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Iniciar Sesion
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center pt-6">
            <a href="/" className="text-blue-800  underline">
              <small>Volver</small>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
