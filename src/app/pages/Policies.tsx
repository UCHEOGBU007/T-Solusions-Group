import React, { useState } from "react";
import { ShieldCheck, Scale, FileText, Lock, ChevronRight } from "lucide-react";

// 1. Define the Type for our sections to satisfy TypeScript
interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export const TermsPage: React.FC = () => {
  // 2. Explicitly type the state as a string
  const [activeSection, setActiveSection] = useState<string>("introduction");

  const sections: PolicySection[] = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <FileText size={18} />,
    },
    {
      id: "services",
      title: "2. Services & Scope",
      icon: <ShieldCheck size={18} />,
    },
    { id: "ip", title: "3. Intellectual Property", icon: <Scale size={18} /> },
    { id: "payment", title: "4. Payment Terms", icon: <Lock size={18} /> },
  ];

  // 3. Fix the 'any' error by defining 'id' as a string
  const scrollToSection = (id: string): void => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappLink: string = "https://wa.me/6285746358657";

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-20 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Terms & <span className="text-[#0CA7E6]">Conditions</span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="bg-[#0CA7E6]/10 text-[#0CA7E6] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Legal Policy
            </span>
            <p className="text-sm text-gray-500">
              Last Updated: March 10, 2026
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 hidden lg:block sticky top-28 h-fit">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                    activeSection === section.id
                      ? "bg-white shadow-md text-[#0CA7E6] border-l-4 border-[#0CA7E6]"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <section id="introduction" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to{" "}
                <span className="font-semibold text-gray-900">
                  T-Solusions Group
                </span>
                . By accessing or using our software development services, you
                agree to be bound by these terms.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#0CA7E6] p-4 italic text-sm text-gray-700">
                Note: "T-Solusions" refers to the agency. "Client" refers to the
                entity purchasing services.
              </div>
            </section>

            <section id="services" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                2. Services & Scope
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We provide custom software, mobile apps, UI&UX design, Graphic &
                Logo design and SEO. Each project scope is defined in a separate
                Statement of Work (SOW).
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
                <li>
                  Estimated delivery times are subject to client feedback speed.
                </li>
                <li>
                  Additional features outside the SOW will be billed separately.
                </li>
              </ul>
            </section>

            <section id="ip" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                3. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ownership of the final source code transfers to the Client upon
                **100% payment completion**. T-Solusions maintains the right to
                showcase the work in our portfolio.
              </p>
            </section>

            <section id="payment" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                4. Payment Terms
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#0CA7E6] mb-2">
                    Deposit (50%)
                  </h4>
                  <p className="text-xs text-gray-600">
                    Required to secure a slot in our development sprint and
                    begin design phases.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#0CA7E6] mb-2">
                    Final Balance (50%)
                  </h4>
                  <p className="text-xs text-gray-600">
                    Due upon User Acceptance Testing (UAT) and before live
                    server deployment.
                  </p>
                </div>
              </div>
            </section>

            {/* Support CTA */}
            <div className="mt-16 p-8 bg-gray-900 rounded-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">
                  Confused by the legal talk?
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Chat with our team for a simple explanation.
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0CA7E6] hover:bg-[#0a86b8] px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 w-full md:w-auto shadow-lg shadow-blue-500/20"
              >
                Contact via WhatsApp <ChevronRight size={18} />
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
