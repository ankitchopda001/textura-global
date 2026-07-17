import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Luxury Floral Embroidery",
    image: "/images/Luxury_Floral_Embroidery.jpeg",
  },
  {
    title: "Fashion Embroidery",
    image: "/images/Fashion_Embroidery.jpg",
  },
  {
    title: "Logo Digitizing",
    image: "/images/Logo_Digitizing.jpg",
  },
  {
    title: "Designer Saree",
    image: "/images/Designer_Saree.jpg",
  },
  {
    title: "Premium Garments",
    image: "/images/Premium_Garments.jpeg",
  },
  {
    title: "Custom Patterns",
    image: "/images/Custom_Patterns.avif",
  },
];

function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="bg-slate-950 py-24 text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h4 className="text-yellow-400 uppercase tracking-widest">
            Our Portfolio
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            Featured Embroidery Designs
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore some of our premium embroidery work created for fashion
            brands, boutiques, and manufacturers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-3xl bg-slate-900 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Portfolio;