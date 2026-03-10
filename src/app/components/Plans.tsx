import React, { useState } from "react";
import { Globe, Smartphone, Search, Palette, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const PricingSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const whatsappLink = "https://wa.me/6285746358657";

  const plans = [
    {
      title: "Web Development",
      price: "950.000",
      originalPrice: "1.500.000",
      description: "High-converting premium landing pages for business growth.",
      icon: <Globe className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "Custom UI/UX Design",
        "Responsive (Mobile Ready)",
        "FREE Domain & Hosting",
        "SEO Setup + Analytics",
      ],
      isPopular: true, // Now the Best Seller
    },
    {
      title: "Mobile App Dev",
      price: "7.500.000",
      description: "Custom Android & iOS solutions with native performance.",
      icon: <Smartphone className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "React Native/Flutter",
        "User Auth & Database",
        "Payment Gateway Integration",
        "PlayStore & AppStore Upload",
      ],
      isPopular: false,
    },
    {
      title: "SEO Services",
      price: "850.000",
      description: "Dominate Google search results and organic traffic.",
      icon: <Search className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "Monthly Ranking Reports",
        "Backlink Building",
        "Speed Optimization",
        "Competitor Analysis",
      ],
      isPopular: false,
    },
    {
      title: "Graphic Design",
      price: "150.000",
      description: "Professional branding and visual assets.",
      icon: <Palette className="w-8 h-8 text-[#0CA7E6]" />,
      features: [
        "Premium Logo Concepts",
        "Social Media Branding",
        "Source Files (AI/PSD)",
        "Unlimited Revisions",
      ],
      isPopular: false,
    },
  ];

  return (
    // plans container
    <section className="py-24 bg-[#0a0a0a] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0CA7E6] to-[#064E6B] bg-clip-text text-transparent">
          Our Special 2026 Promo Plans
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Scale your digital presence with Indonesia's most competitive software
          agency pricing.
        </p>
      </div>

      {/* Price card container */}

      <motion.div
        key={currentImage}
        initial={{ opacity: 0, scale: 0.8 }} // Start slightly smaller for a cleaner zoom
        whileInView={{ opacity: 0.6, scale: 1 }} // Triggers on scroll
        viewport={{ once: true, amount: 0.3 }} // 'once: true' means it won't re-animate every time you scroll up/down
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                plan.isPopular
                  ? "border-[#0CA7E6] bg-[#0CA7E6]/5 shadow-[0_0_40px_-15px_rgba(12,167,230,0.4)] scale-105 z-10"
                  : "border-white/10 bg-white/5 hover:border-[#0CA7E6]/40"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0CA7E6] text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-tighter shadow-lg shadow-blue-500/50">
                  ⭐ Most Popular
                </span>
              )}

              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  {plan.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-center lg:text-left">
                {plan.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center lg:text-left h-12">
                {plan.description}
              </p>

              <div className="mb-8 text-center lg:text-left">
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-sm text-[#0CA7E6] font-bold">Rp</span>
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                </div>
                {plan.originalPrice && (
                  <p className="text-xs text-red-400 line-through mt-1">
                    Rp {plan.originalPrice}
                  </p>
                )}
              </div>

              <ul className="text-left space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start text-xs text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0CA7E6] mr-3 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center text-center transition-all ${
                  plan.isPopular
                    ? "bg-[#0CA7E6] text-white hover:bg-[#0a86b8] shadow-lg shadow-blue-500/30"
                    : "bg-white/10 text-white hover:bg-white hover:text-black"
                }`}
              >
                Get Started Now
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
