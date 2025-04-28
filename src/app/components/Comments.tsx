"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, User } from "lucide-react"
import type { Comment } from "../../lib/data"
import { useSession } from "next-auth/react"

interface CommentSectionProps {
  courseId: string
  comments: Comment[]
}

export function CommentSection({ courseId, comments: initialComments }: CommentSectionProps) {
  const { data: session } = useSession()
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")
  const [rating, setRating] = useState(5)
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (newComment.trim() === "") return

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      user: {
        name: session?.user?.name || "Usuario Anónimo",
        avatar: session?.user?.image || "/placeholder.svg?height=40&width=40",
      },
      content: newComment,
      rating,
      date: new Date().toLocaleDateString(),
    }

    setComments([comment, ...comments])
    setNewComment("")
    setRating(5)
  }

  return (
    <div className="space-y-6 bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold">Opiniones y comentarios</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Tu valoración:</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-5 w-5 ${
                    star <= (hoveredRating || rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <Textarea
          placeholder="Comparte tu opinión sobre este curso..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
        />

        <Button type="submit">Publicar comentario</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
              <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{comment.user.name}</span>
                <span className="text-xs text-muted-foreground">{comment.date}</span>
              </div>

              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < comment.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
              </div>

              <p className="text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
