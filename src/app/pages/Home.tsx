import { useState, useEffect, useRef } from "react"; // Added hooks
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  Palette,
  CheckCircle,
  Rocket,
  ChevronDown,
  Globe,
  Search,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import PricingSection from "../components/Plans";

// --- New Counter Component ---
function StatCounter({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Extract number and suffix (e.g., "57+" -> 57 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }, // Start when 50% visible
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * numericValue));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }, [hasStarted, numericValue, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
}
// --- End Counter Component ---

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const brandColor = "#0CA7E6";
  const whatsappLink = "https://wa.me/6285746358657";

  //plans array for plans section

  const plans = [
    {
      title: "Web Development",
      price: "1.500",
      description: "High-converting single page landing pages.",
      icon: <Globe className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "Custom UI Design",
        "Responsive Layout",
        "SEO Friendly",
        "1 Week Delivery",
      ],
      isPopular: false,
    },
    {
      title: "Mobile App Dev",
      price: "7.500.000",
      description: "Android & iOS cross-platform solutions.",
      icon: <Smartphone className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "React Native/Flutter",
        "User Authentication",
        "API Integration",
        "Store Publishing",
      ],
      isPopular: true,
    },
    {
      title: "SEO Services",
      price: "850.000",
      description: "Dominate search results and drive traffic.",
      icon: <Search className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Backlink Strategy",
        "Monthly Analytics",
      ],
      isPopular: false,
    },
    {
      title: "Graphic Design",
      price: "150",
      description: "Branding and visual identity that speaks.",
      icon: <Palette className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "Logo Design",
        "Social Media Kits",
        "Brand Guidelines",
        "Unlimited Revisions",
      ],
      isPopular: false,
    },
  ];

  //features array for features section
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile solutions for iOS and Android",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
    },
  ];
  // faq array for FAQ section
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity. A simple MVP might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed milestones during our roadmap phase.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Absolutely. We offer tiered maintenance packages that include security patches, performance monitoring, and feature updates to ensure your app stays ahead of the curve.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "Our core stack includes React/Next.js, Node.js, and Python. We are experts in building scalable architectures on AWS, Azure, and Google Cloud.",
    },
    {
      question: "Can we sign an NDA before discussing project details?",
      answer:
        "Yes, we prioritize your intellectual property. We can provide a standard NDA or sign yours before we dive into any technical specifics.",
    },
  ];

  // stats array for stats section
  const stats = [
    { number: "57+", label: "Projects Completed" },
    { number: "85%", label: "Happy Clients" },
    { number: "7+", label: "Team Members" },
    { number: "8+", label: "Years Experience" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/Herosection.jpg", "/Homehero.avif", "/Hero2.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section */}

      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black font-['Inter',_sans-serif] sm:py-32  ">
        {/* Dynamic Background Wrapper */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }} // 0.6 opacity to let the blue/black base show through
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
            />
          </AnimatePresence>
          {/* Blue Gradient Overlay to align with [#0CA7E6] */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d2c] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                Transform Your Ideas Into{" "}
                <span className="text-[#0CA7E6]">Digital Reality</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                We are a leading software development agency specializing in
                creating innovative solutions that drive business growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-[#0CA7E6] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0a86b8] transition-all transform hover:-translate-y-1 inline-flex items-center shadow-lg shadow-blue-500/20"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0CA7E6] transition-all inline-flex items-center"
                >
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive software solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-[#0CA7E6] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyNTkyODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Development team"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose T-Solusions Group?
              </h2>
              <p className="text-gray-600 mb-6">
                We combine technical expertise with creative thinking to deliver
                exceptional software solutions that exceed expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert team of certified developers",
                  "Agile development methodology",
                  "On-time project delivery",
                  "24/7 support and maintenance",
                  "Competitive pricing",
                  "Latest technologies and tools",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section - UPDATED WITH COUNTER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#0CA7E6] mb-2">
                  <StatCounter value={stat.number} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* plan section */}
      <div>
        <PricingSection />
      </div>

      {/* DYNAMIC FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black mb-2">Knowledge Base</h2>
              <p className="text-slate-500">
                Frequently asked questions regarding our process.
              </p>
            </div>
            <div
              className="hidden md:block h-1 w-24 mb-4"
              style={{ backgroundColor: brandColor }}
            ></div>
          </div>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq, index) => {
              const isActive = openFaq === index;
              return (
                <div
                  key={index}
                  className={`group py-6 cursor-pointer transition-all ${isActive ? "px-6 bg-slate-50 rounded-2xl border-none" : "px-0"}`}
                  onClick={() => setOpenFaq(isActive ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-xl font-bold transition-all duration-300 ${isActive ? "text-[#0CA7E6]" : "text-slate-700 group-hover:text-[#0CA7E6]"}`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`transition-transform duration-500 ${isActive ? "rotate-180 text-[#0CA7E6]" : "text-slate-300"}`}
                    >
                      <ChevronDown size={24} />
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-[#0CA7E6] pl-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA SECTION BEGINS HERE  */}
      <section className="relative py-24 bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(12,167,230,0.15)_0%,transparent_70%)]" />
          {/* Animated Orbs for Depth */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0CA7E6]/10 blur-[100px] rounded-full animate-pulse" />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 blur-[100px] rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Subtle Label */}
            <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#0CA7E6] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
                Innovation Hub
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-[1.1]">
              Ready to Start Your <br />
              <span className="bg-gradient-to-r from-[#0CA7E6] via-[#4EE3FF] to-white bg-clip-text text-transparent italic">
                Digital Revolution?
              </span>
            </h2>

            <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
              Stop waiting for the future. Build it. We partner with visionary
              brands to craft software that defines industries.
            </p>

            {/* Interactive Action Area */}
            <div className="group relative">
              {/* The "Glow" behind the button */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0CA7E6] to-[#4EE3FF] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

              <Link
                to="/contact"
                className="relative flex items-center px-12 py-5 bg-black text-white rounded-2xl font-bold text-lg border border-white/10 hover:border-transparent transition-all duration-300"
              >
                Contact Us Today
                <div className="ml-3 p-1 bg-white/10 rounded-lg group-hover:bg-[#0CA7E6] transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Icon Featurettes - DRY: Uses Lucide but styled differently */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 opacity-40">
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
                <Rocket className="w-5 h-5 text-[#0CA7E6]" />
                <span className="text-sm font-semibold text-white">
                  Rapid Deployment
                </span>
              </div>
              {/* Add more icons here if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
