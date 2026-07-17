import { motion } from "framer-motion";
function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/hero.webp"
        alt="Embroidery Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <p className="uppercase tracking-[6px] text-yellow-400 font-semibold mb-6">
          Premium Embroidery Design & Manufacturing
        </p>

        <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
        >
          Crafting Excellence
          <br />
          <span className="text-yellow-400">
            In Every Thread
          </span>
        </motion.h1>

       <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-8 text-gray-200"
        >
            We deliver world-class embroidery design, digitizing, and textile manufacturing
            solutions for fashion brands, garment exporters, and global businesses with
            unmatched precision, quality, and craftsmanship.
        </motion.p>

        {/* Floating Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-yellow-400">
            10K+
            </h3>
            <p className="text-gray-300 mt-2">
            Premium Designs
            </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-yellow-400">
            500+
            </h3>
            <p className="text-gray-300 mt-2">
            Happy Clients
            </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-yellow-400">
            10+
            </h3>
            <p className="text-gray-300 mt-2">
            Countries Served
            </p>
        </div>

        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;