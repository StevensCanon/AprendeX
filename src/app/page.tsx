import Cards from "./components/Cards";
function HomePage() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-700  sm:text-5xl pt-20">
            Cursos de Programación Web
          </h2>
          <p className="mt-4 text-xl text-gray-800">
            Aprende las tecnologías más demandadas y conviértete en un
            desarrollador web de élite.
          </p>
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
