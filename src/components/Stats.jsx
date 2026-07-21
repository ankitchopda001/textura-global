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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Numbers That Speak
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Trusted by fashion brands and manufacturers across India and around
            the globe for premium embroidery design and exceptional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center border border-slate-700 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 break-words">
                {item.number}
                {item.suffix}
              </h2>

              <p className="text-gray-300 mt-3 text-sm sm:text-base leading-6">
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