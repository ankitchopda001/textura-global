import { useState } from "react";
import { sendInquiry } from "../services/inquiryService";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await sendInquiry(formData);

      if (result.success) {
        alert("✅ Inquiry Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send inquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send inquiry.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#0f172a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h4 className="text-yellow-400 uppercase tracking-widest">
            Contact Us
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a custom embroidery requirement? Contact our team today for
            premium embroidery and textile solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <div className="bg-yellow-400 text-black p-4 rounded-full">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-gray-400">
                  +91 8469802438
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-yellow-400 text-black p-4 rounded-full">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-400">
                  info@texturaglobal.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-yellow-400 text-black p-4 rounded-full">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p className="text-gray-400">
                  Surat, Gujarat, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-slate-900 rounded-3xl p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Write Your Requirement..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

            </form>

            <div className="mt-8 text-center">
              <a
                href="https://wa.me/918469802438"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;