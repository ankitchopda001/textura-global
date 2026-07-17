import CountUp from "react-countup";

const stats = [
  {
    number: 10000,
    suffix: "+",
    title: "Embroidery Designs",
  },
  {
    number: 500,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    number: 15,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 98,
    suffix: "%",
    title: "Customer Satisfaction",
  },
];

function Stats() {
  return (
    <section className="bg-[#111827] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h4 className="text-yellow-400 uppercase tracking-widest">
            Our Achievements
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            Numbers That Speak
          </h2>

          <p className="text-gray-400 mt-5">
            Trusted by fashion brands and manufacturers across India and around
            the globe for premium embroidery design and exceptional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 text-center border border-slate-700 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-5xl font-bold text-yellow-400">
                {item.number}
                {item.suffix}
              </h2>

              <p className="text-gray-300 mt-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;