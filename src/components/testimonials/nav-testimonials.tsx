import { Star } from "lucide-react"

export default function NavTestimonials() {
  const testimonials = [
    {
      id: 1,
      text: "From zero to $2K/month writing for founders.",
      rating: 5,
    },
    {
      id: 2,
      text: "Landed my first client in 2 weeks.",
      rating: 5,
    },
    {
      id: 3,
      text: "Replaced hours of YouTube with one clear plan.",
      rating: 5,
    },
  ]

  return (
    <section className="py-3 px-2 pt-10 mt-2">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center px-1">
              {/* Star Rating */}
              <div className="flex justify-center gap-0.5 mb-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xs font-normal text-gray-600 leading-tight">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
