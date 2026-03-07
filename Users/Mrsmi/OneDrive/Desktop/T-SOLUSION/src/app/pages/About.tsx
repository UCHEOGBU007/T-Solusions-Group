// import {
//   Target,
//   Eye,
//   Award,
//   Users,
//   TrendingUp,
//   Heart,
//   Rocket,
//   Mail,
// } from "lucide-react";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// export function About() {
//   const values = [
//     {
//       icon: <Award className="w-8 h-8" color="#0CA7E6" />,
//       title: "Excellence",
//       description: "We strive for excellence in every project we undertake",
//     },
//     {
//       icon: <Users className="w-8 h-8" color="#0CA7E6" />,
//       title: "Collaboration",
//       description: "We work closely with clients to achieve their goals",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" color="#0CA7E6" />,
//       title: "Innovation",
//       description: "We embrace new technologies and creative solutions",
//     },
//     {
//       icon: <Heart className="w-8 h-8" color="#0CA7E6" />,
//       title: "Passion",
//       description: "We love what we do and it shows in our work",
//     },
//   ];

//   const team = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       description:
//         "15+ years of experience in software development and business strategy",
//     },
//     {
//       name: "Michael Chen",
//       role: "CTO",
//       description: "Expert in cloud architecture and full-stack development",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Head of Design",
//       description: "Award-winning designer with a passion for user experience",
//     },
//     {
//       name: "David Park",
//       role: "Lead Developer",
//       description: "Specialized in building scalable web applications",
//     },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl font-bold mb-6">About T-Solusions Group</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             We are a team of passionate developers, designers, and innovators
//             dedicated to creating exceptional software solutions that make a
//             difference.
//           </p>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold font-italic mb-6">
//                 Our <span className="text-[#0CA7E6] ">Story</span>
//               </h2>
//               <p className="text-gray-600 mb-4">
//                 Founded in 2018, DevStudio began with a simple mission: to help
//                 businesses leverage technology to achieve their goals. What
//                 started as a small team of three passionate developers has grown
//                 into a full-service software development agency.
//               </p>
//               <p className="text-gray-600 mb-4">
//                 Over the years, we've had the privilege of working with
//                 startups, SMEs, and enterprise clients across various
//                 industries. Each project has taught us valuable lessons and
//                 strengthened our commitment to delivering quality software
//                 solutions.
//               </p>
//               <p className="text-gray-600">
//                 Today, we're proud to be a trusted partner for businesses
//                 looking to innovate and grow through technology. Our team
//                 continues to expand, but our core values remain the same:
//                 excellence, integrity, and client success.
//               </p>
//             </div>
//             <div>
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNjU2NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                 alt="Team meeting"
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-[#0CA7E6] mb-4">
//                 <Target className="w-12 h-12" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//               <p className="text-gray-600">
//                 To empower businesses with innovative software solutions that
//                 drive growth, efficiency, and competitive advantage. We're
//                 committed to delivering excellence in every project while
//                 fostering long-term partnerships built on trust and mutual
//                 success.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-[#0CA7E6] mb-4">
//                 <Eye className="w-12 h-12" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//               <p className="text-gray-600">
//                 To be the leading software development agency recognized for
//                 transforming businesses through cutting-edge technology and
//                 exceptional service. We envision a future where every business,
//                 regardless of size, can harness the power of digital innovation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">
//               Our <span className="text-[#0CA7E6]">Core </span>
//               Values
//             </h2>
//             <p className="text-xl text-gray-600">
//               The principles that guide everything we do
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
//               >
//                 <div className="text-blue-600 mb-4 flex justify-center">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
//             <p className="text-xl text-gray-600">
//               Experienced professionals leading the way
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md text-center"
//               >
//                 <div className="w-24 h-24 bg-gradient-to-br from-[#0CA7E6] to-[#0CA7E9] rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <Users className="w-12 h-12 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
//                 <p className="text-[#0CA7E6]  mb-3">{member.role}</p>
//                 <p className="text-gray-600 text-sm">{member.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20  text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2
//             className="
//     relative inline-flex items-center text-4xl font-extrabold mb-6
//     bg-gradient-to-r from-black via-[#0CA7E6] to-[#4EE3FF] bg-clip-text text-transparent
//   "
//           >
//             <span className="relative flex items-center">
//               <span className="absolute -left-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#0CA7E6]/30 to-[#4EE3FF]/30 blur-lg -z-10"></span>
//               <Rocket className="w-6 h-6 text-[#0CA7E6] mr-3" />
//             </span>
//             Want to Join Our Team?
//             <span className="relative flex items-center">
//               <span className="absolute -right-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#4EE3FF]/30 to-[#0CA7E6]/30 blur-lg -z-10"></span>
//               <Rocket className="w-6 h-6 text-[#0CA7E6] ml-3 rotate-180" />
//             </span>
//           </h2>
//           <p className="text-xl mb-8 text-gray-900 max-w-2xl mx-auto font-bold  ">
//             We're always looking for talented individuals who share our passion
//             for technology and innovation.
//           </p>
//           <a
//             href="mailto:careers@devstudio.com"
//             className="bg-gray-900 text-[#0CA7E6] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
//           >
//             <span className="flex items-center inline-flex">
//               Explore Careers
//               <Mail className="ml-2 w-5 h-5" size={18} />
//             </span>
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

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
      {/* 1. HERO SECTION: Clean & Impactful */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,167,230,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Our Identity
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter">
            About <span className="text-[#0CA7E6]">T-Solusions</span> Group
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a collective of architects, designers, and engineers
            committed to the art of high-performance software.
          </p>
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
              to="/team"
              className="text-[#0CA7E6] font-bold flex items-center hover:underline"
            >
              Meet the whole team <ArrowUpRight className="ml-1 w-4 h-4" />
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
