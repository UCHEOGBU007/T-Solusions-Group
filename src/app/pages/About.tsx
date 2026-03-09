import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Heart,
  Rocket,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function About() {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for technical perfection in every line of code.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Your vision, our expertise—unified toward a single goal.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovation",
      description: "We don't follow trends; we build the tools that set them.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Craftsmanship driven by a genuine love for digital build.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      exp: "15+ Years Experience",
    },
    { name: "Michael Chen", role: "CTO", exp: "Cloud Architect" },
    { name: "Emily Rodriguez", role: "Head of Design", exp: "UX Visionary" },
    { name: "David Park", role: "Lead Developer", exp: "Full-Stack Expert" },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION: Dynamic 3D Tech Background */}
      {/* 1. HERO SECTION: Collaborative 3D Tech Background */}
      <section className="relative py-48 bg-slate-950 overflow-hidden flex items-center justify-center">
        {/* Background Image: Futuristic Workspace with Professionals */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />

        {/* Sophisticated Dark Blue Overlay (Tied to #0CA7E6) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div
          className="absolute inset-0 z-10 opacity-60"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(12, 167, 230, 0.25), transparent 50%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-left">
          <div className="max-w-3xl">
            <span
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase bg-[#0CA7E6]/10 border border-[#0CA7E6]/30 rounded-full backdrop-blur-md"
              style={{ color: "#0CA7E6" }}
            >
              Our Identity
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              About <span style={{ color: "#0CA7E6" }}>T-Solusions</span> <br />
              <span className="text-slate-400">Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              We are a collective of architects, designers, and engineers
              committed to the art of{" "}
              <span className="text-white font-semibold">
                high-performance software development.
              </span>
            </p>
            {/* Primary CTA for About Page */}
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full text-white font-bold cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_20px_-10px_rgba(12,167,230,0.5)] flex items-center justify-center gap-2 w-fit group"
              style={{
                background: `linear-gradient(135deg, #0CA7E6 0%, #087EB0 100%)`,
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Meet the Team
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Decorative 3D Element Overlay */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full z-10 pointer-events-none opacity-40 hidden lg:block">
          <div className="w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(12,167,230,0.2),transparent_70%)]"></div>
        </div>
      </section>

      {/* 2. STORY SECTION: Asymmetric Layout */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">
                Our Story: From a <br />
                <span className="text-[#0CA7E6] italic">
                  Vision to a Powerhouse.
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Founded in 2018, we began with a simple mission: to bridge the
                  gap between complex technology and business success.
                </p>
                <p>
                  Each project has strengthened our commitment to delivering
                  quality software. Today, we're proud to be a trusted partner
                  for businesses looking to innovate and grow through
                  technology.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-3xl -rotate-2 -z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?..."
                alt="Team work"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION: Immersive Dark (DRY Concept) */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-[#0CA7E6]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-[#0CA7E6]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To empower brands with software that doesn't just work, but
                wins. We engineering competitive advantages through technical
                precision.
              </p>
            </div>
            <div className="group p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-[#0CA7E6]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-[#0CA7E6]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the global standard for digital craftsmanship, where
                every line of code contributes to a smarter, more efficient
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUES SECTION: Clean Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Core Principles
            </h2>
            <div className="w-20 h-1 bg-[#0CA7E6] mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, i) => (
              <div key={i} className="group">
                <div className="text-[#0CA7E6] mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION: Modern Minimalist */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Leadership
              </h2>
              <p className="text-gray-600 text-lg">
                The minds behind our technical excellence.
              </p>
            </div>
            <Link
              to="/Contact"
              className="text-[#0CA7E6] font-bold flex items-center hover:underline"
            >
              Contact Our Team <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-20 h-20 bg-slate-900 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-[#0CA7E6] transition-colors duration-500">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{m.name}</h3>
                <p className="text-[#0CA7E6] font-medium mb-4">{m.role}</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  {m.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* // PLANS SECTION */}

      {/* 6. CAREERS CTA: Floating & Immersive (DRY Physics) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-float group relative bg-slate-950 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px]" />
            <div className="relative z-10">
              <Rocket className="w-12 h-12 text-[#0CA7E6] mx-auto mb-8 animate-bounce-slow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to build the{" "}
                <span className="text-[#0CA7E6]">future?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                We are always looking for visionary developers and designers to
                join our growing ecosystem.
              </p>
              <a
                href="mailto:careers@tsolusions.com"
                className="inline-flex items-center px-10 py-4 bg-[#0CA7E6] text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
              >
                Join the Mission <Mail className="ml-3 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
