// import { ExternalLink, Code, Smartphone, ShoppingCart } from "lucide-react";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
// import { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// export function Portfolio() {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       category: "web",
//       description:
//         "A full-featured online shopping platform with advanced filtering and payment integration",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       image:
//         "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MjYxOTIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       icon: <ShoppingCart className="w-6 h-6 text-[#0CA7E6]" />,
//     },
//     {
//       id: 2,
//       title: "Healthcare Management System",
//       category: "web",
//       description:
//         "Comprehensive patient management system with appointment scheduling and medical records",
//       technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
//       image:
//         "https://images.unsplash.com/photo-1614029896656-a094f640558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjY2MjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       icon: <Code className="w-6 h-6 text-[#0CA7E6]" />,
//     },
//     {
//       id: 3,
//       title: "Fitness Tracking App",
//       category: "mobile",
//       description:
//         "Mobile application for tracking workouts, nutrition, and health metrics",
//       technologies: ["React Native", "Firebase", "Redux"],
//       image:
//         "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyNjY5ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       icon: <Smartphone className="w-6 h-6 text-[#0CA7E6]" />,
//     },
//     {
//       id: 4,
//       title: "Real Estate Portal",
//       category: "web",
//       description:
//         "Property listing platform with virtual tours and advanced search capabilities",
//       technologies: ["Next.js", "GraphQL", "Prisma", "Google Maps API"],
//       image:
//         "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcyNjM4ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       icon: <Code className="w-6 h-6 text-[#0CA7E6]" />,
//     },
//     {
//       id: 5,
//       title: "Food Delivery App",
//       category: "mobile",
//       description:
//         "On-demand food delivery application with real-time tracking and multiple payment options",
//       technologies: ["Flutter", "Node.js", "Socket.io", "Google Maps"],
//       image:
//         "https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjY2MDc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       icon: <Smartphone className="w-6 h-6 text-[#0CA7E6]" />,
//     },
//     {
//       id: 6,
//       title: "Cloud Storage Solution",
//       category: "cloud",
//       description:
//         "Secure cloud storage platform with file sharing and collaboration features",
//       technologies: ["Angular", "AWS S3", "Lambda", "DynamoDB"],
//       image:
//         "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNjA4OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       icon: <Code className="w-6 h-6 text-[#0CA7E6]" />,
//     },
//   ];

//   const filters = [
//     { id: "all", label: "All Projects" },
//     { id: "web", label: "Web Apps" },
//     { id: "mobile", label: "Mobile Apps" },
//     { id: "cloud", label: "Cloud Solutions" },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Explore our successful projects and see how we've helped businesses
//             achieve their goals
//           </p>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="py-12 bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-4">
//             {filters.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`px-6 py-2 rounded-full font-bold transition-colors cursor-pointer ${
//                   activeFilter === filter.id
//                     ? "bg-[#0CA7E6] text-white"
//                     : "bg-gray-100 text-[#0CA7E6] hover:bg-gray-200"
//                 }`}
//               >
//                 {filter.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//               >
//                 <div className="relative group">
//                   <ImageWithFallback
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-64 object-cover "
//                   />
//                   <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all flex items-center justify-center">
//                     <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center mb-3">
//                     <div className="text-blue-600 mr-2">{project.icon}</div>
//                     <h3 className="text-xl font-semibold">{project.title}</h3>
//                   </div>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-blue-50 text-[#0CA7E6] rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2
//               className="
//     text-4xl font-bold mb-4
//     bg-gradient-to-r from-black via-gray-700 to-black
//     bg-clip-text text-transparent
//     tracking-wide
//   "
//             >
//               Project Success Metrics
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { number: "150+", label: "Projects Completed" },
//               { number: "98%", label: "Client Satisfaction" },
//               { number: "50+", label: "Active Clients" },
//               { number: "45", label: "Countries Served" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-[#0CA7E6] mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">
//               What Our{" "}
//               <span
//                 className="bg-gradient-to-r from-[#0CA7E6] via-[#0077A3] to-black
//               bg-clip-text text-transparent font-semibold tracking-wide"
//               >
//                 Clients Say
//               </span>
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "John Smith",
//                 company: "TechStart Inc",
//                 quote:
//                   "DevStudio transformed our vision into reality. Their expertise and dedication are unmatched.",
//               },
//               {
//                 name: "Sarah Williams",
//                 company: "HealthCare Pro",
//                 quote:
//                   "Outstanding work on our healthcare platform. Professional, timely, and exceeded expectations.",
//               },
//               {
//                 name: "Michael Brown",
//                 company: "RetailMax",
//                 quote:
//                   "The e-commerce solution they built increased our sales by 200%. Highly recommended!",
//               },
//             ].map((testimonial, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <p className="text-gray-600 mb-4 italic">
//                   "{testimonial.quote}"
//                 </p>
//                 <div className="border-t pt-4">
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-sm text-gray-500">{testimonial.company}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Motion & Interactive Redesign */}
//       <section className="relative py-32 overflow-hidden bg-white">
//         {/* Ambient Background Glows */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
//           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] rounded-full bg-blue-50/50 blur-[120px]" />
//           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] rounded-full bg-sky-100/50 blur-[120px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Parent Container with:
//         1. Floating Animation (animate-float)
//         2. Hover Engagement (scale, shadow-color change, border-light)
//     */}
//           <div
//             className="animate-float group relative bg-slate-900 rounded-[2.5rem] p-10 md:p-20 overflow-hidden
//                     transition-all duration-700 ease-out
//                     hover:scale-[1.02] hover:shadow-[0_20px_80px_-15px_rgba(12,167,230,0.3)]
//                     border border-white/5 hover:border-blue-400/30"
//           >
//             {/* Dynamic Background Overlay - Brightens on Hover */}
//             <div
//               className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(12,167,230,0.1),transparent_70%)]
//                       opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//             />

//             {/* Animated Grid Lines */}
//             <div
//               className="absolute inset-0 opacity-[0.05] [mask-image:linear-gradient(white,transparent)]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//                 backgroundSize: "40px 40px",
//               }}
//             />

//             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
//               <div className="lg:w-3/5 text-center lg:text-left">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
//                   <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//                   </span>
//                   Available for New Projects
//                 </div>

//                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
//                   Ready to bring your <br />
//                   <span className="relative inline-block">
//                     <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0CA7E6] to-cyan-300">
//                       ideas to life?
//                     </span>
//                     {/* Decorative underline that expands on hover */}
//                     <span className="absolute bottom-2 left-0 w-0 h-1 bg-[#0CA7E6] transition-all duration-500 group-hover:w-full opacity-30" />
//                   </span>
//                 </h2>

//                 <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-0">
//                   We don't just build software; we engineer growth. Let's
//                   discuss how to make your project the next industry standard.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-6 w-full lg:w-auto">
//                 <a
//                   href="/contact"
//                   className="group/btn relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-[#0CA7E6] rounded-2xl hover:bg-white hover:text-[#0CA7E6] shadow-xl shadow-blue-900/20"
//                 >
//                   Start Your Journey
//                   <ExternalLink className="ml-3 w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
//                 </a>

//                 <div className="flex items-center justify-center lg:justify-start gap-4">
//                   <div className="flex -space-x-3">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"
//                       />
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-500 font-medium">
//                     Join 50+ happy clients
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  ExternalLink,
  Code,
  Smartphone,
  ShoppingCart,
  CheckCircle2,
  Globe,
  Users,
  Trophy,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * Animated Counter Component
 */
const Counter = ({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, parseInt(value), {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="p-3 bg-blue-50 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-[#0CA7E6]" />
      </div>
      <div className="text-4xl font-bold text-slate-900 mb-1">
        {displayValue}
        {value.includes("+") || value.includes("%")
          ? value.replace(/\d+/g, "")
          : ""}
      </div>
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Advanced filtering and payment integration",
      technologies: ["React", "Node.js", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1080",
      icon: <ShoppingCart />,
    },
    {
      id: 2,
      title: "Healthcare System",
      category: "web",
      description: "Patient management and records",
      technologies: ["Vue.js", "Python", "AWS"],
      image:
        "https://images.unsplash.com/photo-1614029896656-a094f640558d?q=80&w=1080",
      icon: <Code />,
    },
    {
      id: 3,
      title: "Fitness Tracking",
      category: "mobile",
      description: "Workout and nutrition tracking",
      technologies: ["React Native", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?q=80&w=1080",
      icon: <Smartphone />,
    },
    // ... add other projects here
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "TechStart Inc",
      quote:
        "DevStudio transformed our vision into reality. Their expertise is unmatched.",
      role: "CEO",
    },
    {
      name: "Sarah Williams",
      company: "HealthCare Pro",
      quote: "Professional, timely, and exceeded all expectations.",
      role: "Product Manager",
    },
    {
      name: "Michael Brown",
      company: "RetailMax",
      quote:
        "The e-commerce solution increased our sales by 200%. Highly recommended!",
      role: "Director",
    },
    {
      name: "Emily Chen",
      company: "CloudScale",
      quote: "Technical depth and design sensibility in one package.",
      role: "CTO",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-600">
      {/* --- Modern Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">
              Case Studies
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-4 mb-6 tracking-tight">
              Selected <span className="text-[#0CA7E6]">Works</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between complex problems and elegant digital
              solutions. Explore our journey through code and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Filter Navigation --- */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-2 md:gap-4">
            {["all", "web", "mobile", "cloud"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === f
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                    : "text-slate-500 hover:bg-gray-100"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Projects Grid --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm">
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 bg-blue-50 rounded-lg text-[#0CA7E6]">
                    {project.icon}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-500 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold tracking-tighter uppercase px-2 py-1 bg-slate-100 text-slate-600 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Animated Stats Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Counter value="150+" label="Launched" icon={CheckCircle2} />
            <Counter value="98%" label="Satisfaction" icon={Trophy} />
            <Counter value="50+" label="Global Clients" icon={Users} />
            <Counter value="12" label="Countries" icon={Globe} />
          </div>
        </div>
      </section>

      {/* --- Responsive Carousel Testimonials --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Voices</h2>
            <div className="h-1 w-20 bg-[#0CA7E6] mx-auto rounded-full"></div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 !overflow-visible"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-[2rem] border border-slate-700 h-full flex flex-col justify-between hover:bg-slate-800 transition-colors cursor-grab active:cursor-grabbing">
                  <div>
                    <div className="text-[#0CA7E6] text-6xl font-serif leading-none mb-6">
                      “
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                      {t.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-slate-700 pt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0CA7E6] to-blue-600 rounded-full flex items-center justify-center font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-sm text-gray-500">
                        {t.role} @ {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- Enhanced CTA Section --- */}
      <section className="relative py-32 overflow-hidden bg-white">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] rounded-full bg-blue-50/50 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] rounded-full bg-sky-100/50 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* //           Parent Container with:
         1. Floating Animation (animate-float)
         2. Hover Engagement (scale, shadow-color change, border-light)     */}{" "}
          <div
            className="animate-float group relative bg-slate-900 rounded-[2.5rem] p-10 md:p-20 overflow-hidden
                    transition-all duration-700 ease-out
                    hover:scale-[1.02] hover:shadow-[0_20px_80px_-15px_rgba(12,167,230,0.3)]
                    border border-white/5 hover:border-blue-400/30"
          >
            {/* /* Dynamic Background Overlay - Brightens on Hover/* */}
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(12,167,230,0.1),transparent_70%)]
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />

            {/* Animated Grid Lines */}
            <div
              className="absolute inset-0 opacity-[0.05] [mask-image:linear-gradient(white,transparent)]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-3/5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Available for New Projects
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  Ready to bring your <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0CA7E6] to-cyan-300">
                      ideas to life?
                    </span>
                    {/* Decorative underline that expands on hover */}
                    <span className="absolute bottom-2 left-0 w-0 h-1 bg-[#0CA7E6] transition-all duration-500 group-hover:w-full opacity-30" />
                  </span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-0">
                  We don't just build software; we engineer growth. Let's
                  discuss how to make your project the next industry standard.
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full lg:w-auto">
                <a
                  href="/contact"
                  className="group/btn relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-[#0CA7E6] rounded-2xl hover:bg-white hover:text-[#0CA7E6] shadow-xl shadow-blue-900/20"
                >
                  Start Your Journey
                  <ExternalLink className="ml-3 w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>

                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Join 50+ happy clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
