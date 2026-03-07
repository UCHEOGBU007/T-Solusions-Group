import React from "react";
import { Link } from "react-router";
import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Shield,
  Zap,
  HeadphonesIcon,
  Search,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Rocket,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      Icon: Code,
      title: "Enterprise Web Systems",
      description:
        "We engineer resilient, high-traffic web architectures designed for scale, security, and peak performance.",
      features: [
        "Microservices Architecture",
        "Custom SaaS Platforms",
        "E-commerce Ecosystems",
        "Progressive Web Apps",
      ],
      primaryImg:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      secondaryImg:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    },
    {
      Icon: Smartphone,
      title: "Mobile Experiences",
      description:
        "Delivering native-performance applications that bridge the gap between user desire and digital utility.",
      features: [
        "Native iOS & Android",
        "React Native Experts",
        "Biometric Integration",
        "Offline-First Sync",
      ],
      primaryImg:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      secondaryImg:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
    },
    {
      Icon: Search,
      title: "Search Engine Optimization",
      description:
        "Visibility is the currency of the digital age. We optimize your technical stack to dominate search rankings.",
      features: [
        "Technical SEO Audits",
        "Core Web Vitals Optimization",
        "Content Strategy",
        "Authority Building",
      ],
      primaryImg:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      secondaryImg:
        "https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=800",
    },
    {
      Icon: PenTool,
      title: "Brand & Graphic Design",
      description:
        "Visual identity that speaks volumes. We craft design systems that ensure your brand is unforgettable and cohesive.",
      features: [
        "Visual Identity Design",
        "Motion Graphics",
        "UI/UX Prototyping",
        "Marketing Collateral",
      ],
      primaryImg:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      secondaryImg:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const coreCapabilities = [
    {
      Icon: Database,
      title: "Data Engineering",
      desc: "Optimized SQL/NoSQL architectures.",
    },
    {
      Icon: Shield,
      title: "Cyber Security",
      desc: "End-to-end encryption & SOC2 compliance.",
    },
    {
      Icon: Zap,
      title: "Edge Performance",
      desc: "Global CDN & sub-100ms response times.",
    },
    {
      Icon: HeadphonesIcon,
      title: "24/7 Support",
      desc: "Proactive monitoring and maintenance.",
    },
  ];

  return (
    <div className="bg-white selection:bg-blue-100">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(12,167,230,0.25),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Premium Ecosystem
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
            Digital Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CA7E6] via-[#4EE3FF] to-white">
              Without Limits.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From technical infrastructure to brand visibility, we provide the
            end-to-end expertise required for modern digital dominance.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-40">
            {" "}
            {/* Reduced gap for mobile */}
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl flex items-center justify-center text-[#0CA7E6] shadow-sm">
                    <service.Icon size={28} className="lg:size-32" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    {service.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-medium text-sm lg:text-base"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#0CA7E6] shrink-0" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-bold text-[#0CA7E6] group transition-all hover:gap-4 pt-4"
                  >
                    Inquire about this service
                    <ArrowRight className="w-5 h-5 transition-transform" />
                  </Link>
                </div>

                {/* Interactive Image Side - FIXED FOR MOBILE */}
                <div className="w-full lg:w-1/2 group relative">
                  {/* Decorative Background - Hidden on small mobile to prevent overflow, visible on tablet+ */}
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-[#0CA7E6]/20 to-transparent rounded-[2rem] lg:rounded-[2.5rem] rotate-3 scale-105" />

                  <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] shadow-xl lg:shadow-2xl bg-slate-100">
                    {/* Secondary Image */}
                    <div className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover:scale-110">
                      <ImageWithFallback
                        src={service.secondaryImg}
                        alt={`${service.title} workspace`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Primary Image - Slide away effect (only works on devices with hover) */}
                    <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full lg:group-hover:translate-x-full">
                      <ImageWithFallback
                        src={service.primaryImg}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    </div>

                    {/* Reveal Label - Hidden on mobile as there's no hover to trigger it */}
                    <div className="hidden lg:block absolute bottom-6 left-6 z-20 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      <p className="text-white text-xs font-black uppercase tracking-[0.2em]">
                        Explore Technical Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Support Infrastructure
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((cap, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200 hover:border-transparent transition-all duration-500 overflow-hidden hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-[#0CA7E6] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <cap.Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS: The Workflow Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0CA7E6] via-[#0989BC] to-slate-900">
              <span className="text-black"> Our</span> Professional Workflow
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-0" />
            {[
              "Discovery",
              "Planning",
              "Design",
              "Development & Testing",
              "Launch",
            ].map((step, i) => (
              <div key={i} className="text-center group relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-slate-50 border-4 border-white text-[#0CA7E6] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg group-hover:from-[#0CA7E6] group-hover:to-cyan-400 group-hover:text-white transition-all duration-500">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step}
                </h3>
                <div className="w-8 h-1 bg-blue-100 mx-auto rounded-full group-hover:w-16 group-hover:bg-[#0CA7E6] transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: Immersive Dark with Glow */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-float relative bg-slate-950 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center shadow-2xl">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#0CA7E6]/30 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <Rocket className="w-12 h-12 text-[#0CA7E6] mx-auto mb-8 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Ready to engineer your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CA7E6] to-cyan-300">
                  next digital breakthrough?
                </span>
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#0CA7E6] to-cyan-500 text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(12,167,230,0.5)]"
              >
                Start Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
