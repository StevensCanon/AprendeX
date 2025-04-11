import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface Course {
  id: number;
  name: string;
  title: string;
  description: string;
  Urlimage: string;
  link: string;
}

export const coursesArray: Course[] = [
  {
    id: 1,
    name: "HTML Y CSS",
    title: "HTML y CSS",
    description: "Aprende los fundamentos del desarrollo web con HTML5 y CSS3.",
    Urlimage:
      "https://escuela.it/storage/course_images/imagen-curso-html-css-50.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Git",
    title: "Git",
    description: "Controla el historial de versiones de tu código con Git.",
    Urlimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrdUYkITIE4xl_o8MLGGYCUZh3ljjjq4s3w&s",
    link: "#",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    title: "Tailwind CSS",
    description: "Estiliza tus interfaces rápidamente con clases utilitarias.",
    Urlimage:
      "https://vabadus.es/images/cache/imagen_nodo/images/articulos/64b524021adc5990918944.png",
    link: "#",
  },
  {
    id: 4,
    name: "Bootstrap 5",
    title: "Bootstrap 5",
    description: "Crea sitios web responsivos fácilmente con Bootstrap.",
    Urlimage:
      "https://localo.com/es/assets/img/definitions/what-is-bootstrap.webp",
    link: "#",
  },
  {
    id: 5,
    name: "Next JS",
    title: "Next JS",
    description: "Desarrolla aplicaciones web modernas con React y Next.js.",
    Urlimage:
      "https://www.digitality.es/img-articulos/ampliadas/que-es-nextjs-y-para-que-sirve-1-1697560678.jpg",
    link: "#",
  },
  {
    id: 6,
    name: "Vite JS",
    title: "Vite JS",
    description: "Una herramienta de desarrollo frontend ultrarrápida.",
    Urlimage:
      "https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/medium_Latest_Vite_JS_Frontend_Tool_bdf5f4e0d4.jpg",
    link: "#",
  },
  {
    id: 7,
    name: "Astro Js",
    title: "Astro Js",
    description: "Framework para sitios web rápidos con menos JavaScript.",
    Urlimage:
      "https://miro.medium.com/v2/resize:fit:1400/1*hr9dl2_mgQBJpq7TX9e4jw.jpeg",
    link: "#",
  },
  {
    id: 8,
    name: "React",
    title: "React",
    description: "Construye interfaces de usuario interactivas con React.",
    Urlimage:
      "https://miro.medium.com/v2/resize:fit:1400/1*VLiW4zOLz6lZX9_TUzg0eQ.png",
    link: "#",
  },
  {
    id: 9,
    name: "Node JS",
    title: "Node JS",
    description: "Ejecuta JavaScript en el servidor con Node.js.",
    Urlimage:
      "https://www.hostingplus.com.co/wp-content/uploads/2025/01/Node-1.png",
    link: "#",
  },
  {
    id: 10,
    name: "Angular",
    title: "Angular",
    description: "Crea aplicaciones SPA modernas con Angular.",
    Urlimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHa5JI5_L24KbiXIO-AtmrrRBsyIKD6WOwaw&s",
    link: "#",
  },
  {
    id: 11,
    name: "TypeScript",
    title: "TypeScript",
    description: "Mejora tu código JavaScript con tipado fuerte.",
    Urlimage:
      "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png",
    link: "#",
  },
  {
    id: 12,
    name: "Python",
    title: "Python",
    description: "Aprende uno de los lenguajes más versátiles y populares.",
    Urlimage:
      "https://www.feuga.es/wp-content/uploads/2023/01/python-curso.jpg",
    link: "#",
  },
];

function Cards() {
  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {coursesArray.map((course) => (
            <div
              key={course.id}
              className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              {/* Card Header - Image with consistent height */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.Urlimage}
                  alt={course.title}
                  fill
                  className="object-fit transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Card Content - Fixed height for content area */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 flex-grow mb-4">{course.description}</p>
                
                {/* Card Footer - Button area */}
                <div className="mt-auto">
                  <Link
                    href={`/courses/${course.id}`}
                    className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-md transition-colors duration-300"
                  >
                    Ver curso
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;