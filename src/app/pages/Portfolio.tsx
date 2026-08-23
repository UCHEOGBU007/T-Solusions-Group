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
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

/**
 * Stabilized Animated Counter Component
 * Fixes the "Refresh" bug and mobile visibility issues.
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
  const [isMounted, setIsMounted] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  // amount: 0.1 triggers as soon as 10% of the card enters the screen
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // 1. Ensure component is fully mounted to handle browser refreshes/hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Run animation only when mounted AND in view
  useEffect(() => {
    if (isInView && isMounted) {
      const numericValue = parseInt(value.replace(/[^\d.]/g, "")) || 0;

      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, isMounted, value]);

  const suffix = value.replace(/[\d.]/g, "");

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <div className="p-3 bg-blue-50 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-[#0CA7E6]" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
        {isMounted ? displayValue : 0}
        {suffix}
      </div>
      <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
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
      title: "POS Software",
      category: "web",
      description:
        " Pos web app for sales management, inventory management, sales tracking, reporting feature,stock management and more.",
      technologies: [
        "Reactjs",
        "Typescript",
        "BaaS",
        "Context Api",
        "Xendit",
        "TaiwlindCss",
      ],
      image: "/posapp.webp",
      icon: <Code />,
      src: "https://possoftware-inky.vercel.app/",
    },
    {
      id: 2,
      title: "Tourism webapp",
      category: "web",
      description:
        "Tourism web application with booking  and management system for tourism and travel agencies",
      technologies: [
        "Reactjs",
        "ExpressJs",
        "Context Api",
        "Stripe",
        "Typescript",
        "Tailwind Css",
      ],
      image: "/Tourismwebapp.jpeg",
      icon: <Code />,
      src: "https://gaura-journeys.vercel.app/",
    },

    {
      id: 3,
      title: "Courier & Logistic  Webapp",
      category: "web",
      description:
        "Restaurant e-commerce webapp with order management,reservation and records",
      technologies: ["Reactjs", "Supabase", "Context Api"],
      image: "/Logisticwebapp.jpeg",
      icon: <Code />,
      src: "https://swiftcourier-opal.vercel.app/",
    },

    {
      id: 4,
      title: "Salon webapp",
      category: "web",
      description: "Salon booking system, management and records",
      technologies: ["Reactjs", "Supabase", "javascript", "Vanilla-Css3"],
      image: "/topnotch.png",
      icon: <Code />,
      src: "https://top-notch-salon.vercel.app/",
    },

    {
      id: 5,
      title: "Dummy Restaurant webapp",
      category: "web",
      description:
        "Restaurant e-commerce webapp with order management,reservation and records sample",
      technologies: ["Reactjs", "Supabase", "Context Api"],
      image: "/Little-lemon-new.png",
      icon: <Code />,
      src: "https://little-lemon-capstone-project-one.vercel.app/",
    },

    {
      id: 6,
      title: "E-Commerce Platform",
      category: "web",
      description: "Advanced filtering and payment integration",
      technologies: ["React", "Node.js", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1080",
      icon: <ShoppingCart />,
    },

    {
      id: 7,
      title: "Healthcare System",
      category: "web",
      description: "Patient management and records",
      technologies: ["Vue.js", "Python", "AWS"],
      image:
        "https://images.unsplash.com/photo-1614029896656-a094f640558d?q=80&w=1080",
      icon: <Code />,
      src: "",
    },

    {
      id: 8,
      title: "Fitness Tracking",
      category: "mobile",
      description: "Workout and nutrition tracking",
      technologies: ["React Native", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?q=80&w=1080",
      icon: <Smartphone />,
      src: "",
    },

    {
      id: 9,
      title: "Quiz Game mobile app",
      category: "mobile",
      description: "Interactive quiz application for mobile devices",
      technologies: ["React Native", "Expo", "Firebase"],
      image: "/quiz.jpg",
      icon: <Code />,
      src: "",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "John Smith",
      company: "TechStart Inc",
      quote: "T-Solusions transformed our vision into reality.",
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
      quote: "Increased our sales by 200%. Highly recommended!",
      role: "Director",
    },
    {
      name: "Emily Chen",
      company: "CloudScale",
      quote: "Technical depth and design sensibility.",
      role: "CTO",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-600">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 ">
        <div className="absolute inset-0 bg-[url('/Homehero.avif')] opacity-20 "></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center py-32 sm:px-6 lg:px-8">
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
            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between complex problems and elegant digital
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar">
            {["all", "web", "mobile", "cloud"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeFilter === f
                    ? "bg-slate-900 text-white shadow-lg"
                    : "text-slate-500 hover:bg-gray-100"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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

                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 sm:opacity-100">
                  <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm">
                    <a
                      href={project.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </button>
                </div> */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href={project.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm shadow-md hover:bg-gray-100 transition-colors w-full justify-center sm:w-auto"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
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
                      className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-100 text-slate-600 rounded"
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

      {/* Stabilized Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Counter value="150+" label="Launched" icon={CheckCircle2} />
            <Counter value="98%" label="Satisfaction" icon={Trophy} />
            <Counter value="50+" label="Global Clients" icon={Users} />
            <Counter value="12" label="Countries" icon={Globe} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="group relative bg-slate-900 rounded-[2.5rem] p-10 md:p-20 overflow-hidden border border-white/5">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-3/5 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Ready to bring your <br />
                  <span className="text-[#0CA7E6]">ideas to life?</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0">
                  Let's discuss how to make your project the next industry
                  standard.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full lg:w-auto">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-[#0CA7E6] rounded-2xl hover:bg-white hover:text-[#0CA7E6] transition-all"
                >
                  Start Your Journey
                  <ExternalLink className="ml-3 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
