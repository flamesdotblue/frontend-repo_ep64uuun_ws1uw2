import Spline from "@splinetool/react-spline";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/0cRZbJp8uGVc7e8b/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium ring-1 ring-emerald-200">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered Translation & Interpretation
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Speak any language with confidence
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl">
            LinguaFlow helps teams translate content and interpret conversations in real-time across 100+ languages. Fast, accurate, and human-validated when it matters most.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-black transition-colors">
              Try live translator
            </a>
            <a href="#services" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
              Explore services
            </a>
          </div>
          <div className="mt-6 text-xs text-gray-500">No sign-up required for the demo</div>
        </div>
      </div>
    </section>
  );
}
