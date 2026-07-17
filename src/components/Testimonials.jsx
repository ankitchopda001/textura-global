function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      company: "Fashion Export House",
      review:
        "Textura Global consistently delivers premium embroidery quality with on-time delivery. Highly recommended!",
    },
    {
      name: "Sarah Williams",
      company: "UK Fashion Brand",
      review:
        "Excellent craftsmanship and outstanding communication. Our international orders are always completed perfectly.",
    },
    {
      name: "Priya Patel",
      company: "Designer Boutique",
      review:
        "The embroidery detailing is exceptional. Our customers love the quality and finish.",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h4 className="text-yellow-400 uppercase tracking-widest">
            Testimonials
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We are trusted by fashion brands, exporters, and manufacturers across India and worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-yellow-400 transition duration-300"
            >
              <div className="text-yellow-400 text-4xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 italic mb-6">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-yellow-400">
                {item.company}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;