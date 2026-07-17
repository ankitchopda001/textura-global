import { motion } from "framer-motion";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal";

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Floral Embroidery",
    image: "/images/Luxury_Floral_Embroidery.jpeg",
    images: [
      "/images/Luxury_Floral_Embroidery.jpeg",
      "/images/Luxury_Floral_Embroidery.jpeg",
      "/images/Luxury_Floral_Embroidery.jpeg",
      "/images/Luxury_Floral_Embroidery.jpeg",
      "/images/Luxury_Floral_Embroidery.jpeg",
      "/images/Luxury_Floral_Embroidery.jpeg",
    ],
  },
  {
    id: 2,
    title: "Fashion Embroidery",
    image: "/images/Fashion_Embroidery.jpg",
    images: [
      "/images/Fashion_Embroidery.jpg",
      "/images/Fashion_Embroidery.jpg",
      "/images/Fashion_Embroidery.jpg",
      "/images/Fashion_Embroidery.jpg",
      "/images/Fashion_Embroidery.jpg",
      "/images/Fashion_Embroidery.jpg",
    ],
  },
  {
    id: 3,
    title: "Logo Digitizing",
    image: "/images/Logo_Digitizing.jpg",
    images: [
      "/images/Logo_Digitizing.jpg",
      "/images/Logo_Digitizing.jpg",
      "/images/Logo_Digitizing.jpg",
      "/images/Logo_Digitizing.jpg",
      "/images/Logo_Digitizing.jpg",
      "/images/Logo_Digitizing.jpg",
    ],
  },
  {
    id: 4,
    title: "Designer Saree",
    image: "/images/Designer_Saree.jpg",
    images: [
      "/images/Designer_Saree.jpg",
      "/images/Designer_Saree.jpg",
      "/images/Designer_Saree.jpg",
      "/images/Designer_Saree.jpg",
      "/images/Designer_Saree.jpg",
      "/images/Designer_Saree.jpg",
    ],
  },
  {
    id: 5,
    title: "Premium Garments",
    image: "/images/Premium_Garments.jpeg",
    images: [
      "/images/Premium_Garments.jpeg",
      "/images/Premium_Garments.jpeg",
      "/images/Premium_Garments.jpeg",
      "/images/Premium_Garments.jpeg",
      "/images/Premium_Garments.jpeg",
      "/images/Premium_Garments.jpeg",
    ],
  },
  {
    id: 6,
    title: "Custom Patterns",
    image: "/images/Custom_Patterns.avif",
    images: [
      "/images/Custom_Patterns.avif",
      "/images/Custom_Patterns.avif",
      "/images/Custom_Patterns.avif",
      "/images/Custom_Patterns.avif",
      "/images/Custom_Patterns.avif",
      "/images/Custom_Patterns.avif",
    ],
  },
];

function Portfolio() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  return (
    <>
      <motion.section
        id="portfolio"
        className="bg-slate-950 py-24 text-white"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">
            <h4 className="text-yellow-400 uppercase tracking-widest">
              Our Portfolio
            </h4>

            <h2 className="text-5xl font-bold mt-4">
              Featured Embroidery Designs
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Explore some of our premium embroidery work created for
              fashion brands, boutiques, and manufacturers.
            </p>
          </div>

          {/* Portfolio Grid */}

          <div className="grid md:grid-cols-3 gap-8">

            {portfolioItems.map((item) => (

              <motion.div
                key={item.id}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPortfolio(item)}
                className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl cursor-pointer border border-slate-800 hover:border-yellow-400"
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

                  <p className="text-gray-400 mt-2">
                    Click to view gallery
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </motion.section>

      {/* Gallery Modal */}

      {selectedPortfolio && (
        <PortfolioModal
          portfolio={selectedPortfolio}
          onClose={() => setSelectedPortfolio(null)}
        />
      )}
    </>
  );
}

export default Portfolio;