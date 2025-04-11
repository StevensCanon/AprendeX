import { notFound } from 'next/navigation';
import { coursesArray } from '../../components/Cards';

export default function CoursePage({ params: { id } }: { params: { id: string } }) {
  const course = coursesArray.find(c => c.id === parseInt(id)) ?? notFound();
  
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{course.description}</p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contenido del Curso</h2>
              <p className="text-gray-600">Próximamente: Contenido detallado del curso...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 