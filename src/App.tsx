import React, { useMemo, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import RegisterPage from "./components/RegisterPage";
import CoachRegistration from "./components/CoachRegistration";
import SpeakerRegistration from "./components/SpeakerRegistration";
import AttendeeRegistration from "./components/AttendeeRegistration";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // ---- Event details (single source of truth) ----
  const EVENT = {
    year: 2027,
    dateRange: "January 29–30, 2027",
    city: "Okaloosa Island, Florida",
    venue: "The Island Resort at Fort Walton Beach",
  };

  const heroDateRange = `${EVENT.dateRange} · ${EVENT.city}`;
  const rangeShort = EVENT.dateRange;

  // Day labels for the schedule section (updated in a later phase)
  const day1Label = "Friday, Jan 29";
  const day2Label = "Saturday, Jan 30";
  const day3Label = "Saturday, Jan 30";

  // ---- Testimonials ----
  const testimonials = useMemo(
    () => [
      {
        quote:
          "This summit completely transformed how I approach leadership. The combination of wellness and strategy was exactly what I needed.",
        author: "Sarah Chen",
        title: "CEO, TechForward",
      },
      {
        quote:
          "I left with clarity I hadn't felt in years. The P3 Method has become my go-to framework for decision-making.",
        author: "Marcus Rodriguez",
        title: "VP Operations, Global Dynamics",
      },
      {
        quote:
          "The beachfront setting and mindful approach made this unlike any leadership event I've attended. Truly transformative.",
        author: "Dr. Amanda Foster",
        title: "Director, Innovation Labs",
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy-900/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + event name */}
            <a href="https://clearvisionleader.com" className="flex items-center gap-3">
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

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("outcomes")}
                className="text-white/85 hover:text-turquoise-200 transition-colors font-medium text-sm"
              >
                Outcomes
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Coastal background */}
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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          <p className="text-turquoise-200 font-sans text-sm md:text-base tracking-[0.25em] uppercase mb-6 animate-fade-in">
            Clear Vision Leadership Wellness Summit 2027
          </p>

          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[1.05] animate-fade-in-up">
            We SEE You.
          </h1>

          <p className="font-serif text-xl md:text-2xl text-turquoise-100 italic mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            The world celebrates what leaders accomplish. We create a space
            where leaders can breathe, reconnect, and restore.
          </p>

          <p className="text-base md:text-lg text-sand-100/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            You spend every day carrying responsibilities, solving problems,
            leading teams, serving families, and showing up for others. Now it
            is time to restore the leader beneath the responsibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <button
              onClick={handleRegisterClick}
              className="bg-gold-400 text-navy-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-300 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Reserve Your Seat
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="border border-turquoise-200/70 text-turquoise-50 px-8 py-4 rounded-full text-base font-semibold hover:bg-turquoise-200/10 transition-all duration-200"
            >
              Become a Partner
            </button>
          </div>

          <p className="mt-10 text-sm text-sand-100/80 tracking-wide animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {heroDateRange}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">3</div>
              <div className="text-sm md:text-base opacity-90">
                Transformative Days
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">∞</div>
              <div className="text-sm md:text-base opacity-90">
                Leaders Welcome
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">POD</div>
              <div className="text-sm md:text-base opacity-90">
                Coaching Groups
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">👓✨</div>
              <div className="text-sm md:text-base opacity-90">
                See. Be. Lead.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leadership retreat designed for wholeness, clarity, and renewal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Daily Mindfulness & Clarity Sessions
              </h3>
              <p className="text-gray-600">
                Begin each day with intentional practices designed to center
                your mind and clarify your purpose as a leader.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Clear Vision POD Coaching Groups
              </h3>
              <p className="text-gray-600">
                Small group coaching sessions focused on Pause. Plan. Proceed.
                methodology with leaders who understand your journey.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Inspiring Keynote Messages
              </h3>
              <p className="text-gray-600">
                Transformational speakers who will challenge, encourage, and
                equip you with tools to See Well. Be Well. Lead Well.
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              More Than Just Sessions
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Rest & Refresh
                </h4>
                <p className="text-gray-600 text-sm">
                  Space to rest, refresh, and reconnect with your purpose
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Practical Tools
                </h4>
                <p className="text-gray-600 text-sm">
                  Tools and strategies to See Well. Be Well. Lead Well.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                <p className="text-gray-600 text-sm">
                  Connect with leaders who understand the weight you carry
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-emerald-100 px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-sky-600" />
              <span className="text-gray-800 font-medium">
                Experience renewal in a stunning beachfront setting at The
                Island Resort at Fort Walton Beach, Okaloosa Island, Florida.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agenda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A 3-day journey designed for servant leaders ready to retreat,
              reset, and rise whole
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Friday */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex itemscenter justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Fri</span>
                </div>
                <h3 className="text-2xl font-bold text-sky-600 mb-2">
                  SEE WELL
                </h3>
                <p className="text-gray-500 font-medium">
                  Friday – Gain Clarity
                </p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>Mindfulness & Opening Session</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>Keynote Speaker (To Be Announced)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>POD Sessions: Pause & Gain Clarity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>Evening Networking & Reflection</span>
                </li>
              </ul>
            </div>

            {/* Saturday */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Sat</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                  BE WELL
                </h3>
                <p className="text-gray-500 font-medium">
                  Saturday – Restore Wholeness
                </p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Sunrise Wellness Activity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Keynote Speaker (To Be Announced)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>POD Sessions: Plan & Restore Wholeness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Evening Wellness Experience</span>
                </li>
              </ul>
            </div>

            {/* Sunday */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Sun</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-600 mb-2">
                  LEAD WELL
                </h3>
                <p className="text-gray-500 font-medium">
                  Sunday – Proceed with Purpose
                </p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Morning Mindfulness & Worship/Reflection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Keynote Speaker (To Be Announced)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>POD Sessions: Proceed with Purpose</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Closing Celebration & Send-Off</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Speakers & Faculty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our lineup of keynote speakers, coaches, and facilitators will
              bring wisdom, wellness, and practical tools for leaders across
              professions.
            </p>

            <div className="bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-200 rounded-xl p-8 max-w-2xl mx-auto">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                (To Be Announced)
              </h3>
              <p className="text-gray-700 text-lg">
                Stay tuned—faculty will be revealed soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Leaders Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              From previous Clear Vision experiences
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-bold text-gray-900">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeTestimonial].title}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeTestimonial
                        ? "bg-sky-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section id="outcomes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Attend
            </h2>
            <p className="text-xl text-gray-600">
              Experience a leadership retreat designed for wholeness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Gain clarity to move forward with confidence",
              "Experience a leadership retreat designed for wholeness",
              "Connect with leaders who understand the weight you carry",
              "Leave refreshed, restored, and ready to lead with courage",
              "Practical tools to See Well. Be Well. Lead Well.",
              "Space to rest, refresh, and reconnect with your purpose",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section
        id="schedule"
        className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schedule at a Glance
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {day1Label}
                      </h3>
                      <p className="text-gray-600">See Well - Gain Clarity</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {day2Label}
                      </h3>
                      <p className="text-gray-600">
                        Be Well - Restore Wholeness
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {day3Label}
                      </h3>
                      <p className="text-gray-600">
                        Lead Well - Proceed with Purpose
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-sky-600" />
                  <span>The Island Resort at Fort Walton Beach, Okaloosa Island, Florida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span>{rangeShort}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who This Is For
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                "Healthcare professionals in white coats carrying healing burdens",
                "Clergy and spiritual leaders shepherding communities",
                "Educators shaping minds and futures of the next generation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-sky-50 hover:from-sky-50 hover:to-emerald-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                "Those in uniform serving and protecting communities",
                "Servant leaders carrying everyone else's weight",
                "Any leader ready to reclaim wholeness for themselves",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-sky-50 hover:from-sky-50 hover:to-emerald-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl text-gray-800 font-bold bg-gradient-to-r from-sky-50 to-emerald-50 px-8 py-6 rounded-xl inline-block border border-sky-200">
                👓✨ Leaders, it's time to be seen, to breathe, and to restore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section
        id="register"
        className="py-20 bg-gradient-to-br from-sky-600 to-emerald-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Leaders, It's Time.</h2>
            <p className="text-xl opacity-90 mb-4">
              Time to breathe. Time to reconnect. Time to restore.
            </p>
            <p className="text-2xl font-bold mb-8">
              Restoring the leader beneath the responsibility.
            </p>
            <div className="text-3xl mb-6">👓✨</div>
            <p className="text-xl opacity-90">
              Join us at the Clear Vision Leadership Wellness Summit 2027.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Clear Vision Leadership Wellness Summit 2027
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-sky-600" />
                      <span>{rangeShort}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      <span>Okaloosa Island, Florida</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <button className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-sky-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span onClick={handleRegisterClick}>Reserve Your Seat</span>
                  </button>
                  <p className="text-gray-600 mt-4 text-sm">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Early Bird Pricing Available • Limited Time Only
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-green-800 mb-2">
                      🎯 Satisfaction Guarantee
                    </h4>
                    <p className="text-green-700">
                      If you don't leave feeling more clarity and confidence in
                      your leadership, we'll refund your investment. No
                      questions asked.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Optional Add-Ons
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Star className="w-6 h-6 text-amber-600" />
                        <h5 className="font-bold text-gray-900">VIP Access</h5>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Private coaching session + premium swag + priority
                        seating
                      </p>
                      <div className="text-sm text-amber-700 font-medium">
                        Premium experience available
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-xl border border-sky-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-6 h-6 text-sky-600" />
                        <h5 className="font-bold text-gray-900">
                          Extra Night Stay
                        </h5>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Extend your pause with an additional night at The Island
                        Resort
                      </p>
                      <div className="text-sm text-sky-700 font-medium">
                        Subject to availability
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm mb-4">
                    Questions? We're here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:ClearvisionConference@gmail.com"
                      className="text-sky-600 hover:text-sky-700 font-medium"
                    >
                      📧 ClearvisionConference@gmail.com
                    </a>
                    <a
                      href="tel:+18504993261"
                      className="text-sky-600 hover:text-sky-700 font-medium"
                    >
                      📞 (850) 499-3261
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <a href="https://clearvisionleader.com">
                <img
                  src="/cv logo .png"
                  alt="Clear Vision Summit Logo"
                  className="h-10 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                />
              </a>
              <a
                href="https://clearvisionleader.com"
                className="font-bold text-xl hover:opacity-90 transition-opacity"
              >
                Clear Vision Leadership Wellness Summit
              </a>
            </div>
            <p className="text-gray-400 mb-8">
              {rangeShort} • Okaloosa Island, Florida
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection("schedule")}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Schedule
                  </button>
                  <button
                    onClick={handleRegisterClick}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Register
                  </button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>ClearvisionConference@gmail.com</p>
                  <p>(850) 499-3261</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                <div className="space-y-2 text-gray-400">
                  <p>LinkedIn • @ClearVisionLeader</p>
                  <p>#ClearVisionSummit2027</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
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
