import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Phone,
  Heart,
  Sparkles,
  Eye,
  Compass,
  Sun,
  Wind,
  Droplets,
  Music,
  Mic,
  BookOpen,
  Users,
  Leaf,
  Waves,
  Hand,
  Shield,
  Stethoscope,
  GraduationCap,
  Church,
  Building2,
  UserCheck,
  Activity,
  Brain,
  Dumbbell,
  PauseCircle,
  Footprints,
  PenLine,
  RefreshCw,
  Scan,
  Tent,
  Gift,
  Coffee,
  Package,
  BookMarked,
  Menu,
  X,
} from "lucide-react";
import RegisterPage from "./components/RegisterPage";
import CoachRegistration from "./components/CoachRegistration";
import SpeakerRegistration from "./components/SpeakerRegistration";
import AttendeeRegistration from "./components/AttendeeRegistration";
import Reveal from "./components/Reveal";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  const EVENT = {
    year: 2027,
    dateRange: "January 29–30, 2027",
    city: "Okaloosa Island, Florida",
    venue: "The Island Resort at Fort Walton Beach",
  };

  const heroDateRange = `${EVENT.dateRange} · ${EVENT.city}`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegisterClick = () => {
    navigate("/register");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const handlePartnerEmail = () => {
    const subject = encodeURIComponent(
      "2027 Clear Vision Summit Partnership Interest"
    );
    window.location.href = `mailto:ClearvisionConference@gmail.com?subject=${subject}`;
  };

  const handleMobileNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return;
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "The Story", action: () => scrollToSection("story") },
    { label: "Experience", action: () => scrollToSection("experience") },
    { label: "Voices", action: () => scrollToSection("voices") },
    { label: "Partners", action: () => scrollToSection("partners") },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== NAVIGATION ==================== */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
            : "bg-navy-900/80 backdrop-blur-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="https://clearvisionleader.com"
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded-lg"
              aria-label="Clear Vision home"
            >
              <img
                src="/cv logo .png"
                alt="Clear Vision Leadership Wellness Summit"
                className="h-12 w-auto object-contain"
              />
              <span className="hidden sm:block font-serif text-lg text-white tracking-wide leading-tight">
                Clear Vision
                <span className="block text-xs font-sans tracking-[0.2em] uppercase text-turquoise-200">
                  Wellness Summit 2027
                </span>
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded-md px-1"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRegisterClick}
                className="hidden sm:inline-flex bg-gold-400 text-navy-900 px-5 py-2 rounded-full hover:bg-gold-300 transition-all duration-200 text-sm font-semibold shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                Reserve Your Seat
              </button>

              <button
                ref={mobileMenuButtonRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2 rounded-lg hover:bg-navy-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-navy-900/98 backdrop-blur-md shadow-xl border-t border-navy-700"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleMobileNavClick(link.action)}
                  className="block w-full text-left text-white/90 hover:text-turquoise-200 hover:bg-navy-800/50 transition-colors font-medium text-base px-4 py-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleMobileNavClick(handleRegisterClick)}
                className="block w-full bg-gold-400 text-navy-900 px-4 py-3 rounded-full text-base font-semibold mt-3 hover:bg-gold-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200"
              >
                Reserve Your Seat
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== 1. HERO ==================== */}
      <header className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-800/70 to-navy-900/90"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center w-full">
          <p className="text-turquoise-200 font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-6 sm:mb-8 animate-fade-in">
            Clear Vision Leadership Wellness Summit 2027
          </p>

          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] text-white mb-8 leading-[1.05] animate-fade-in-up">
            We SEE You.
          </h1>

          <p
            className="font-serif text-lg sm:text-xl md:text-2xl text-turquoise-100 italic mb-8 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.15s" }}
          >
            The world celebrates what leaders accomplish. We create a space
            where leaders can breathe, reconnect, and restore.
          </p>

          <p
            className="text-sm sm:text-base md:text-lg text-sand-100/95 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            You spend every day carrying responsibilities, solving problems,
            leading teams, serving families, and showing up for others. Now it
            is time to restore the leader beneath the responsibility.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <button
              onClick={handleRegisterClick}
              className="bg-gold-400 text-navy-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-300 hover:shadow-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Reserve Your Seat
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={handlePartnerEmail}
              className="border-2 border-turquoise-200/80 text-turquoise-50 px-8 py-4 rounded-full text-base font-semibold hover:bg-turquoise-200/15 hover:border-turquoise-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Become a Partner
            </button>
          </div>

          <p
            className="mt-10 text-sm text-sand-100/85 tracking-wide animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {heroDateRange}
          </p>
        </div>
      </header>

      {/* ==================== 2. BEHIND EVERY LEADER ==================== */}
      <section
        id="story"
        className="relative bg-sand-50 py-20 md:py-32 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            <Reveal>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-navy-800 leading-[1.3]">
                Behind every title...
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-turquoise-700 leading-[1.3] pl-6 md:pl-12">
                is a person.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-navy-800 leading-[1.3]">
                Behind every responsibility...
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-turquoise-700 leading-[1.3] pl-6 md:pl-12">
                is someone carrying more than most people know.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-navy-800 leading-[1.3]">
                Behind every strong leader...
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-turquoise-700 leading-[1.3] pl-6 md:pl-12">
                is someone quietly asking,
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-navy-900 italic leading-[1.3] pl-6 md:pl-12">
                "When do I get to breathe?"
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="pt-6 md:pt-10">
                <div className="w-16 h-px bg-gold-400 mb-5"></div>
                <p className="font-serif text-[clamp(2.25rem,7vw,4rem)] text-gold-600 leading-tight">
                  We SEE You.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 3. WHY WE CREATED THIS ==================== */}
      <section className="bg-white py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6">
              Why We Created This
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] text-navy-900 mb-10 leading-[1.2]">
              We watched leaders give everything to everyone else — and forget
              to save something for themselves.
            </h2>
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={150}>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                We saw pastors holding the grief of congregations. Physicians
                carrying the weight of lives. Educators pouring into children
                who may never say thank you. First responders running toward
                what everyone else runs from.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                We noticed that the strongest among us are often the quietest
                about their own exhaustion. That the ones who carry everyone
                else rarely have someone who carries them.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="font-serif text-xl md:text-3xl text-navy-800 italic leading-relaxed">
                So we created a space — not for keynotes and networking, but for
                breath. For rest. For being seen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 4. WHO WE SEE ==================== */}
      <section className="bg-navy-900 py-24 md:py-36 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-turquoise-300 font-sans text-sm tracking-[0.25em] uppercase mb-6 text-center">
              Who We SEE
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-16 text-center leading-[1.2]">
              You don't have to carry it alone.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: "Military Leaders, Spouses & Veterans",
                message:
                  "Mission comes first. Until now. This is space to breathe, reconnect, and restore.",
              },
              {
                icon: Stethoscope,
                title: "Healthcare Professionals",
                message:
                  "You care for others every day. Here, care is extended to you.",
              },
              {
                icon: GraduationCap,
                title: "Educators",
                message:
                  "You pour into the future. This is your opportunity to pause and be renewed.",
              },
              {
                icon: Church,
                title: "Pastors & Ministry Leaders",
                message:
                  "You carry people spiritually and emotionally. Come be poured into.",
              },
              {
                icon: Building2,
                title: "Business, Nonprofit & Community Leaders",
                message:
                  "Success should not require losing yourself in the process.",
              },
              {
                icon: UserCheck,
                title: "The Leader No One Checks On",
                message:
                  "You are strong for everyone else. Here, someone remembers to ask how you are.",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full p-6 md:p-8 rounded-2xl bg-navy-800/60 border border-turquoise-200/15 hover:border-turquoise-300/40 transition-all duration-500 hover:bg-navy-800/80">
                  <div className="w-12 h-12 rounded-full bg-turquoise-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors duration-500">
                    <card.icon
                      className="w-6 h-6 text-turquoise-200 group-hover:text-gold-300 transition-colors duration-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-turquoise-200 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sand-100/85 leading-relaxed text-sm md:text-base">
                    {card.message}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. THE EXPERIENCE ==================== */}
      <section
        id="experience"
        className="bg-sand-50 py-24 md:py-36 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6 text-center">
              The Experience
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] text-navy-900 mb-4 text-center leading-[1.2]">
              A journey back to yourself.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto text-sm md:text-base">
              A 1.5-day leadership wellness experience — January 29–30, 2027
            </p>
          </Reveal>

          <div className="space-y-16 md:space-y-20">
            {/* FRIDAY — ARRIVE & EXHALE */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Friday
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy-900">
                    Arrive &amp; Exhale
                  </h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-5">
                    You arrive and are welcomed by name. The pace begins to slow
                    as you enter the Clear Vision Concierge Experience, receive
                    your Wellness Reset Box, and settle into spaces designed for
                    hydration, reflection, and ease.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Hand, label: "Concierge Check-In" },
                      { icon: Gift, label: "Wellness Reset Box" },
                      { icon: Droplets, label: "Hydration Bar" },
                      { icon: Coffee, label: "Tea Bar" },
                      { icon: Sparkles, label: "Welcome Experience" },
                    ].map((f, fi) => (
                      <span
                        key={fi}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-turquoise-50 text-turquoise-700 text-sm border border-turquoise-200"
                      >
                        <f.icon className="w-3.5 h-3.5" aria-hidden="true" />
                        {f.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FRIDAY EVENING — SOULFUL NIGHT */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Friday Evening
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy-900">
                    Soulful Night
                  </h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-5">
                    Friday evening is not a formal conference opening. It is a
                    soulful welcome filled with music, spoken word, meaningful
                    connection, and a message from Dr. Kay that sets the heart
                    and rhythm for the experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Music, label: "Live Music" },
                      { icon: Mic, label: "Spoken Word" },
                      { icon: Sparkles, label: "Dr. Kay's Welcome" },
                      { icon: Users, label: "Connection" },
                      { icon: Eye, label: "Reflection" },
                    ].map((f, fi) => (
                      <span
                        key={fi}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-turquoise-50 text-turquoise-700 text-sm border border-turquoise-200"
                      >
                        <f.icon className="w-3.5 h-3.5" aria-hidden="true" />
                        {f.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SATURDAY — BE WELL */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Saturday
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy-900">
                    Be Well
                  </h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-5">
                    Saturday creates room for the whole leader. Through expert
                    wellness conversations, intentional movement, quiet
                    reflection, and restorative experiences, you are invited to
                    reconnect with your body, calm your mind, and gain clarity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: PauseCircle, label: "Permission to Pause™" },
                      { icon: Wind, label: "Breathwork" },
                      { icon: Footprints, label: "Beach Walk & Reflection" },
                      { icon: Activity, label: "Men's Health" },
                      { icon: Heart, label: "Women's Health" },
                      { icon: RefreshCw, label: "Movement" },
                      { icon: PenLine, label: "Journal Time" },
                      { icon: BookOpen, label: "Wellness Conversations" },
                    ].map((f, fi) => (
                      <span
                        key={fi}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-turquoise-50 text-turquoise-700 text-sm border border-turquoise-200"
                      >
                        <f.icon className="w-3.5 h-3.5" aria-hidden="true" />
                        {f.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SATURDAY — RESTORE & RETURN */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Saturday
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy-900">
                    Restore &amp; Return
                  </h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-5">
                    The afternoon brings deeper connection, intentional sector
                    communities, and signature Clear Vision experiences
                    designed to help you release what you have been carrying
                    and return home with a more sustainable rhythm.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Tent, label: "Military Pavilion" },
                      { icon: Stethoscope, label: "Healthcare Pavilion" },
                      { icon: GraduationCap, label: "Education Pavilion" },
                      { icon: Church, label: "Faith & Ministry Pavilion" },
                      { icon: Building2, label: "Business Pavilion" },
                      { icon: PauseCircle, label: "Pause Lounge" },
                      { icon: Sparkles, label: "Minutes Matter™ Reset Room" },
                      { icon: Scan, label: "Mirror Walk" },
                      { icon: Waves, label: "Closing Reflection" },
                    ].map((f, fi) => (
                      <span
                        key={fi}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-turquoise-50 text-turquoise-700 text-sm border border-turquoise-200"
                      >
                        <f.icon className="w-3.5 h-3.5" aria-hidden="true" />
                        {f.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 6. MEET THE EXPERTS ==================== */}
      <section className="bg-white py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6 text-center">
              Meet the Experts Guiding Your Journey
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] text-navy-900 mb-4 text-center leading-[1.2]">
              Guides who understand the weight.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-base md:text-lg text-gray-500 mb-16 text-center max-w-2xl mx-auto">
              Our faculty will be announced soon — practitioners, coaches, and
              voices who have walked the road of leadership themselves.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { label: "Leadership Wellness", icon: Compass },
              { label: "Mental & Emotional Wellness", icon: Brain },
              { label: "Physical Wellness", icon: Activity },
              { label: "Men's Health", icon: Dumbbell },
              { label: "Women's Health", icon: Heart },
              { label: "Military & Family Wellness", icon: Shield },
            ].map((person, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden border border-sand-200 hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-navy-800 via-turquoise-800 to-navy-700">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-turquoise-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors duration-500">
                        <person.icon
                          className="w-8 h-8 text-turquoise-200 group-hover:text-gold-300 transition-colors duration-500"
                          strokeWidth={1.25}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="font-serif text-lg md:text-xl text-white mb-2">
                        {person.label}
                      </h3>
                      <p className="text-turquoise-200/80 text-xs md:text-sm tracking-wide">
                        2027 Expert Announcement Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. HOW YOU'LL LEAVE ==================== */}
      <section className="bg-navy-900 py-24 md:py-36 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-turquoise-300 font-sans text-sm tracking-[0.25em] uppercase mb-6 text-center">
              How You'll Leave
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-10 text-center leading-[1.2]">
              Not the same person who arrived.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-serif text-lg md:text-2xl text-turquoise-100 italic text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              You will not leave with more weight to carry. You will leave with
              greater clarity, renewed capacity, and practical tools to live
              and lead well.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Eye, word: "Seen" },
              { icon: Heart, word: "Rested" },
              { icon: Compass, word: "Clear" },
              { icon: Sparkles, word: "Renewed" },
              { icon: Users, word: "Connected" },
              { icon: Package, word: "Equipped" },
              { icon: Sun, word: "Hopeful" },
              { icon: ArrowRight, word: "Ready" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group h-full p-5 md:p-8 rounded-2xl bg-navy-800/50 border border-turquoise-200/10 hover:border-gold-400/40 transition-all duration-500 text-center">
                  <div className="w-12 h-12 rounded-full bg-turquoise-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-gold-400/20 transition-colors duration-500">
                    <item.icon
                      className="w-6 h-6 text-turquoise-200 group-hover:text-gold-300 transition-colors duration-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-serif text-lg md:text-2xl text-white">
                    {item.word}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 8. VOICES FROM LEADERS ==================== */}
      <section
        id="voices"
        className="bg-sand-50 py-24 md:py-36 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6">
              Voices From Leaders
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] text-navy-900 mb-16 leading-[1.2]">
              They came carrying weight. They left feeling seen.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="max-w-2xl mx-auto py-8">
              <div className="w-16 h-px bg-gold-400 mx-auto mb-8"></div>
              <p className="font-serif text-xl md:text-3xl text-navy-800 leading-relaxed mb-6">
                Stories from previous Clear Vision experiences will be shared
                here soon.
              </p>
              <p className="font-serif text-base md:text-xl text-turquoise-600 italic">
                Real voices. Real restoration. Real clarity.
              </p>
              <div className="w-16 h-px bg-gold-400 mx-auto mt-8"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== 9. BECOME PART OF THE RESTORATION ==================== */}
      <section
        id="partners"
        className="bg-white py-24 md:py-36 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6">
              Become Part of the Restoration
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] text-navy-900 mb-8 leading-[1.2]">
              Partner with us in restoring the ones who carry everyone else.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-14 max-w-2xl mx-auto">
              Partner with Clear Vision to help restore military leaders and
              families, healthcare professionals, educators, ministry leaders,
              and community builders who spend their lives serving others.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14">
            {[
              { icon: Tent, label: "Military Pavilion Partner" },
              { icon: Leaf, label: "Wellness Experience Partner" },
              { icon: Users, label: "Community Access & Scholarship Partner" },
              { icon: Hand, label: "Hospitality Partner" },
              { icon: Droplets, label: "Hydration Partner" },
              { icon: BookMarked, label: "Leadership Resource Partner" },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full p-6 md:p-8 rounded-2xl bg-sand-50 border border-sand-200 hover:border-turquoise-300 hover:shadow-lg transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-turquoise-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-gold-100 transition-colors duration-500">
                    <card.icon
                      className="w-6 h-6 text-turquoise-600 group-hover:text-gold-600 transition-colors duration-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-serif text-base md:text-lg text-navy-900">
                    {card.label}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <button
              onClick={handlePartnerEmail}
              className="bg-navy-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-navy-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Express Partnership Interest
            </button>
          </Reveal>
        </div>
      </section>

      {/* ==================== 10. CINEMATIC CTA ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-800/75 to-navy-900/95"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-28 md:py-32">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.75rem,5vw,4.5rem)] text-white mb-8 leading-[1.15]">
              The Leaders Who Carry Everyone Else...
              <br />
              <span className="text-turquoise-200">
                Need Someone To Carry Them.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-gold-400 italic mb-12">
              We SEE You.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRegisterClick}
                className="bg-gold-400 text-navy-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-300 hover:shadow-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                Reserve Your Seat
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={handlePartnerEmail}
                className="border-2 border-turquoise-200/80 text-turquoise-50 px-8 py-4 rounded-full text-base font-semibold hover:bg-turquoise-200/15 hover:border-turquoise-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                Become a Partner
              </button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-10 text-sm text-sand-100/80 tracking-wide">
              {heroDateRange}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <a
                href="https://clearvisionleader.com"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded-lg"
                aria-label="Clear Vision home"
              >
                <img
                  src="/cv logo .png"
                  alt="Clear Vision Summit Logo"
                  className="h-14 w-auto object-contain"
                />
              </a>
              <div className="text-left">
                <a
                  href="https://clearvisionleader.com"
                  className="font-serif text-xl text-white hover:text-turquoise-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded px-1"
                >
                  Clear Vision
                </a>
                <p className="text-sm font-sans tracking-[0.2em] uppercase text-turquoise-200">
                  Wellness Summit 2027
                </p>
              </div>
            </div>

            <p className="text-sand-100/70 mb-10 text-sm md:text-base">
              {EVENT.dateRange} · {EVENT.city}
            </p>

            <div className="grid sm:grid-cols-3 gap-8 md:gap-10 mb-10 max-w-3xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3 text-base">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("story")}
                    className="block text-sand-100/70 hover:text-turquoise-200 transition-colors mx-auto text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded px-2 py-1"
                  >
                    The Story
                  </button>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="block text-sand-100/70 hover:text-turquoise-200 transition-colors mx-auto text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded px-2 py-1"
                  >
                    Experience
                  </button>
                  <button
                    onClick={handleRegisterClick}
                    className="block text-sand-100/70 hover:text-turquoise-200 transition-colors mx-auto text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded px-2 py-1"
                  >
                    Reserve Your Seat
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3 text-base">
                  Contact
                </h4>
                <div className="space-y-2 text-sand-100/70">
                  <a
                    href="mailto:ClearvisionConference@gmail.com"
                    className="flex items-center justify-center gap-2 hover:text-turquoise-200 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded px-2 py-1"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    ClearvisionConference@gmail.com
                  </a>
                  <a
                    href="tel:+18504993261"
                    className="flex items-center justify-center gap-2 hover:text-turquoise-200 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded px-2 py-1"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    (850) 499-3261
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3 text-base">
                  Follow Us
                </h4>
                <div className="space-y-2 text-sand-100/70 text-sm">
                  <p>LinkedIn details coming soon</p>
                  <p>#ClearVisionSummit2027</p>
                </div>
              </div>
            </div>

            <div className="border-t border-navy-700 pt-8">
              <p className="text-sand-100/50 text-sm">
                &copy; 2027 Clear Vision Leadership Wellness Summit. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register/coach" element={<CoachRegistration />} />
      <Route path="/register/speaker" element={<SpeakerRegistration />} />
      <Route path="/register/attendee" element={<AttendeeRegistration />} />
    </Routes>
  );
}

export default App;
