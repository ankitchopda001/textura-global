import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function PortfolioModal({ portfolio, onClose }) {
  if (!portfolio) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition"
          >
            <X size={22} />
          </button>

          {/* Heading */}
          <div className="p-8 pb-2">
            <h2 className="text-4xl font-bold text-yellow-400">
              {portfolio.title}
            </h2>

            <p className="text-gray-400 mt-2">
              Explore our premium embroidery work.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 p-8">
            {portfolio.images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt={`${portfolio.title}-${index + 1}`}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PortfolioModal;