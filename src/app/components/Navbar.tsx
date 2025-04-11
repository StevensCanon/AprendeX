import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center bg-white px-24 py-3">
      <h1 className="text-2xl font-bold">
        <a href="/">AprendeX</a></h1>

      <ul className="flex  items-center px-5 gap-4 font-medium">
        {!session?.user ? (
          <>
            <li>
              <Link href="/auth/login" className="">
                Iniciar Sesion
              </Link>
            </li>
            <button className="bg-blue-400 hover:bg-blue-600 p-2 rounded-xl ">
              <li>
                <Link href="/auth/register">Registrarse</Link>
              </li>
            </button>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
