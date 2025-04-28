export interface Course {
    id: string
    title: string
    description: string
    image: string
    category: string
    price: number
    duration: number
    rating: number
    reviewCount: number
    language: string
    updatedAt: string
    students: number
    resources: number
    learningPoints: string[]
    modules: {
      title: string
      lessons: number
      duration: number
    }[]
    comments: Comment[]
  }
  
  export interface Comment {
    id: string
    user: {
      name: string
      avatar: string
    }
    content: string
    rating: number
    date: string
  }
  
  export const courses: Course[] = [
    {
      id: "desarrollo-web-fullstack",
      title: "Desarrollo Web Full Stack: De Principiante a Profesional",
      description:
        "Aprende a crear aplicaciones web completas con HTML, CSS, JavaScript, React, Node.js y MongoDB. Este curso cubre todo lo que necesitas para convertirte en un desarrollador web full stack.",
      image: "https://iconiceducation.in/wp-content/uploads/2023/12/Full-stack-developer.png",
      category: "Desarrollo Web",
      price: 59.99,
      duration: 42,
      rating: 4.8,
      reviewCount: 1245,
      language: "Español",
      updatedAt: "Marzo 2023",
      students: 15420,
      resources: 84,
      learningPoints: [
        "Dominar HTML5, CSS3 y JavaScript moderno",
        "Construir interfaces de usuario con React",
        "Desarrollar APIs RESTful con Node.js y Express",
        "Trabajar con bases de datos MongoDB",
        "Implementar autenticación y autorización",
        "Desplegar aplicaciones en la nube",
      ],
      modules: [
        { title: "Introducción al Desarrollo Web", lessons: 8, duration: 120 },
        { title: "HTML5 y CSS3 Avanzado", lessons: 12, duration: 180 },
        { title: "JavaScript Moderno (ES6+)", lessons: 15, duration: 210 },
        { title: "React: Fundamentos y Hooks", lessons: 18, duration: 240 },
        { title: "Node.js y Express", lessons: 14, duration: 200 },
        { title: "MongoDB y Mongoose", lessons: 10, duration: 150 },
        { title: "Proyecto Final Full Stack", lessons: 8, duration: 180 },
      ],
      comments: [
        {
          id: "comment-1",
          user: {
            name: "Carlos Rodríguez",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Excelente curso, muy completo y bien explicado. He aprendido muchísimo y ya estoy aplicando los conocimientos en mi trabajo.",
          rating: 5,
          date: "15/03/2023",
        },
        {
          id: "comment-2",
          user: {
            name: "Laura Martínez",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "El instructor explica muy bien y los proyectos son muy prácticos. Recomendado para cualquiera que quiera aprender desarrollo web desde cero.",
          rating: 5,
          date: "02/02/2023",
        },
        {
          id: "comment-3",
          user: {
            name: "Miguel Ángel",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Muy buen curso, aunque algunas secciones podrían estar más actualizadas. En general, estoy satisfecho con lo aprendido.",
          rating: 4,
          date: "20/01/2023",
        },
      ],
    },
    {
      id: "inteligencia-artificial-machine-learning",
      title: "Inteligencia Artificial y Machine Learning: Fundamentos Prácticos",
      description:
        "Domina los conceptos fundamentales de la IA y el Machine Learning con Python. Aprende a construir modelos predictivos, redes neuronales y sistemas de recomendación.",
      image: "https://mediatek-marketing.transforms.svdcdn.com/production/posts/MediaTek-IA-2023.jpg?w=2048&h=1075&q=80&auto=format&fit=crop&dm=1688130337&s=3b56535c28f441a34db9455d64444cb7",
      category: "Inteligencia Artificial",
      price: 79.99,
      duration: 38,
      rating: 4.7,
      reviewCount: 892,
      language: "Español",
      updatedAt: "Abril 2023",
      students: 9870,
      resources: 65,
      learningPoints: [
        "Comprender los fundamentos matemáticos de la IA",
        "Implementar algoritmos de Machine Learning con Python",
        "Construir y entrenar redes neuronales",
        "Trabajar con procesamiento de lenguaje natural (NLP)",
        "Desarrollar sistemas de visión por computadora",
        "Aplicar técnicas de aprendizaje profundo",
      ],
      modules: [
        { title: "Introducción a la IA y Machine Learning", lessons: 6, duration: 90 },
        { title: "Python para Ciencia de Datos", lessons: 10, duration: 150 },
        { title: "Algoritmos de Machine Learning", lessons: 14, duration: 210 },
        { title: "Redes Neuronales y Deep Learning", lessons: 12, duration: 180 },
        { title: "Procesamiento de Lenguaje Natural", lessons: 8, duration: 120 },
        { title: "Visión por Computadora", lessons: 10, duration: 150 },
        { title: "Proyectos Prácticos de IA", lessons: 6, duration: 120 },
      ],
      comments: [
        {
          id: "comment-1",
          user: {
            name: "Ana García",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Curso muy completo que cubre desde lo básico hasta temas avanzados. Las explicaciones son claras y los ejercicios prácticos son muy útiles.",
          rating: 5,
          date: "10/04/2023",
        },
        {
          id: "comment-2",
          user: {
            name: "Roberto Sánchez",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Excelente curso para iniciarse en el mundo de la IA. El instructor explica los conceptos complejos de forma sencilla y entendible.",
          rating: 5,
          date: "28/03/2023",
        },
        {
          id: "comment-3",
          user: {
            name: "Elena Martín",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Buen curso, aunque se requieren conocimientos previos de programación y matemáticas para aprovecharlo al máximo.",
          rating: 4,
          date: "15/02/2023",
        },
      ],
    },
    {
      id: "ciberseguridad-hacking-etico",
      title: "Ciberseguridad y Hacking Ético: Protección de Sistemas",
      description:
        "Aprende a proteger sistemas informáticos y redes contra amenazas cibernéticas. Domina técnicas de hacking ético, análisis de vulnerabilidades y respuesta a incidentes.",
      image: "https://www.bernanetwork.com/img/20220311_622b9909b59cd.jpg",
      category: "Ciberseguridad",
      price: 69.99,
      duration: 35,
      rating: 4.9,
      reviewCount: 756,
      language: "Español",
      updatedAt: "Mayo 2023",
      students: 7650,
      resources: 72,
      learningPoints: [
        "Comprender los fundamentos de la ciberseguridad",
        "Realizar pruebas de penetración (pentesting)",
        "Identificar y explotar vulnerabilidades comunes",
        "Implementar medidas de seguridad efectivas",
        "Analizar y responder a incidentes de seguridad",
        "Utilizar herramientas profesionales de seguridad",
      ],
      modules: [
        { title: "Fundamentos de Ciberseguridad", lessons: 8, duration: 120 },
        { title: "Redes y Sistemas Operativos", lessons: 10, duration: 150 },
        { title: "Hacking Ético: Metodología", lessons: 12, duration: 180 },
        { title: "Análisis de Vulnerabilidades", lessons: 10, duration: 150 },
        { title: "Explotación de Sistemas", lessons: 8, duration: 120 },
        { title: "Seguridad Web y Aplicaciones", lessons: 10, duration: 150 },
        { title: "Respuesta a Incidentes", lessons: 6, duration: 90 },
      ],
      comments: [
        {
          id: "comment-1",
          user: {
            name: "Javier López",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Curso excepcional con un enfoque muy práctico. Los laboratorios y ejercicios son muy realistas y ayudan a comprender los conceptos.",
          rating: 5,
          date: "20/05/2023",
        },
        {
          id: "comment-2",
          user: {
            name: "Sofía Ramírez",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "El mejor curso de ciberseguridad que he encontrado. El instructor es un experto en la materia y comparte conocimientos muy valiosos.",
          rating: 5,
          date: "05/04/2023",
        },
        {
          id: "comment-3",
          user: {
            name: "Daniel Torres",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Muy buen curso, aunque algunas herramientas mostradas son de pago. Aun así, el conocimiento adquirido es invaluable.",
          rating: 4,
          date: "18/03/2023",
        },
      ],
    },
    {
      id: "desarrollo-aplicaciones-moviles",
      title: "Desarrollo de Aplicaciones Móviles con React Native",
      description:
        "Aprende a crear aplicaciones móviles multiplataforma para iOS y Android utilizando React Native. Desde los fundamentos hasta la publicación en las tiendas de aplicaciones.",
      image: "https://img.freepik.com/vector-gratis/banner-desarrollo-aplicaciones_33099-1720.jpg?semt=ais_hybrid&w=740",
      category: "Desarrollo Móvil",
      price: 49.99,
      duration: 32,
      rating: 4.6,
      reviewCount: 623,
      language: "Español",
      updatedAt: "Febrero 2023",
      students: 8540,
      resources: 58,
      learningPoints: [
        "Dominar los fundamentos de React Native",
        "Crear interfaces de usuario nativas",
        "Implementar navegación entre pantallas",
        "Integrar APIs y servicios externos",
        "Utilizar almacenamiento local y bases de datos",
        "Publicar aplicaciones en App Store y Google Play",
      ],
      modules: [
        { title: "Introducción a React Native", lessons: 6, duration: 90 },
        { title: "Componentes y Estilos", lessons: 10, duration: 150 },
        { title: "Navegación y Rutas", lessons: 8, duration: 120 },
        { title: "Gestión de Estado", lessons: 10, duration: 150 },
        { title: "Integración con APIs", lessons: 8, duration: 120 },
        { title: "Almacenamiento y Persistencia", lessons: 6, duration: 90 },
        { title: "Publicación y Distribución", lessons: 4, duration: 60 },
      ],
      comments: [
        {
          id: "comment-1",
          user: {
            name: "Patricia Gómez",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Excelente curso para aprender React Native. Las explicaciones son claras y los proyectos son muy prácticos.",
          rating: 5,
          date: "25/02/2023",
        },
        {
          id: "comment-2",
          user: {
            name: "Alejandro Ruiz",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content: "Muy buen curso, aunque se necesitan conocimientos previos de React para aprovecharlo al máximo.",
          rating: 4,
          date: "10/01/2023",
        },
        {
          id: "comment-3",
          user: {
            name: "Marta Jiménez",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "El instructor explica muy bien y los proyectos son interesantes. He podido desarrollar mi primera aplicación gracias a este curso.",
          rating: 5,
          date: "05/12/2022",
        },
      ],
    },
    {
      id: "diseno-ux-ui",
      title: "Diseño UX/UI: Creación de Experiencias Digitales",
      description:
        "Aprende a diseñar interfaces de usuario atractivas y experiencias de usuario efectivas. Domina herramientas como Figma y principios de diseño centrado en el usuario.",
      image: "https://img.freepik.com/vector-gratis/fondo-degradado-ui-ux_23-2149052117.jpg?semt=ais_hybrid&w=740",
      category: "Diseño",
      price: 0,
      duration: 28,
      rating: 4.7,
      reviewCount: 512,
      language: "Español",
      updatedAt: "Abril 2023",
      students: 6320,
      resources: 45,
      learningPoints: [
        "Comprender los principios fundamentales de UX/UI",
        "Realizar investigación de usuarios y personas",
        "Crear wireframes y prototipos interactivos",
        "Dominar Figma para diseño de interfaces",
        "Implementar principios de accesibilidad",
        "Realizar pruebas de usabilidad",
      ],
      modules: [
        { title: "Fundamentos de UX/UI", lessons: 6, duration: 90 },
        { title: "Investigación de Usuarios", lessons: 8, duration: 120 },
        { title: "Arquitectura de Información", lessons: 6, duration: 90 },
        { title: "Wireframing y Prototipado", lessons: 10, duration: 150 },
        { title: "Diseño Visual con Figma", lessons: 12, duration: 180 },
        { title: "Accesibilidad y Usabilidad", lessons: 8, duration: 120 },
        { title: "Portafolio de Diseño UX/UI", lessons: 4, duration: 60 },
      ],
      comments: [
        {
          id: "comment-1",
          user: {
            name: "Carmen Vega",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Curso muy completo y práctico. He aprendido mucho sobre diseño UX/UI y ahora puedo aplicarlo en mis proyectos.",
          rating: 5,
          date: "15/04/2023",
        },
        {
          id: "comment-2",
          user: {
            name: "Fernando Díaz",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Excelente curso para iniciarse en el mundo del diseño UX/UI. Las explicaciones son claras y los ejercicios muy útiles.",
          rating: 5,
          date: "28/03/2023",
        },
        {
          id: "comment-3",
          user: {
            name: "Lucía Moreno",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Buen curso, aunque algunas secciones podrían profundizar más. En general, estoy satisfecha con lo aprendido.",
          rating: 4,
          date: "10/02/2023",
        },
      ],
    },
    {
      id: "blockchain-criptomonedas",
      title: "Blockchain y Criptomonedas: Desarrollo de Aplicaciones Descentralizadas",
      description:
        "Aprende a desarrollar aplicaciones descentralizadas (DApps) utilizando tecnología blockchain. Domina Solidity, Ethereum y Web3 para crear contratos inteligentes y DeFi.",
      image: "https://images.prismic.io/fabrick/e6583d54-b92d-4871-8de9-000a31884eb7_Blockchain%20-%20Articolo.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max",
      category: "Blockchain",
      price: 89.99,
      duration: 40,
      rating: 4.8,
      reviewCount: 378,
      language: "Español",
      updatedAt: "Mayo 2023",
      students: 4250,
      resources: 68,
      learningPoints: [
        "Comprender los fundamentos de blockchain",
        "Desarrollar contratos inteligentes con Solidity",
        "Crear aplicaciones descentralizadas (DApps)",
        "Implementar tokens ERC-20 y NFTs",
        "Integrar Web3.js con aplicaciones frontend",
        "Desarrollar proyectos DeFi",
      ],
      modules: [
        { title: "Introducción a Blockchain", lessons: 8, duration: 120 },
        { title: "Ethereum y Criptomonedas", lessons: 10, duration: 150 },
        { title: "Solidity: Lenguaje de Contratos", lessons: 14, duration: 210 },
        { title: "Desarrollo de Contratos Inteligentes", lessons: 12, duration: 180 },
        { title: "Tokens y NFTs", lessons: 8, duration: 120 },
        { title: "DApps con Web3.js", lessons: 10, duration: 150 },
        { title: "Proyectos DeFi", lessons: 6, duration: 90 },
      ],
      comments: [
        {
          id: "comment-1",
          user: {
            name: "Raúl Hernández",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Excelente curso para adentrarse en el mundo de blockchain. Las explicaciones son claras y los proyectos muy interesantes.",
          rating: 5,
          date: "20/05/2023",
        },
        {
          id: "comment-2",
          user: {
            name: "Isabel Castro",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Muy buen curso, aunque se requieren conocimientos previos de programación para aprovecharlo al máximo.",
          rating: 4,
          date: "05/04/2023",
        },
        {
          id: "comment-3",
          user: {
            name: "Andrés Navarro",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "El mejor curso de blockchain que he encontrado. El instructor es un experto y explica los conceptos complejos de forma sencilla.",
          rating: 5,
          date: "15/03/2023",
        },
      ],
    },
  ]
  