import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoDark from "@/assets/logo-zrocket.webp";
import logoLight from "@/assets/logo-zrocket-light.webp";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/hooks/use-theme";

const solutionsItems = [
  { label: "Criação de Sites", href: "/criacao-de-sites" },
  { label: "Automação", href: "/automacao" },
  { label: "Tráfego Pago", href: "/trafego-pago" },
  { label: "Consultoria", href: "/consultoria" },
  { label: "Partner Kommo", href: "/parceiro-kommo" },
];

const navItems = [
  { label: "Início", href: "/" },
  { label: "Soluções", href: "#", children: solutionsItems },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const logo = theme === "light" ? logoLight : logoDark;

  const isSolutionActive = solutionsItems.some((item) => location.pathname === item.href);

  const clearSolutionsCloseTimeout = () => {
    if (!closeTimeoutRef.current) return;
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  };

  const openSolutionsMenu = () => {
    clearSolutionsCloseTimeout();
    setSolutionsOpen(true);
  };

  const closeSolutionsMenu = () => {
    clearSolutionsCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      closeTimeoutRef.current = null;
    }, 180);
  };

  useEffect(() => {
    return () => clearSolutionsCloseTimeout();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50" role="banner">
      <div className="section-container">
        <nav className="flex items-center justify-between h-20" aria-label="Navegação principal">
          <Link to="/" className="flex items-center -ml-2">
            <img src={logo} alt="Z Rocket Marketing Digital" className="h-16 md:h-20 w-auto" width={160} height={64} decoding="async" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={openSolutionsMenu}
                    onMouseLeave={closeSolutionsMenu}
                    onFocusCapture={openSolutionsMenu}
                    onBlurCapture={closeSolutionsMenu}
                  >
                    <button
                      className={`link-underline text-sm font-medium transition-colors duration-300 flex items-center gap-1 pb-2 ${
                        isSolutionActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-expanded={solutionsOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          solutionsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      onMouseEnter={openSolutionsMenu}
                      onMouseLeave={closeSolutionsMenu}
                      className={`absolute top-full left-0 pt-2 w-56 transition-all duration-200 ${
                        solutionsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="rounded-xl bg-card border border-border shadow-xl overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-4 py-3 text-sm font-medium transition-colors ${
                              location.pathname === child.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`link-underline text-sm font-medium transition-colors duration-300 ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-card border-b border-border overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0 border-b-0"}`}>
        <ul className="container mx-auto px-4 md:px-8 py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className={`flex items-center justify-between w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      isSolutionActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <ul className={`pl-4 space-y-1 mt-1 overflow-hidden transition-all duration-200 ${mobileSolutionsOpen ? "max-h-64" : "max-h-0"}`}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          to={child.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileSolutionsOpen(false);
                          }}
                          className={`block py-2 px-4 rounded-lg text-sm transition-colors ${
                            location.pathname === child.href
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
