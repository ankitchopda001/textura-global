import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              Textura Global
            </h2>

            <p className="text-gray-400 mt-6 leading-7">
              Premium embroidery digitizing and embroidery design solutions
              trusted by garment manufacturers, exporters and fashion brands
              across India and worldwide.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/918469802438"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Embroidery Digitizing</li>
              <li>Custom Embroidery</li>
              <li>Garment Embroidery</li>
              <li>Bulk Production</li>
              <li>Luxury Designs</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-yellow-400 mt-1" />
                <span>+91 8469802438</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-yellow-400 mt-1" />
                <span>info@texturaglobal.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span>Surat, Gujarat, India</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-gray-500">

        © 2026 Textura Global. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;