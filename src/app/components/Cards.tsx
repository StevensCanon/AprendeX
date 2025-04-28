import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/cursos/${course.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Badge className="absolute top-1 right-1 z-10" variant="secondary">
            {course.category}
          </Badge>
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-bold my-2">{course.title}</CardTitle>
          </div>
          <CardDescription className="line-clamp-2">
            {course.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < course.rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({course.reviewCount} opiniones)
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-muted-foreground">
            {course.duration} horas
          </div>
          <div className="font-bold">
            {course.price === 0 ? "Gratis" : `$${course.price}`}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
