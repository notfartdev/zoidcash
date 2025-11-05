"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(false)

  const navScrollRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { id: "hero", label: "HOME", href: "/#hero" },
    { id: "features", label: "FEATURES", href: "/#features" },
    { id: "ai", label: "PRIVACY", href: "/#ai" },
    { id: "architecture", label: "NETWORK", href: "/#architecture" },
    { id: "vercel", label: "INFRASTRUCTURE", href: "/#vercel" },
    { id: "contact", label: "CONTACT", href: "/#contact" },
    { id: "docs", label: "DOCS", href: "/docs" },
    { id: "api", label: "API", href: "/api-access" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.id)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const checkScroll = () => {
      if (navScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = navScrollRef.current
        setShowLeftScroll(scrollLeft > 0)
        setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 5)
      }
    }

    checkScroll()
    window.addEventListener("resize", checkScroll)

    const observer = new MutationObserver(checkScroll)
    if (navScrollRef.current) {
      observer.observe(navScrollRef.current, { childList: true, subtree: true })
    }

    return () => {
      window.removeEventListener("resize", checkScroll)
      observer.disconnect()
    }
  }, [])

  const scrollNav = (direction: "left" | "right") => {
    if (navScrollRef.current) {
      const scrollAmount = 200
      const newScrollLeft =
        direction === "left"
          ? navScrollRef.current.scrollLeft - scrollAmount
          : navScrollRef.current.scrollLeft + scrollAmount

      navScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-wider shrink-0 text-white">
            MOON<span className="font-light">WARE</span>
            <span className="text-sm"> OS</span>
          </div>

          <div className="hidden md:flex items-center relative max-w-[60%]">
            {showLeftScroll && (
              <button
                onClick={() => scrollNav("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full p-2 shadow-md border border-white/10 hover:bg-[#1a1a1a] transition-colors text-white"
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
            )}

            <div
              ref={navScrollRef}
              className="flex items-center space-x-8 overflow-x-auto scrollbar-hide px-8 py-2 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-sm font-mono tracking-wide transition-all duration-200 hover:text-white whitespace-nowrap relative ${
                    activeSection === item.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && <div className="absolute -bottom-1 left-0 right-0 h-px bg-white"></div>}
                </a>
              ))}
            </div>

            {showRightScroll && (
              <button
                onClick={() => scrollNav("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full p-2 shadow-md border border-white/10 hover:bg-[#1a1a1a] transition-colors text-white"
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-white rounded text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-2 shrink-0">
            <a
              href="/login"
              className="px-4 py-2 bg-white text-black font-mono text-xs font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors"
            >
              ENTER
            </a>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-white/10 animate-fadeIn">
          <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`block py-3 px-2 text-sm font-mono tracking-wide transition-colors rounded ${
                  activeSection === item.id ? "text-white bg-[#1a1a1a] font-bold" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-3 px-2 border-t border-white/10 mt-2">
              <a
                href="/login"
                className="block w-full px-4 py-3 bg-white text-black font-mono text-sm font-bold uppercase tracking-wide text-center hover:bg-gray-200 transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                ENTER
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
