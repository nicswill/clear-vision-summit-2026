import React, { useMemo, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  Mail,
  Phone,
  Heart,
  Sparkles,
  Eye,
  Wind,
  Compass,
  Wrench,
  Sun,
} from "lucide-react";
import RegisterPage from "./components/RegisterPage";
import CoachRegistration from "./components/CoachRegistration";
import SpeakerRegistration from "./components/SpeakerRegistration";
import AttendeeRegistration from "./components/AttendeeRegistration";
import Reveal from "./components/Reveal";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const EVENT = {
    year: 2027,
    dateRange: "January 29–30, 2027",
    city: "Okaloosa Island, Florida",
    venue: "The Island Resort at Fort Walton Beach",
  };

  const heroDateRange = `${EVENT.dateRange} · ${EVENT.city}`;

  const testimonials = useMemo(
    () => [
      {
        quote:
          "I arrived exhausted and left feeling seen for the first time in years. This wasn't a conference. It was a homecoming.",
        author: "Sarah Chen",
        title: "CEO, TechForward",
      },
      {
        quote:
          "For once, nobody wanted anything from me. I could just be. I didn't realize how much I needed that until I experienced it.",
        author: "Marcus Rodriguez",
        title: "VP Operations, Global Dynamics",
      },
      {
        quote:
          "The weight I've been carrying — I didn't even know how heavy it was until someone helped me set it down. I left lighter.",
        author: "Dr. Amanda Foster",
        title: "Director, Innovation Labs",
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegisterClick = () => {
    navigate("/register");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const handlePartnerClick = () => {
    const el = document.getElementById("partners");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== NAVIGATION ==================== */}
      <nav className="fixed top-0 w-full z-50 bg-navy-900/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="https://clearvisionleader.com"
              className="flex items-center gap-3"
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
              <button
                onClick={() => scrollToSection("story")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                The Story
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("voices")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                Voices
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                Partners
              </button>
            </div>

            <button
              onClick={handleRegisterClick}
              className="bg-gold-400 text-navy-900 px-5 py-2 rounded-full hover:bg-gold-300 transition-all duration-200 text-sm font-semibold shadow-md"
            >
              Reserve Your Seat
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== 1. HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-800/65 to-navy-900/85"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
          <p className="text-turquoise-200 font-sans text-sm md:text-base tracking-[0.25em] uppercase mb-8 animate-fade-in">
            Clear Vision Leadership Wellness Summit 2027
          </p>

          <h1 className="font-serif text-6xl md:text-8xl text-white mb-10 leading-[1.05] animate-fade-in-up">
            We SEE You.
          </h1>

          <p
            className="font-serif text-xl md:text-2xl text-turquoise-100 italic mb-10 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            The world celebrates what leaders accomplish. We create a space
            where leaders can breathe, reconnect, and restore.
          </p>

          <p
            className="text-base md:text-lg text-sand-100/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
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
              className="bg-gold-400 text-navy-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-300 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Reserve Your Seat
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handlePartnerClick}
              className="border border-turquoise-200/70 text-turquoise-50 px-8 py-4 rounded-full text-base font-semibold hover:bg-turquoise-200/10 transition-all duration-200"
            >
              Become a Partner
            </button>
          </div>

          <p
            className="mt-12 text-sm text-sand-100/80 tracking-wide animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {heroDateRange}
          </p>
        </div>
      </section>

      {/* ==================== 2. BEHIND EVERY LEADER ==================== */}
      <section
        id="story"
        className="relative bg-sand-50 py-32 md:py-48 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            <Reveal>
              <p className="font-serif text-3xl md:text-5xl text-navy-800 leading-[1.3]">
                Behind every title...
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-serif text-3xl md:text-5xl text-turquoise-700 leading-[1.3] pl-8 md:pl-16">
                is a person.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-serif text-3xl md:text-5xl text-navy-800 leading-[1.3]">
                Behind every responsibility...
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-serif text-3xl md:text-5xl text-turquoise-700 leading-[1.3] pl-8 md:pl-16">
                is someone carrying more than most people know.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-serif text-3xl md:text-5xl text-navy-800 leading-[1.3]">
                Behind every strong leader...
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-serif text-3xl md:text-5xl text-turquoise-700 leading-[1.3] pl-8 md:pl-16">
                is someone quietly asking,
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-serif text-3xl md:text-5xl text-navy-900 italic leading-[1.3] pl-8 md:pl-16">
                "When do I get to breathe?"
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="pt-8 md:pt-12">
                <div className="w-16 h-px bg-gold-400 mb-6"></div>
                <p className="font-serif text-4xl md:text-6xl text-gold-600 leading-tight">
                  We SEE You.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 3. WHY WE CREATED THIS ==================== */}
      <section className="bg-white py-28 md:py-40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6">
              Why We Created This
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-12 leading-[1.15]">
              We watched leaders give everything to everyone else — and forget
              to save something for themselves.
            </h2>
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={150}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We saw pastors holding the grief of congregations. Physicians
                carrying the weight of lives. Educators pouring into children
                who may never say thank you. First responders running toward
                what everyone else runs from.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We noticed that the strongest among us are often the quietest
                about their own exhaustion. That the ones who carry everyone
                else rarely have someone who carries them.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="font-serif text-2xl md:text-3xl text-navy-800 italic leading-relaxed">
                So we created a space — not for keynotes and networking, but for
                breath. For rest. For being seen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 4. WHO WE SEE ==================== */}
      <section className="bg-navy-900 py-28 md:py-40 relative overflow-hidden">
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
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-20 text-center leading-[1.15]">
              You don't have to carry it alone.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Healers",
                message:
                  "You hold lives in your hands and grief in your chest. We see the toll it takes to care so deeply.",
              },
              {
                title: "The Shepherds",
                message:
                  "You carry the weight of souls and the burdens of many. We see how rarely someone asks how you are.",
              },
              {
                title: "The Educators",
                message:
                  "You pour into futures that may never thank you. We see the quiet exhaustion behind your dedication.",
              },
              {
                title: "The Protectors",
                message:
                  "You run toward what others flee from. We see the strength it takes to keep showing up.",
              },
              {
                title: "The Servant Leaders",
                message:
                  "You carry everyone else's weight and call it purpose. We see the cost of always being the strong one.",
              },
              {
                title: "The Ones No One Checks On",
                message:
                  "You lead, you provide, you hold it together. We see you — the one everyone leans on but no one thinks to ask.",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full p-8 rounded-2xl bg-navy-800/60 border border-turquoise-200/15 hover:border-turquoise-300/40 transition-all duration-500 hover:bg-navy-800/80">
                  <h3 className="font-serif text-2xl text-turquoise-200 mb-5">
                    {card.title}
                  </h3>
                  <p className="text-sand-100/80 leading-relaxed">
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
        className="bg-sand-50 py-28 md:py-40 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6 text-center">
              The Experience
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-16 text-center leading-[1.15]">
              A journey back to yourself.
            </h2>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {/* Friday Arrival */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Friday
                  </p>
                  <h3 className="font-serif text-3xl text-navy-900">Arrival</h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    You arrive at the coast. The salt air meets you before you
                    even reach the door. There is no rush. No schedule to
                    perform. Just the sound of waves and the permission to
                    exhale. This is where the weight begins to lift.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Saturday Morning */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Saturday
                  </p>
                  <h3 className="font-serif text-3xl text-navy-900">Morning</h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    You wake to the rhythm of the gulf. The morning is gentle —
                    intentional practices to quiet the noise, space to hear
                    your own voice again, and the first threads of clarity
                    returning. No one needs anything from you. This time is
                    yours.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Saturday Afternoon */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Saturday
                  </p>
                  <h3 className="font-serif text-3xl text-navy-900">
                    Afternoon
                  </h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    You gather with leaders who understand — not because they
                    read about it, but because they carry it too. Conversations
                    deepen. Stories are shared. The relief of being understood
                    settles over the room like the afternoon sun on the water.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Closing Reflection */}
            <Reveal>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start">
                <div className="md:text-right md:pt-2">
                  <p className="text-turquoise-600 font-sans text-sm tracking-[0.2em] uppercase mb-2">
                    Closing
                  </p>
                  <h3 className="font-serif text-3xl text-navy-900">
                    Reflection
                  </h3>
                </div>
                <div className="md:border-l md:border-sand-300 md:pl-12">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    You stand at the edge of the water one last time. Something
                    has shifted. You came in carrying everything. You leave
                    knowing you don't have to. The leader beneath the
                    responsibility is restored — and seen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 6. MEET THE EXPERTS ==================== */}
      <section className="bg-white py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6 text-center">
              Meet the Experts Guiding Your Journey
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-6 text-center leading-[1.15]">
              Guides who understand the weight.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-gray-500 mb-20 text-center max-w-2xl mx-auto">
              Our faculty will be announced soon — practitioners, coaches, and
              voices who have walked the road of leadership themselves.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Keynote Speaker", role: "To Be Announced" },
              { name: "Wellness Facilitator", role: "To Be Announced" },
              { name: "Leadership Coach", role: "To Be Announced" },
              { name: "Mindfulness Guide", role: "To Be Announced" },
              { name: "Restoration Practitioner", role: "To Be Announced" },
              { name: "Closing Speaker", role: "To Be Announced" },
            ].map((person, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden bg-sand-50 border border-sand-200 hover:shadow-xl transition-all duration-500">
                  <div
                    className="aspect-[4/5] bg-gradient-to-br from-navy-800 to-turquoise-800 relative overflow-hidden"
                    style={{
                      backgroundImage: `url('https://images.pexels.com/photos/${
                        [
                          "3184360", "3184405", "3184465",
                          "3184392", "3184339", "3184325",
                        ][i]
                      }/pexels-photo-${
                        [
                          "3184360", "3184405", "3184465",
                          "3184392", "3184339", "3184325",
                        ][i]
                      }.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-navy-900/60 group-hover:bg-navy-900/40 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div>
                        <h3 className="font-serif text-xl text-white mb-1">
                          {person.name}
                        </h3>
                        <p className="text-turquoise-200 text-sm tracking-wide">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. HOW YOU'LL LEAVE ==================== */}
      <section className="bg-navy-900 py-28 md:py-40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-turquoise-300 font-sans text-sm tracking-[0.25em] uppercase mb-6 text-center">
              How You'll Leave
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-20 text-center leading-[1.15]">
              Not the same person who arrived.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                word: "Seen",
                desc: "For the first time in a long time, you'll feel truly seen — not for what you produce, but for who you are.",
              },
              {
                icon: Heart,
                word: "Restored",
                desc: "The weight you've been carrying will feel lighter. You'll leave with more than you came with — more breath, more room, more of yourself.",
              },
              {
                icon: Compass,
                word: "Clear",
                desc: "The noise will have quieted. You'll see your next step — not because someone told you, but because you finally heard yourself.",
              },
              {
                icon: Sparkles,
                word: "Connected",
                desc: "You'll leave with people who understand. Not contacts. Not networks. Leaders who carry what you carry.",
              },
              {
                icon: Wrench,
                word: "Equipped",
                desc: "You'll go home with gentle, practical tools — not a binder of theory, but practices you can actually hold onto.",
              },
              {
                icon: Sun,
                word: "Hopeful",
                desc: "Something will have rekindled. You'll remember why you started leading in the first place — and feel that it's still possible.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full p-8 rounded-2xl bg-navy-800/50 border border-turquoise-200/10 hover:border-gold-400/40 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-turquoise-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-turquoise-200 group-hover:text-gold-300 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-4">
                    {item.word}
                  </h3>
                  <p className="text-sand-100/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 8. VOICES FROM LEADERS ==================== */}
      <section
        id="voices"
        className="bg-sand-50 py-28 md:py-40 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6">
              Voices From Leaders
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-20 leading-[1.15]">
              They came carrying weight. They left feeling seen.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative min-h-[280px]">
              <div className="mb-8 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                ))}
              </div>

              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === activeTestimonial
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <blockquote className="font-serif text-2xl md:text-3xl text-navy-800 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div className="border-t border-sand-300 pt-6 max-w-xs mx-auto">
                    <p className="font-semibold text-navy-900">{t.author}</p>
                    <p className="text-gray-500 text-sm">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-gold-400 w-8"
                      : "bg-sand-300 hover:bg-sand-400"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== 9. BECOME PART OF THE RESTORATION ==================== */}
      <section
        id="partners"
        className="bg-white py-28 md:py-40 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-turquoise-600 font-sans text-sm tracking-[0.25em] uppercase mb-6">
              Become Part of the Restoration
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-10 leading-[1.15]">
              Partner with us in restoring the ones who carry everyone else.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              This summit exists because leaders are running out of breath. Your
              partnership helps create the space where they can finally exhale.
              When you stand with us, you're not sponsoring a conference — you're
              investing in the restoration of people who give everything they
              have.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePartnerClick}
                className="bg-navy-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-navy-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Become a Partner
              </button>
              <a
                href="mailto:ClearvisionConference@gmail.com"
                className="border border-navy-300 text-navy-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-navy-50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Partner With Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== 10. CINEMATIC CTA ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-800/70 to-navy-900/90"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-32">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-7xl text-white mb-10 leading-[1.1]">
              The Leaders Who Carry Everyone Else...
              <br />
              <span className="text-turquoise-200">
                Need Someone To Carry Them.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif text-3xl md:text-5xl text-gold-400 italic mb-16">
              We SEE You.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRegisterClick}
                className="bg-gold-400 text-navy-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-300 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Reserve Your Seat
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handlePartnerClick}
                className="border border-turquoise-200/70 text-turquoise-50 px-8 py-4 rounded-full text-base font-semibold hover:bg-turquoise-200/10 transition-all duration-200"
              >
                Become a Partner
              </button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-12 text-sm text-sand-100/70 tracking-wide">
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
              <a href="https://clearvisionleader.com">
                <img
                  src="/cv logo .png"
                  alt="Clear Vision Summit Logo"
                  className="h-12 w-auto object-contain"
                />
              </a>
              <div className="text-left">
                <a
                  href="https://clearvisionleader.com"
                  className="font-serif text-lg text-white hover:text-turquoise-200 transition-colors"
                >
                  Clear Vision
                </a>
                <p className="text-xs font-sans tracking-[0.2em] uppercase text-turquoise-200">
                  Wellness Summit 2027
                </p>
              </div>
            </div>

            <p className="text-sand-100/60 mb-10">
              {EVENT.dateRange} · {EVENT.city}
            </p>

            <div className="grid sm:grid-cols-3 gap-10 mb-10 max-w-3xl mx-auto text-left sm:text-center">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("story")}
                    className="block text-sand-100/60 hover:text-white transition-colors mx-auto"
                  >
                    The Story
                  </button>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="block text-sand-100/60 hover:text-white transition-colors mx-auto"
                  >
                    Experience
                  </button>
                  <button
                    onClick={handleRegisterClick}
                    className="block text-sand-100/60 hover:text-white transition-colors mx-auto"
                  >
                    Reserve Your Seat
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3">Contact</h4>
                <div className="space-y-2 text-sand-100/60">
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    ClearvisionConference@gmail.com
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    (850) 499-3261
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                <div className="space-y-2 text-sand-100/60">
                  <p>LinkedIn · @ClearVisionLeader</p>
                  <p>#ClearVisionSummit2027</p>
                </div>
              </div>
            </div>

            <div className="border-t border-navy-700 pt-8">
              <p className="text-sand-100/40 text-sm">
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
