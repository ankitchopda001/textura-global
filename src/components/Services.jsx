import { FaTshirt, FaPaintBrush, FaGem, FaIndustry, FaCogs, FaStar } from "react-icons/fa";
    import { motion } from "framer-motion";

const services = [
  {
    icon: <FaPaintBrush size={40} />,
    title: "Custom Embroidery",
    desc: "Unique embroidery designs created for your business and fashion needs.",
  },
  {
    icon: <FaTshirt size={40} />,
    title: "Garment Embroidery",
    desc: "Premium embroidery for shirts, kurtis, sarees, hoodies, and uniforms.",
  },
  {
    icon: <FaGem size={40} />,
    title: "Luxury Designs",
    desc: "Elegant embroidery with premium finishing for luxury fashion brands.",
  },
  {
    icon: <FaIndustry size={40} />,
    title: "Bulk Production",
    desc: "High-quality embroidery production for factories and exporters.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Digitizing",
    desc: "Professional DST, PES, EMB and all embroidery machine formats.",
  },
  {
    icon: <FaStar size={40} />,
    title: "Premium Quality",
    desc: "Every design is checked carefully before final delivery.",
  },
];

function Services() {
  return (
    <motion.section
        id="services"
        className="bg-[#101828] py-24 text-white"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h4 className="text-yellow-400 uppercase tracking-widest">
            Our Services
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            What We Offer
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We provide premium embroidery solutions with creativity,
            precision, and modern technology for every business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-yellow-400 transition"
            >

              <div className="text-yellow-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}

export default Services;