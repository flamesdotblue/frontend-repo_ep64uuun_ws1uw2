import { Globe, Headphones, MessageCircle, Shield } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Website & App Localization",
    desc: "End-to-end localization for product UI, documentation, and marketing content across 100+ languages",
  },
  {
    icon: Headphones,
    title: "Live Interpretation",
    desc: "On-demand interpreters for meetings, webinars, and customer support — available 24/7",
  },
  {
    icon: MessageCircle,
    title: "Multilingual Chat & Support",
    desc: "Instantly translate chats, emails, and tickets to serve customers in their native language",
  },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "SOC 2 compliant workflows with granular access controls and data residency options" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white via-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Built for global teams</h2>
          <p className="mt-2 text-gray-600">Everything you need to translate content and interpret conversations at scale.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div key={idx} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gray-900 text-white grid place-items-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Need certified translators or interpreters?</h3>
            <p className="text-sm text-gray-600 mt-1">Tell us about your use case and we'll match you with the right specialists.</p>
          </div>
          <a
            href="mailto:sales@linguaflow.app?subject=Language Services Inquiry"
            className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-black"
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
