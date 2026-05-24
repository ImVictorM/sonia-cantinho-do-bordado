import { useState, useEffect } from "react";
import { brand } from "@/common/data/settings";
import type { Section } from "@/common/types/section";

type HeaderProps = {
  homeId: string;
  sections: Section[];
};

export default function Header({ homeId, sections }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isMobileMenuOpen
            ? "transition-none bg-bg-primary py-5"
            : "bg-bg-primary/85 backdrop-blur-lg shadow-md py-3"
          : isMobileMenuOpen
            ? "transition-none bg-bg-primary py-5"
            : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href={`#${homeId}`}
          className="font-heading text-xl sm:text-2xl font-bold text-primary tracking-wide hover:text-primary-dark transition-colors duration-300"
        >
          {brand.name}
        </a>

        {/* Desktop */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegação principal"
        >
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${isScrolled ? "text-text-primary" : "text-primary"} font-body text-sm hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden cursor-pointer flex flex-col  gap-1.5 p-2 relative z-50"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5  transition-all duration-300 origin-center ${
              isMobileMenuOpen
                ? "rotate-45 translate-y-2 bg-text-primary"
                : "bg-primary"
            }`}
          />
          <span
            className={`block w-6 h-0.5  transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0 bg-text-primary" : "bg-primary"
            }`}
          />
          <span
            className={`block w-6 h-0.5  transition-all duration-300 origin-center ${
              isMobileMenuOpen
                ? "-rotate-45 -translate-y-2 bg-text-primary"
                : "bg-primary"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-112 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="bg-bg-primary/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-1"
          aria-label="Navegação mobile"
        >
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={`${isScrolled ? "text-text-secondary" : "text-text-primary"} font-body hover:text-primary transition-colors duration-300 py-3 border-b border-bg-secondary/50 last:border-b-0`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
