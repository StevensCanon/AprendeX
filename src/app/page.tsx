import { CourseCard } from "@/app/components/Cards"
import { courses } from "@/lib/data"

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cursos Tecnológicos e Informáticos</h1>
      <p className="text-center text-muted-foreground mb-10">
        Explora nuestra selección de cursos para mejorar tus habilidades tecnológicas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
