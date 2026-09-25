import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Users,
  Heart,
  Shield,
  Stethoscope,
  GraduationCap,
  Church,
  Building2,
  UserCheck,
  Music,
  Mic,
  PauseCircle,
  Wind,
  Footprints,
  Activity,
  RefreshCw,
  PenLine,
  BookOpen,
  Gift,
  Droplets,
  Coffee,
  Waves,
  Tent,
  Hand,
  BookMarked,
  Eye,
  Scan,
  Compass,
  X,
} from "lucide-react";
import Reveal from "./components/Reveal";

const REGISTRATION_URL =
  "https://clearvisionleader.com/2027-summit-registration/";

const EVENT = {
  year: 2027,
  dateRange: "January 29–30, 2027",
  city: "Okaloosa Island, Florida",
  venue: "The Island Resort at Fort Walton Beach",
};

type Speaker = {
  name: string;
  image: string;
  role: string;
  session: string;
  subtitle?: string;
  description: string;
};

const speakers: Speaker[] = [
  {
    name: "Matea Suarez, LMHC, NCC",
    image: "/speakers/matea-suarez.jpeg",
    role: "Licensed Mental Health Counselor • Clinical Leader",
    session:
      "The Weight We Carry: Wellness, Burnout, and Learning to Care for Ourselves Too",
    description:
      "An honest conversation about the often-unseen emotional weight carried by helping professionals, with practical attention to burnout, compassion fatigue, nervous-system awareness, healthy boundaries, and sustainable self-care.",
  },
  {
    name: "Dr. Nikki Brooks Seevers",
    image: "/speakers/dr-nikki-brooks-seevers.jpeg",
    role: "Founder • Wellness Scholar",
    session: "Four Mirrors, One You",
    subtitle: "Seeing Well. Being Well. Leading Well.",
    description:
      "Explore how emotional intelligence shapes four powerful reflections: how we see ourselves, how others see us, how digital spaces interpret our behavior, and who people ultimately experience through our leadership.",
  },
  {
    name: "Dr. Phyllis Nsiah-Kumi",
    image: "/speakers/dr-phyllis-nsiah-kumi.jpeg",
    role: "Physician • Women's Health Leader • Leadership Coach",
    session:
      "Pause. Pivot. Proactivate: The Midlife Leadership Reset They Didn't Teach You",
    description:
      "Known to her community as Doc Kumi, she brings a practical roadmap for midlife leaders to pause, see themselves more clearly, reclaim their health and voice, and move intentionally into the next chapter of leadership and life.",
  },
  {
    name: "KUTImack.",
    image: "/speakers/kutimack.jpeg",
    role: "TEDx Speaker • Performance Strategist",
    session: "Be Your Best Daily®",
    description:
      "Known as the Fitness Philosopher and Rockstar Professor, KUTImack. translates lessons from business, fitness, academia, performance, and reinvention into practical systems for building better days and more sustainable leadership.",
  },
  {
    name: "Derick X. Richardson",
    image: "/speakers/derick-richardson.png",
    role: "Artist • Curator • Founder, Xavier Fine Art",
    session: "Creative Pause: A Guided Painting Experience",
    description:
      "Step away from the demands of leadership and make room to create. This guided painting experience uses creativity as a restorative practice for slowing down, quieting the noise, reflecting, and making space for clarity.",
  },
];

const HomePage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const heroDateRange = `${EVENT.dateRange} · ${EVENT.city}`;

  const handleRegisterClick = () => {
    window.location.href = REGISTRATION_URL;
  };

  const handlePartnerEmail = () => {
    const subject = encodeURIComponent(
      "2027 Clear Vision Summit Partnership Interest",
    );

    window.location.href = `mailto:ClearvisionConference@gmail.com?subject=${subject}`;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      label: "Experience",
      id: "experience",
    },
    {
      label: "Why This Summit",
      id: "why-this-summit",
    },
    {
      label: "Military Pavilion",
      id: "military",
    },
    {
      label: "Hosts",
      id: "hosts",
    },
    {
      label: "Your Guides",
      id: "speakers",
    },
    {
      label: "The Story",
      id: "story",
    },
    {
      label: "Partners",
      id: "partners",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== NAVIGATION ==================== */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-navy-900/95 shadow-lg backdrop-blur-md"
            : "bg-navy-900/85 backdrop-blur-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-3 rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label="Return to top"
            >
              <img
                src="/cv logo .png"
                alt="Clear Vision Leadership Wellness Summit"
                className="h-12 w-auto object-contain"
              />

              <span className="hidden font-serif text-lg leading-tight tracking-wide text-white sm:block">
                Clear Vision
                <span className="block font-sans text-xs uppercase tracking-[0.2em] text-turquoise-200">
                  Wellness Summit 2027
                </span>
              </span>
            </button>

            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-md px-1 text-sm font-medium text-white/85 transition-colors hover:text-turquoise-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={handleRegisterClick}
                className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-bold text-navy-900 shadow-md transition hover:bg-gold-300"
              >
                Register Now
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-white lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-navy-700 bg-navy-900 shadow-xl lg:hidden">
            <div className="space-y-1 px-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full rounded-lg px-4 py-3 text-left font-medium text-white/90 transition-colors hover:bg-navy-800/60 hover:text-turquoise-200"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={handleRegisterClick}
                className="mt-4 block w-full rounded-full bg-gold-400 px-4 py-3 font-bold text-navy-900"
              >
                Reserve My Place — $249 Early Bird
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <header className="relative overflow-hidden bg-navy-900 pt-20">
        <div className="relative min-h-[78vh]">
          <img
            src="/hero-coastal-sunrise-clean.png"
            alt="Clear Vision Leadership Wellness Summit 2027 — We SEE You. January 29–30, 2027, Okaloosa Island, Florida."
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/78 to-navy-900/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 pb-16 pt-20 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-24">
            <div className="max-w-3xl">
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-gold-300/10 px-4 py-2 text-sm font-semibold text-gold-300">
                  <Sparkles size={16} />
                  Registration is now open
                </div>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-turquoise-200">
                  Clear Vision Leadership Wellness Summit 2027
                </p>

                <h1 className="max-w-5xl font-serif text-[clamp(2.65rem,5.4vw,4.65rem)] leading-[0.98] text-white">
                  <span className="block lg:whitespace-nowrap">
                    The Leaders Who Carry Everyone Else
                  </span>
                  <span className="mt-2 block text-turquoise-100 lg:whitespace-nowrap">
                    Need Space to Breathe, Too.
                  </span>
                </h1>

                <p className="mt-6 font-serif text-[clamp(2rem,5vw,3.4rem)] italic leading-tight text-gold-300">
                  We SEE You.
                </p>

                <p className="mt-6 font-serif text-xl text-sand-100 sm:text-2xl">
                  A Leadership &amp; Wellness Experience
                </p>

                <p className="mt-7 max-w-2xl text-base leading-8 text-sand-100/80 sm:text-lg">
                  Two days designed to help leaders step away from the demands
                  of responsibility, reconnect with themselves, experience
                  practical wellness tools, and return to life and leadership
                  with greater clarity.
                </p>

                <div className="mt-5 max-w-2xl rounded-2xl border border-turquoise-200/20 bg-navy-900/30 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm leading-6 text-turquoise-50/90 sm:text-base">
                    Featuring a dedicated Military Pavilion for service members,
                    veterans, military spouses, families, and the organizations
                    that support them.
                  </p>
                  <button
                    onClick={() => scrollToSection("military")}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition hover:text-gold-200"
                  >
                    Explore the Military Pavilion
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-4 text-sand-100 sm:flex-row sm:flex-wrap sm:items-center">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="text-gold-300" size={21} />

                    <span className="font-semibold">{EVENT.dateRange}</span>
                  </div>

                  <div className="hidden h-5 w-px bg-white/30 sm:block" />

                  <div className="flex items-center gap-2">
                    <MapPin className="text-gold-300" size={21} />

                    <span className="font-semibold">{EVENT.city}</span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-sand-100/70">{EVENT.venue}</p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={handleRegisterClick}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-bold text-navy-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-gold-300"
                  >
                    Reserve My Place — $249 Early Bird
                    <ArrowRight size={19} />
                  </button>

                  <button
                    onClick={() => scrollToSection("speakers")}
                    className="rounded-full border-2 border-turquoise-200/70 px-8 py-4 font-semibold text-white transition hover:bg-turquoise-200/10"
                  >
                    Meet the Speakers
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-sand-100/65">
                  <span>Early Bird $249</span>
                  <span>Regular Registration $299</span>
                  <span>Limited-time rate</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== INTRO INVITATION ==================== */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="font-serif text-xl italic leading-relaxed text-turquoise-100 sm:text-2xl md:text-3xl">
              You don't need another conference.
              <br />
              You need space to breathe.
            </p>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-sand-100/75 md:text-lg">
              Every day you solve problems, lead teams, serve families, support
              communities, and show up for others. This is your invitation to
              pause, realign, and reconnect with the person beneath the
              responsibility.
            </p>

            <button
              onClick={handleRegisterClick}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-bold text-navy-900 shadow-lg transition hover:bg-gold-300"
            >
              Reserve Your Place
              <ArrowRight size={19} />
            </button>
          </Reveal>
        </div>
      </section>


      {/* ==================== BEHIND EVERY LEADER / STORY ==================== */}
      <section
        id="story"
        className="scroll-mt-20 overflow-hidden bg-sand-50 py-20 md:py-32"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="mb-12 text-sm font-semibold uppercase tracking-[0.25em] text-turquoise-600">
              Before We Talk About Leadership…
            </p>
          </Reveal>
          <div className="space-y-8 md:space-y-12">
            <Reveal>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-navy-800">
                Behind every title...
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="pl-6 font-serif text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-turquoise-700 md:pl-12">
                is a person.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-navy-800">
                Behind every responsibility...
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="pl-6 font-serif text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-turquoise-700 md:pl-12">
                is someone carrying more than most people know.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-navy-800">
                Behind every strong leader...
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="pl-6 font-serif text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-turquoise-700 md:pl-12">
                is someone who rarely gets permission to stop.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="pt-4 font-sans text-base font-medium uppercase tracking-[0.12em] text-gray-500 md:text-lg">
                And sometimes that person is quietly asking:
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="pl-6 font-serif text-[clamp(1.75rem,5vw,3rem)] italic leading-[1.3] text-navy-900 md:pl-12">
                “When do I get to breathe?”
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="pt-6 md:pt-10">
                <div className="mb-5 h-px w-16 bg-gold-400" />

                <p className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-tight text-turquoise-700">
                  Here.
                </p>
                <p className="mt-2 font-serif text-[clamp(2.5rem,7vw,4.5rem)] italic leading-tight text-gold-600">
                  We SEE You.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== WHY THIS SUMMIT ==================== */}
      <section
        id="why-this-summit"
        className="scroll-mt-20 overflow-hidden bg-navy-900 py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
                Why This Summit
              </p>
              <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] leading-tight text-white">
                This is not a sit-and-listen conference.
              </h2>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-sand-100/75">
                You won't spend two days sitting in a ballroom collecting notes
                you'll never look at again.
              </p>
              <p className="mx-auto mt-3 max-w-3xl font-serif text-xl leading-8 text-turquoise-100 md:text-2xl">
                The Clear Vision Leadership Wellness Summit is designed as an
                experience.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "MOVE.", icon: Activity },
              { label: "BREATHE.", icon: Wind },
              { label: "CREATE.", icon: Sparkles },
              { label: "REFLECT.", icon: Eye },
              { label: "LEARN.", icon: BookOpen },
              { label: "RECONNECT.", icon: Heart },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 60}>
                  <div className="flex min-h-[145px] h-full flex-col items-center justify-center rounded-2xl border border-turquoise-200/20 bg-white/[0.04] px-3 py-6 text-center">
                    <Icon className="mb-4 text-gold-300" size={24} />
                    <p className="font-serif text-lg text-white md:text-xl">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-14 max-w-3xl text-center">
              <p className="text-lg leading-8 text-sand-100/75">
                You will experience practical tools you can take home and
                integrate into the rhythm of your life and leadership.
              </p>
              <div className="mx-auto my-8 h-px w-16 bg-gold-400" />
              <p className="font-serif text-2xl leading-9 text-white md:text-3xl">
                Because healthy leadership isn't something you simply learn.
              </p>
              <p className="mt-3 font-serif text-2xl italic leading-9 text-gold-300 md:text-3xl">
                It's something you practice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== FEATURED MILITARY PAVILION ==================== */}
      <section
        id="military"
        className="scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-turquoise-100">
                <Shield className="text-turquoise-700" size={27} />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-turquoise-600">
                Featured Summit Experience
              </p>

              <h2 className="mt-5 font-serif text-[clamp(2.5rem,6vw,4.75rem)] leading-tight text-navy-900">
                The Military Pavilion
              </h2>

              <p className="mx-auto mt-5 max-w-3xl font-serif text-xl italic leading-8 text-navy-800 md:text-2xl">
                A dedicated space for those who serve — and the families who
                serve beside them.
              </p>

              <div className="mx-auto mt-7 h-px w-16 bg-gold-400" />

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                Military life carries a unique rhythm of service,
                responsibility, transition, sacrifice, and leadership. The
                Military Pavilion creates a dedicated space within the Clear
                Vision Leadership Wellness Summit for active-duty service
                members, veterans, military spouses, caregivers, and
                military-connected families.
              </p>

              <p className="mx-auto mt-7 max-w-3xl font-serif text-2xl text-navy-900">
                This isn't another resource fair.
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                It is an intentional space to connect, discover, reset, and
                belong — bringing together trusted organizations, practical
                resources, meaningful conversations, and restorative
                experiences designed with the military-connected community in
                mind.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Users,
                title: "CONNECT",
                description:
                  "Build relationships with military-connected leaders, families, organizations, and community partners.",
              },
              {
                icon: BookOpen,
                title: "DISCOVER",
                description:
                  "Explore resources supporting transition, careers, family wellbeing, education, financial readiness, community connection, and life beyond service.",
              },
              {
                icon: RefreshCw,
                title: "RESET",
                description:
                  "Experience practical wellness tools and micro practices that support healthier rhythms through demanding seasons of military life.",
              },
              {
                icon: Heart,
                title: "BELONG",
                description:
                  "Enter a space where people understand that service affects not only the person wearing the uniform, but the family serving alongside them.",
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal key={pillar.title} delay={index * 80}>
                  <article className="h-full rounded-[2rem] border border-sand-200 bg-sand-50 p-7 transition hover:border-turquoise-300 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-100">
                      <Icon className="text-turquoise-700" size={23} />
                    </div>
                    <div className="mb-5 h-px w-12 bg-gold-400" />
                    <h3 className="font-serif text-2xl text-navy-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 leading-7 text-gray-600">
                      {pillar.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-16 max-w-5xl rounded-[2rem] bg-navy-900 px-7 py-11 text-center shadow-xl md:px-12">
              <p className="font-serif text-2xl leading-9 text-sand-100 md:text-3xl">
                You served. You supported. You carried the mission.
              </p>
              <p className="mt-4 font-serif text-4xl italic text-gold-300 md:text-5xl">
                We SEE You.
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-sand-100/70">
                One Summit. Multiple communities. A shared need for restoration.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={handleRegisterClick}
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-4 text-center text-sm font-bold leading-5 text-navy-900 shadow-lg transition hover:bg-gold-300 sm:w-auto sm:px-7 sm:text-base"
                >
                  I'm Military-Connected — Reserve My Place
                  <ArrowRight size={19} />
                </button>
                <button
                  onClick={handlePartnerEmail}
                  className="min-h-[52px] w-full rounded-full border-2 border-turquoise-200/80 px-6 py-4 text-center text-sm font-semibold leading-5 text-turquoise-50 transition hover:bg-turquoise-200/10 sm:w-auto sm:px-7 sm:text-base"
                >
                  Partner With the Military Pavilion
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== CLARITY PRESCRIPTION ==================== */}
      <section id="clarity-prescription" className="scroll-mt-20 overflow-hidden bg-sand-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-turquoise-600">Your Clarity Prescription</p>
              <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] leading-tight text-navy-900">You won't leave with more information.</h2>
              <p className="mt-4 font-serif text-xl italic leading-8 text-turquoise-700 md:text-2xl">You'll leave with your own Clarity Prescription.</p>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">From the moment you arrive, the Summit invites you to pay attention to what your body, mind, relationships, leadership, and life may be telling you.</p>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">Through assessment, reflection, movement, creativity, conversation, and restorative experiences, you'll begin identifying the practices that help you function and lead well.</p>
            </div>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              { icon: Activity, title: "MOVE YOUR BODY", text: "Reconnect with energy." },
              { icon: PauseCircle, title: "CALM YOUR MIND", text: "Create space between stimulus and response." },
              { icon: Wind, title: "BREATHE DEEPLY", text: "Interrupt the rush." },
              { icon: Heart, title: "FUEL YOUR BODY", text: "Support the person doing the leading." },
              { icon: Compass, title: "LIVE WITH PURPOSE", text: "Reconnect leadership to what matters." },
            ].map((anchor, index) => {
              const Icon = anchor.icon;
              return (
                <Reveal key={anchor.title} delay={index * 70}>
                  <article className="h-full rounded-2xl border border-sand-200 bg-white p-6 text-center shadow-[0_12px_35px_rgba(10,48,71,0.05)]">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-100"><Icon className="text-turquoise-700" size={23} /></div>
                    <h3 className="font-serif text-lg leading-6 text-navy-900">{anchor.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{anchor.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={150}>
            <div className="mx-auto mt-14 max-w-3xl text-center">
              <div className="mx-auto mb-7 h-px w-16 bg-gold-400" />
              <p className="font-serif text-2xl leading-9 text-navy-900 md:text-3xl">You don't need another person's wellness routine.</p>
              <p className="mt-3 font-serif text-2xl italic leading-9 text-turquoise-700 md:text-3xl">You need to discover your rhythm.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== WHO THIS IS FOR ==================== */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-[0.25em] text-turquoise-600">
              Who Is This Room For?
            </p>

            <h2 className="mt-5 text-center font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight text-navy-900">
              The leader everyone depends on.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              You don't need a particular title to belong here. If others depend
              on you, this room was created with you in mind.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Military Leaders",
                message:
                  "Leading through constant change, mission demands, and service to others.",
              },
              {
                icon: Stethoscope,
                title: "Healthcare Professionals",
                message:
                  "Serving others every day while carrying the emotional weight of caring.",
              },
              {
                icon: GraduationCap,
                title: "Educators",
                message:
                  "Pouring into students while often neglecting your own restoration.",
              },
              {
                icon: Church,
                title: "Pastors & Ministry Leaders",
                message:
                  "Faithfully caring for everyone else while needing space to be restored yourself.",
              },
              {
                icon: Building2,
                title: "Business & Community Leaders",
                message:
                  "Making decisions that affect people while carrying pressure few people see.",
              },
              {
                icon: UserCheck,
                title: "Anyone Ready to Breathe Again",
                message:
                  "If you're carrying more than people realize, this space was created for you.",
              },
            ].map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal key={card.title} delay={index * 80}>
                  <article className="h-full rounded-2xl border border-sand-200 bg-sand-50 p-7 transition hover:border-turquoise-300 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-100">
                      <Icon className="text-turquoise-700" size={23} />
                    </div>

                    <h3 className="font-serif text-2xl text-navy-900">
                      {card.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {card.message}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PERMISSION TO PAUSE ==================== */}
      <section className="overflow-hidden bg-navy-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
              Permission to Pause™
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-tight">
              You don't have to earn rest by reaching exhaustion.
            </h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-3 text-lg leading-8 text-sand-100/75">
              <p>You don't have to wait until everything is finished.</p>
              <p>You don't have to explain why you need space.</p>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-sand-100/80">
              For two days, you are invited to lay down the title, quiet the
              noise, and pay attention to the person underneath the responsibility.
            </p>
            <p className="mt-8 font-serif text-3xl italic text-gold-300">
              Consider this your permission.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {["Pause.", "Breathe.", "Reconnect.", "Return."].map((word) => (
                <div key={word} className="rounded-2xl border border-turquoise-200/20 bg-white/[0.04] px-4 py-5 font-serif text-xl">
                  {word}
                </div>
              ))}
            </div>
            <button
              onClick={handleRegisterClick}
              className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-bold text-navy-900 transition hover:bg-gold-300"
            >
              Give Myself Permission to Pause
              <ArrowRight size={19} />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ==================== EXPERIENCE ARCHITECTURE ==================== */}
      <section className="overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-turquoise-600">Your Experience</p>
              <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] leading-tight text-navy-900">Experience another pathway toward healthier leadership.</h2>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600">The Summit connects practical wellness, reflection, creativity, movement, and expert guidance so the experience feels like one restorative journey — not a collection of unrelated sessions.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Wind, title: "BREATHE", body: "Guided breathwork and nervous-system resets designed to help you slow down, become present, and reconnect." },
              { icon: Sparkles, title: "CREATE", body: "Derick X. Richardson — Creative Pause: A Guided Painting Experience." },
              { icon: Eye, title: "UNDERSTAND YOURSELF", body: "Dr. Nikki Brooks Seevers — Four Mirrors, One You. Seeing Well. Being Well. Leading Well." },
              { icon: RefreshCw, title: "RESET", body: "Pause spaces, sensory experiences, and practical restorative tools create room to step away from stimulation and reconnect." },
              { icon: Heart, title: "RECLAIM YOUR HEALTH", body: "Dr. Phyllis Nsiah-Kumi — Pause. Pivot. Proactivate: The Midlife Leadership Reset They Didn't Teach You." },
              { icon: Activity, title: "MOVE", body: "Intentional physical movement and embodied wellness reconnect leadership to the body doing the leading." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="h-full rounded-[2rem] border border-sand-200 bg-sand-50 p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-100"><Icon className="text-turquoise-700" size={23} /></div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise-600">{item.title}</p>
                    <p className="mt-4 leading-7 text-gray-600">{item.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={150}>
            <div className="mx-auto mt-6 max-w-4xl rounded-[2rem] border border-sand-200 bg-sand-50 p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise-600">BUILD BETTER DAYS</p>
              <p className="mt-2 font-serif text-2xl text-navy-900">KUTImack. — Be Your Best Daily®</p>
              <p className="mt-2 leading-7 text-gray-600">Practical systems for building better days and more sustainable leadership.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== THE EXPERIENCE ==================== */}
      <section
        id="experience"
        className="scroll-mt-20 bg-sand-50 py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-[0.25em] text-turquoise-600">
              The Experience
            </p>

            <h2 className="mt-5 text-center font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight text-navy-900">
              A journey back to yourself.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-gray-500 md:text-lg">
              A 1.5-day leadership wellness experience — January 29–30, 2027
            </p>
          </Reveal>

          <div className="mt-16 space-y-16 md:space-y-20">
            {/* FRIDAY — ARRIVE & EXHALE */}
            <Reveal>
              <div className="grid items-start gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                <div className="md:pt-2 md:text-right">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-turquoise-600">
                    Friday
                  </p>

                  <h3 className="font-serif text-2xl text-navy-900 md:text-3xl">
                    Arrive &amp; Exhale
                  </h3>
                </div>

                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="mb-5 text-base leading-relaxed text-gray-700 md:text-xl">
                    You arrive and are welcomed by name. The pace begins to slow
                    as you enter the Clear Vision Concierge Experience, receive
                    your Wellness Reset Box, and settle into spaces designed for
                    hydration, reflection, connection, and ease.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        icon: Hand,
                        label: "Concierge Check-In",
                      },
                      {
                        icon: Gift,
                        label: "Wellness Reset Box",
                      },
                      {
                        icon: Droplets,
                        label: "Hydration Bar",
                      },
                      {
                        icon: Coffee,
                        label: "Tea Bar",
                      },
                      {
                        icon: Sparkles,
                        label: "Welcome Experience",
                      },
                    ].map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <span
                          key={feature.label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-turquoise-200 bg-turquoise-50 px-3 py-1.5 text-sm text-turquoise-700"
                        >
                          <Icon size={14} aria-hidden="true" />
                          {feature.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FRIDAY EVENING */}
            <Reveal>
              <div className="grid items-start gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                <div className="md:pt-2 md:text-right">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-turquoise-600">
                    Friday Evening
                  </p>

                  <h3 className="font-serif text-2xl text-navy-900 md:text-3xl">
                    Soulful Night
                  </h3>
                </div>

                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="mb-5 text-base leading-relaxed text-gray-700 md:text-xl">
                    Friday evening is not a formal conference opening. It is a
                    soulful welcome filled with music, spoken word, meaningful
                    connection, and a message from Dr. Kay that sets the heart
                    and rhythm for the experience.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        icon: Music,
                        label: "Live Music",
                      },
                      {
                        icon: Mic,
                        label: "Spoken Word",
                      },
                      {
                        icon: Sparkles,
                        label: "Dr. Kay's Welcome",
                      },
                      {
                        icon: Users,
                        label: "Connection",
                      },
                      {
                        icon: Eye,
                        label: "Reflection",
                      },
                    ].map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <span
                          key={feature.label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-turquoise-200 bg-turquoise-50 px-3 py-1.5 text-sm text-turquoise-700"
                        >
                          <Icon size={14} aria-hidden="true" />
                          {feature.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SATURDAY — BE WELL */}
            <Reveal>
              <div className="grid items-start gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                <div className="md:pt-2 md:text-right">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-turquoise-600">
                    Saturday
                  </p>

                  <h3 className="font-serif text-2xl text-navy-900 md:text-3xl">
                    Be Well
                  </h3>
                </div>

                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="mb-5 text-base leading-relaxed text-gray-700 md:text-xl">
                    Saturday creates room for the whole leader. Through expert
                    wellness conversations, intentional movement, quiet
                    reflection, and restorative experiences, you are invited to
                    reconnect with your body, calm your mind, and gain clarity.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        icon: PauseCircle,
                        label: "Permission to Pause™",
                      },
                      {
                        icon: Wind,
                        label: "Breathwork",
                      },
                      {
                        icon: Footprints,
                        label: "Beach Walk & Reflection",
                      },
                      {
                        icon: Activity,
                        label: "Men's Health",
                      },
                      {
                        icon: Heart,
                        label: "Women's Health",
                      },
                      {
                        icon: RefreshCw,
                        label: "Movement",
                      },
                      {
                        icon: PenLine,
                        label: "Journal Time",
                      },
                      {
                        icon: BookOpen,
                        label: "Wellness Conversations",
                      },
                    ].map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <span
                          key={feature.label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-turquoise-200 bg-turquoise-50 px-3 py-1.5 text-sm text-turquoise-700"
                        >
                          <Icon size={14} aria-hidden="true" />
                          {feature.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SATURDAY — RESTORE & RETURN */}
            <Reveal>
              <div className="grid items-start gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                <div className="md:pt-2 md:text-right">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-turquoise-600">
                    Saturday
                  </p>

                  <h3 className="font-serif text-2xl text-navy-900 md:text-3xl">
                    Restore &amp; Return
                  </h3>
                </div>

                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="mb-5 text-base leading-relaxed text-gray-700 md:text-xl">
                    The afternoon brings deeper connection, intentional
                    communities, and signature Clear Vision experiences designed
                    to help you release what you have been carrying and return
                    home with a more sustainable rhythm.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        icon: Tent,
                        label: "Military Pavilion",
                      },
                      {
                        icon: Stethoscope,
                        label: "Healthcare Pavilion",
                      },
                      {
                        icon: GraduationCap,
                        label: "Education Pavilion",
                      },
                      {
                        icon: Church,
                        label: "Faith & Ministry Pavilion",
                      },
                      {
                        icon: Building2,
                        label: "Business Pavilion",
                      },
                      {
                        icon: PauseCircle,
                        label: "Pause Lounge",
                      },
                      {
                        icon: Sparkles,
                        label: "Minutes Matter™ Reset Room",
                      },
                      {
                        icon: Scan,
                        label: "Mirror Walk",
                      },
                      {
                        icon: Waves,
                        label: "Closing Reflection",
                      },
                    ].map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <span
                          key={feature.label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-turquoise-200 bg-turquoise-50 px-3 py-1.5 text-sm text-turquoise-700"
                        >
                          <Icon size={14} aria-hidden="true" />
                          {feature.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== JOURNEY TO CLARITY ==================== */}
      <section id="journey" className="scroll-mt-20 overflow-hidden bg-navy-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">Your Journey to Clarity</p>
              <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] leading-tight">You don't have to arrive with the answers.</h2>
            </div>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              ["ARRIVE", "You don't have to perform here."],
              ["PAUSE", "Step away from the pace and responsibility."],
              ["NOTICE", "What does your body, mind, and life need?"],
              ["EXPERIENCE", "Try restorative practices instead of merely hearing about them."],
              ["CHOOSE", "Identify what works for you."],
              ["RETURN", "Go home with practices that support a healthier rhythm."],
            ].map(([title, body], index) => (
              <Reveal key={title} delay={index * 60}>
                <article className="h-full rounded-2xl border border-turquoise-200/20 bg-white/[0.04] p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold-300">0{index + 1}</p>
                  <h3 className="mt-3 font-serif text-2xl">{title}</h3>
                  <p className="mt-3 leading-7 text-sand-100/70">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mx-auto mt-12 max-w-4xl text-center">
              <p className="font-serif text-3xl leading-tight text-sand-100 md:text-4xl">Come in with cloudy vision.</p>
              <p className="mt-3 font-serif text-3xl italic leading-tight text-gold-300 md:text-4xl">Leave with greater clarity.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== MEET YOUR HOSTS ==================== */}
      <section
        id="hosts"
        className="scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-gold-300/20" />

                <div className="absolute -bottom-6 -right-5 h-36 w-36 rounded-full bg-turquoise-300/15" />

                <img
                  src="/speakers/nick-kennita-williams.png"
                  alt="Nicholas Williams and Dr. Kennita Dr. Kay Williams, hosts of the Clear Vision Leadership Wellness Summit"
                  className="relative z-10 w-full rounded-[2rem] object-cover shadow-2xl"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-turquoise-600">
                  Meet Your Hosts
                </p>

                <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,4rem)] leading-tight text-navy-900">
                  Dr. Kennita “Dr. Kay” Williams &amp; Nicholas Williams
                </h2>

                <p className="mt-7 text-lg leading-8 text-gray-600">
                  Clear Vision was built around a simple but powerful belief:
                  leaders deserve spaces where they do not have to perform,
                  prove, produce, or carry everything alone.
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Together, Dr. Kay and Nicholas create leadership experiences
                  centered on clarity, restoration, connection, and sustainable
                  rhythms for life and leadership.
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  The Clear Vision Leadership Wellness Summit reflects that
                  commitment — creating a room where the people who spend so
                  much of their lives seeing, serving, supporting, and leading
                  others can finally experience what it means to be seen too.
                </p>

                <div className="mt-8 rounded-2xl border border-gold-200 bg-sand-50 p-6">
                  <p className="font-serif text-xl italic leading-8 text-navy-800">
                    “The leaders who carry everyone else need space to breathe,
                    reconnect, and remember that their wellness matters too.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* DR. KAY FEATURE */}
          <Reveal delay={150}>
            <div className="mt-20 grid overflow-hidden rounded-[2rem] bg-navy-900 shadow-xl lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative min-h-[420px]">
                <img
                  src="/speakers/dr-kay-williams.jpg"
                  alt="Dr. Kennita Dr. Kay Williams"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-900/20" />
              </div>

              <div className="flex items-center p-8 sm:p-10 lg:p-14">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gold-300">
                    Summit Founder &amp; Host
                  </p>

                  <h3 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                    Dr. Kennita “Dr. Kay” Williams
                  </h3>

                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-turquoise-200">
                    Leadership Strategist • Coach • Speaker • Founder, Clear
                    Vision Consulting
                  </p>

                  <p className="mt-7 text-base leading-8 text-sand-100/80 md:text-lg">
                    Dr. Kay's work centers on helping leaders gain clarity,
                    strengthen alignment, and build healthier rhythms for
                    leadership and life. Through Clear Vision, she creates
                    spaces where leaders can step away from constant
                    responsibility long enough to reconnect with themselves,
                    their purpose, and what matters most.
                  </p>

                  <p className="mt-5 text-base leading-8 text-sand-100/80 md:text-lg">
                    At the Summit, she sets the heart and rhythm of the
                    experience — reminding leaders that wellness is not separate
                    from effective leadership. It is part of how we sustain it.
                  </p>

                  <p className="mt-7 font-serif text-xl italic text-gold-300">
                    Permission to Pause™
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== MEET THE SPEAKERS ==================== */}
      <section id="speakers" className="scroll-mt-20 bg-sand-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-turquoise-600">
                The People Guiding Your Experience
              </p>

              <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,4rem)] leading-tight text-navy-900">
                Practitioners. Physicians. Creatives. Coaches. Wellness leaders.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Each has been invited not simply to speak, but to help you
                experience another pathway toward healthier leadership.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-6">
            {speakers.map((speaker, index) => (
              <Reveal
                key={speaker.name}
                delay={index * 80}
                className={
                  index < 3
                    ? "xl:col-span-2"
                    : index === 3
                      ? "xl:col-span-2 xl:col-start-2"
                      : "xl:col-span-2"
                }
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-sand-200 bg-white shadow-[0_16px_50px_rgba(10,48,71,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-navy-900">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turquoise-600">
                      {speaker.role}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl leading-tight text-navy-900">
                      {speaker.name}
                    </h3>

                    <div className="my-5 h-px w-12 bg-gold-400" />

                    <p className="font-serif text-xl leading-7 text-navy-800">
                      {speaker.session}
                    </p>
                    {speaker.subtitle && (
                      <p className="mt-2 font-serif italic text-turquoise-700">
                        {speaker.subtitle}
                      </p>
                    )}

                    <p className="mt-5 flex-1 text-base leading-7 text-gray-600">
                      {speaker.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mx-auto mt-14 max-w-3xl text-center">
              <p className="font-serif text-xl italic leading-8 text-navy-800 md:text-2xl">
                Different voices. Different experiences. One shared invitation:
                pause long enough to see yourself again.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== REGISTRATION MOMENT ==================== */}
      <section className="bg-navy-900 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-turquoise-200">
              Registration Is Open
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(2.2rem,5vw,4rem)] leading-tight text-white">
              Give yourself permission to be in the room.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sand-100/75">
              Your registration includes the complete two-day Clear Vision
              experience — immersive leadership and wellness sessions, guided
              creative experiences, movement and breathwork, restorative spaces,
              wellness resources, meaningful connection with other leaders, and
              practical tools you can continue using after the Summit.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gold-300/35 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-gold-300">
                  Early Bird
                </p>

                <p className="mt-2 font-serif text-5xl text-white">$249</p>

                <p className="mt-2 text-sm text-sand-100/65">
                  Your two-day investment in the person behind the leadership.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-turquoise-200">
                  Regular Registration
                </p>

                <p className="mt-2 font-serif text-5xl text-white">$299</p>

                <p className="mt-2 text-sm text-sand-100/65">
                  Begins after Early Bird registration ends
                </p>
              </div>
            </div>

            <button
              onClick={handleRegisterClick}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-9 py-4 text-base font-bold text-navy-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-gold-300"
            >
              Reserve My Place — $249 Early Bird
              <ArrowRight size={20} />
            </button>

            <p className="mt-5 text-sm text-sand-100/55">
              January 29–30, 2027 · The Island Resort at Fort Walton Beach ·
              Okaloosa Island, Florida
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section
        id="partners"
        className="scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-turquoise-600">
              Become Part of the Restoration
            </p>

            <h2 className="mt-5 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight text-navy-900">
              Partner with us in restoring the ones who carry everyone else.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Your partnership doesn't simply sponsor an event. It creates access.
              It helps create restorative experiences for military-connected
              leaders and families, healthcare professionals, educators, ministry
              leaders, business leaders, and community builders who spend their
              lives serving others.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-turquoise-200 bg-sand-50 p-8 text-left md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">
                Military Pavilion Partner
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-navy-900">
                Help create a dedicated restorative and resource experience for
                the military-connected community.
              </h3>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Military Pavilion Partners help expand access, connection,
                resources, and restorative experiences for service members,
                veterans, military spouses, caregivers, and families attending
                the Summit.
              </p>
              <button
                onClick={handlePartnerEmail}
                className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 font-semibold text-white transition hover:bg-navy-800"
              >
                Explore Military Pavilion Partnership
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Tent,
                label: "Military Pavilion Partner",
              },
              {
                icon: Heart,
                label: "Wellness Experience Partner",
              },
              {
                icon: Users,
                label: "Community Access & Scholarship Partner",
              },
              {
                icon: Hand,
                label: "Hospitality Partner",
              },
              {
                icon: Droplets,
                label: "Hydration Partner",
              },
              {
                icon: BookMarked,
                label: "Leadership Resource Partner",
              },
            ].map((partner, index) => {
              const Icon = partner.icon;

              return (
                <Reveal key={partner.label} delay={index * 70}>
                  <article className="h-full rounded-2xl border border-sand-200 bg-sand-50 p-7 transition hover:border-turquoise-300 hover:shadow-lg">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-100">
                      <Icon className="text-turquoise-700" size={22} />
                    </div>

                    <h3 className="font-serif text-lg text-navy-900">
                      {partner.label}
                    </h3>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150}>
            <button
              onClick={handlePartnerEmail}
              className="mx-auto mt-12 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-navy-800"
            >
              <Mail size={19} />
              Express Partnership Interest
            </button>
          </Reveal>
        </div>
      </section>

      {/* ==================== FINAL CINEMATIC CTA ==================== */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-800/78 to-navy-900/95" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-8">
          <Reveal>
            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-tight text-white">
              You've carried enough.
              <span className="mt-2 block text-turquoise-100">
                For two days, you don't have to carry everything.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 font-serif text-[clamp(2rem,5vw,3.5rem)] italic text-gold-400">
              We SEE You.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-sand-100/75">
              <p>Maybe you've been the leader. The caregiver. The problem solver.</p>
              <p>The strong one. The person everyone calls.</p>
              <p className="mt-5 font-serif text-2xl text-white">
                Come breathe. Come reconnect. Come get clear.
              </p>
              <p className="mt-3 font-serif text-3xl italic text-gold-300">
                We SEE You.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={handleRegisterClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-9 py-4 font-bold text-navy-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-gold-300"
              >
                Reserve My Place — $249 Early Bird
                <ArrowRight size={20} />
              </button>

              <button
                onClick={handlePartnerEmail}
                className="rounded-full border-2 border-turquoise-200/80 px-8 py-4 font-semibold text-turquoise-50 transition hover:bg-turquoise-200/10"
              >
                Become a Summit Partner
              </button>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-10 text-sm tracking-wide text-sand-100/70">
              {heroDateRange}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <a
                href="https://clearvisionleader.com"
                className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
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
                  className="font-serif text-xl text-white transition hover:text-turquoise-200"
                >
                  Clear Vision
                </a>

                <p className="text-sm uppercase tracking-[0.2em] text-turquoise-200">
                  Wellness Summit 2027
                </p>
              </div>
            </div>

            <p className="mb-3 text-sm text-sand-100/70 md:text-base">
              {EVENT.dateRange} · {EVENT.city}
            </p>

            <p className="mb-10 text-sm text-sand-100/55">{EVENT.venue}</p>

            <div className="mx-auto mb-12 grid max-w-4xl gap-10 sm:grid-cols-3">
              {/* QUICK LINKS */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Quick Links</h4>

                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="block w-full text-sm text-sand-100/70 transition hover:text-turquoise-200"
                  >
                    Experience
                  </button>

                  <button
                    onClick={() => scrollToSection("military")}
                    className="block w-full text-sm text-sand-100/70 transition hover:text-turquoise-200"
                  >
                    Military Pavilion
                  </button>

                  <button
                    onClick={() => scrollToSection("hosts")}
                    className="block w-full text-sm text-sand-100/70 transition hover:text-turquoise-200"
                  >
                    Hosts
                  </button>

                  <button
                    onClick={() => scrollToSection("speakers")}
                    className="block w-full text-sm text-sand-100/70 transition hover:text-turquoise-200"
                  >
                    Your Guides
                  </button>

                  <button
                    onClick={() => scrollToSection("story")}
                    className="block w-full text-sm text-sand-100/70 transition hover:text-turquoise-200"
                  >
                    The Story
                  </button>

                  <button
                    onClick={handleRegisterClick}
                    className="block w-full text-sm font-semibold text-gold-300 transition hover:text-gold-200"
                  >
                    Register Now
                  </button>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Contact</h4>

                <div className="space-y-3 text-sand-100/70">
                  <a
                    href="mailto:ClearvisionConference@gmail.com"
                    className="flex items-center justify-center gap-2 text-sm transition hover:text-turquoise-200"
                  >
                    <Mail size={16} />
                    ClearvisionConference@gmail.com
                  </a>

                  <a
                    href="tel:+18504993261"
                    className="flex items-center justify-center gap-2 text-sm transition hover:text-turquoise-200"
                  >
                    <Phone size={16} />
                    (850) 499-3261
                  </a>
                </div>
              </div>

              {/* SUMMIT */}
              <div>
                <h4 className="mb-4 font-semibold text-white">2027 Summit</h4>

                <div className="space-y-2 text-sm text-sand-100/70">
                  <p>We SEE You.</p>
                  <p>A Leadership &amp; Wellness Experience</p>
                  <p>#ClearVisionSummit2027</p>
                </div>
              </div>
            </div>

            <div className="border-t border-navy-700 pt-8">
              <p className="text-sm text-sand-100/50">
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
  return <HomePage />;
}

export default App;
