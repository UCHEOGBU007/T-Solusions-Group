import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const brandColor = "#0CA7E6";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-white font-sans antialiased text-slate-900">
      {/* DYNAMIC HERO SECTION */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-40 scale-105"
          style={{
            backgroundImage: `url('/Contact-us.avif')`,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to bottom, transparent, rgba(12, 167, 230, 0.2))`,
          }}
        />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 shadow-sm"
            style={{ backgroundColor: brandColor, color: "white" }}
          >
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Let's Build Something{" "}
            <span style={{ color: brandColor }}>Exceptional.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-bold leading-relaxed">
            From initial concept to deployment—partner with a team that speaks
            the language of innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-5 border border-slate-100">
            {/* Contact Form */}
            <div className="lg:col-span-3 p-8 md:p-14">
              <h2 className="text-3xl font-bold mb-2">Initialize Project</h2>
              <p className="text-slate-600 mb-10">
                Fill out the brief below to start the conversation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none transition-colors"
                      placeholder="e.g. Alan Turing"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none transition-colors"
                      placeholder="alan@dev.com"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Type
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none transition-colors appearance-none"
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <option value="">Select a Category</option>
                    <option value="web">SaaS / Web Application</option>
                    <option value="mobile">Mobile (iOS/Android)</option>
                    <option value="cloud">Cloud Architecture</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Brief Detail
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none transition-colors resize-none"
                    placeholder="What are we building?"
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 px-10 py-4 rounded-full text-white font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 flex items-center gap-3 shadow-[0_10px_25px_-5px_rgba(12,167,230,0.4)] hover:shadow-[0_20px_35px_-10px_rgba(12,167,230,0.6)]"
                  style={{
                    background: `linear-gradient(135deg, ${brandColor} 0%, #087EB0 100%)`,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Transmit Message <Send size={18} />
                </button>
              </form>
            </div>

            {/* Sidebar Info (2/5 Columns) */}
            <div className="lg:col-span-2 bg-slate-900 p-8 md:p-14 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Direct Access</h3>
                <div className="space-y-10">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-white/5 text-[#0CA7E6]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
                        Call
                      </p>
                      <p className="text-lg">+1 (555) 000-TECH</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-white/5 text-[#0CA7E6]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
                        Email
                      </p>
                      <p className="text-lg">hello@devstudio.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10">
                <p className="text-slate-400 text-sm mb-4 italic">
                  "Transforming code into capital."
                </p>
                <div className="flex gap-4">
                  <div className="h-2 w-2 rounded-full animate-pulse bg-green-500"></div>
                  <span className="text-xs text-slate-300 font-medium">
                    Currently accepting new projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer CTA */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm tracking-widest uppercase">
          © 2026 Your Software Studio • Engineering Excellence
        </p>
      </footer>
    </div>
  );
}
