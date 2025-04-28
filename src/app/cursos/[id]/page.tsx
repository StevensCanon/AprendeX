import { CommentSection } from "@/app/components/Comments"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { courses } from "@/lib/data"
import { Calendar, Clock, Globe, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id === params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <Link href="/" className="text-sm text-muted-foreground hover:underline hover:text-blue-400 mb-4 inline-block">
        Volver a cursos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-muted-foreground mt-2">{course.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>{course.duration} horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span>Actualizado {course.updatedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span>{course.language}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>{course.students} estudiantes</span>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-bold mb-4">Lo que aprenderás</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {course.learningPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-bold mb-4">Contenido del curso</h2>
            <Card className="divide-y">
              {course.modules.map((module, index) => (
                <div key={index} className="p-4">
                  <h3 className="font-medium">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {module.lessons} lecciones • {module.duration} min
                  </p>
                </div>
              ))}
            </Card>
          </div>

          <Separator />

          <CommentSection courseId={course.id} comments={course.comments} />
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8 p-6 space-y-6">
            <div className="text-3xl font-bold">{course.price === 0 ? "Gratis" : `$${course.price}`}</div>

            <Button className="w-full" size="lg">
              Inscribirse
            </Button>

            <div className="text-center text-sm text-muted-foreground">30 días de garantía de devolución de dinero</div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-medium">Este curso incluye:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.duration} horas de video bajo demanda</span>
                </li>
                <li className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>{course.resources} recursos descargables</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>Acceso de por vida</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
