import {
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
// import emailjs from "@emailjs/browser";

export function Contact() {
  const brandColor = "#0CA7E6";

  // 1. STATE MANAGEMENT
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    _honeypot: "", // Bot trap
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. SUBMISSION LOGIC
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // SECURITY: Honeypot check
    if (formData._honeypot) return;

    setStatus("loading");

    try {
      // SECURITY: Sanitization (Trimming whitespace)
      const sanitizedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service,
        message: formData.message.trim(),
      };

      // A. Submit to Formspree (Your Dashboard)
      const formspreeResponse = await fetch(import.meta.env.VITE_FORMSPREE_ID, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!formspreeResponse.ok)
        throw new Error("Database synchronization failed.");

      // // B. Submit to EmailJS (Auto-reply to Client)
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     to_name: sanitizedData.name,
      //     to_email: sanitizedData.email,
      //     service_requested: sanitizedData.service,
      //     message: sanitizedData.message,
      //   },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      // );

      // C. SUCCESS FLOW
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
        _honeypot: "",
      });

      // Automatically reset status after 6 seconds
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      // D. ERROR FLOW
      setStatus("error");
      setErrorMessage(
        "Transmission failed. Please verify your connection or try again.",
      );
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <div className="bg-white font-sans antialiased text-slate-900">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url('/Contact-us.avif')` }}
        />
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 shadow-sm"
            style={{ backgroundColor: brandColor, color: "white" }}
          >
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Let's Build Something{" "}
            <span style={{ color: brandColor }}>Exceptional.</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-5 border border-slate-100">
            {/* Form Side */}
            <div className="lg:col-span-3 p-8 md:p-14">
              <h2 className="text-3xl font-bold mb-2">Initialize Project</h2>
              <p className="text-slate-600 mb-10">
                Fill out the brief below to start the conversation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* BOT PROTECTION (HIDDEN) */}
                <input
                  type="text"
                  name="_honeypot"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData._honeypot}
                />

                {/* NOTIFICATION CENTER */}
                {status === "success" && (
                  <div className="relative overflow-hidden p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="shrink-0" />
                      <p className="font-medium text-lg">
                        Success! We've received your message and we will get
                        back to you soon.
                      </p>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="absolute bottom-0 left-0 h-1 bg-green-500 animate-[progress_10s_linear]" />
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 animate-in fade-in zoom-in-95">
                    <AlertCircle size={20} className="shrink-0" />
                    <p className="font-medium text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={status === "loading"}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none transition-colors disabled:opacity-50"
                      placeholder="e.g. Full Name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={status === "loading"}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none transition-colors disabled:opacity-50"
                      placeholder="e.g. email@example.com"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Category
                  </label>
                  <select
                    name="service"
                    required
                    disabled={status === "loading"}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none appearance-none disabled:opacity-50"
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <option value="">Select a Category</option>
                    <option value="web development">
                      SaaS / Web Application
                    </option>
                    <option value="mobile app development">
                      Mobile (iOS/Android)
                    </option>
                    <option value="seo-services">SEO Services</option>
                    <option value="graphic design">Graphic Design</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Brief
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    disabled={status === "loading"}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#0CA7E6] outline-none transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your vision..."
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-4 px-10 py-4 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 hover:cursor-pointer active:scale-95 flex items-center gap-3 shadow-lg disabled:grayscale disabled:cursor-not-allowed"
                  style={{
                    background:
                      status === "loading"
                        ? "#94a3b8"
                        : `linear-gradient(135deg, ${brandColor} 0%, #087EB0 100%)`,
                  }}
                >
                  {status === "loading" ? (
                    <>
                      Processing <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar Side */}
            <div className="lg:col-span-2 bg-slate-900 p-8 md:p-14 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Direct Access</h3>
                <div className="space-y-10">
                  <div className="flex gap-4 group">
                    <div className="p-3 rounded-lg bg-white/5 text-[#0CA7E6] group-hover:bg-[#0CA7E6] group-hover:text-white transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
                        Call
                      </p>
                      <a
                        href="tel:+6285746358657"
                        className="text-lg hover:text-[#0CA7E6] transition-colors"
                      >
                        +62 857 4635 8657
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="p-3 rounded-lg bg-white/5 text-[#0CA7E6] group-hover:bg-[#0CA7E6] group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
                        Email
                      </p>
                      <a
                        href="mailto:support@tsolusions.com"
                        className="text-lg hover:text-[#0CA7E6] transition-colors"
                      >
                        support@tsolusions.com
                      </a>
                      <br />
                      <a
                        href="mailto:Info@tsolusions.com"
                        className="text-lg hover:text-[#0CA7E6] transition-colors"
                      >
                        Info@tsolusions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10">
                <div className="flex gap-4 items-center">
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

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs tracking-widest uppercase">
          © 2026 Your Software Studio • All Rights Reserved
        </p>
      </footer>

      {/* Tailwind Custom Animation for Progress Bar */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
