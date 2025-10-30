import { useMemo, useState } from "react";
import { ArrowsLeftRight, Volume2 } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "pt", label: "Portuguese" },
  { code: "hi", label: "Hindi" },
  { code: "zh", label: "Chinese" },
  { code: "ar", label: "Arabic" },
  { code: "ja", label: "Japanese" },
];

function pseudoTranslate(text, target) {
  if (!text.trim()) return "";

  const dictionaries = {
    es: {
      hello: "hola",
      world: "mundo",
      good: "bueno",
      morning: "mañana",
      "thank you": "gracias",
    },
    fr: { hello: "bonjour", world: "monde", good: "bon", morning: "matin", "thank you": "merci" },
    de: { hello: "hallo", world: "welt", good: "gut", morning: "morgen", "thank you": "danke" },
    pt: { hello: "olá", world: "mundo", good: "bom", morning: "manhã", "thank you": "obrigado" },
    hi: { hello: "नमस्ते", world: "दुनिया", good: "अच्छा", morning: "सुबह", "thank you": "धन्यवाद" },
    zh: { hello: "你好", world: "世界", good: "好", morning: "早上", "thank you": "谢谢" },
    ar: { hello: "مرحبا", world: "العالم", good: "جيد", morning: "صباح", "thank you": "شكرا" },
    ja: { hello: "こんにちは", world: "世界", good: "良い", morning: "朝", "thank you": "ありがとう" },
  };

  const base = text
    .toLowerCase()
    .replace(/[!.?]/g, "")
    .split(/\s+/)
    .map((w) => dictionaries[target]?.[w] || w)
    .join(" ");

  // stylistic tweak so output looks a bit different if not found in dictionary
  if (base === text.toLowerCase()) {
    return `${text.split("").reverse().join("")}`; // playful fallback
  }
  return base;
}

export default function TranslatorDemo() {
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("es");
  const [input, setInput] = useState("Hello world and good morning! Thank you.");

  const output = useMemo(() => pseudoTranslate(input, to), [input, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setInput(output);
  };

  const speak = (text, lang) => {
    try {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    } catch (e) {
      // ignore if not supported
    }
  };

  return (
    <section id="demo" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full max-w-[12rem] rounded-lg border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
              <button
                onClick={swap}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white h-9 w-9 hover:bg-gray-50"
                aria-label="Swap languages"
              >
                <ArrowsLeftRight className="h-4 w-4" />
              </button>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full max-w-[12rem] rounded-lg border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type or paste text to translate..."
              rows={6}
              className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-gray-500">Auto-detected: {from.toUpperCase()}</div>
              <button
                onClick={() => speak(input, from)}
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-3 py-2 text-xs hover:bg-black"
              >
                <Volume2 className="h-3.5 w-3.5" /> Listen
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-700">Translation</div>
              <div className="text-xs text-gray-400">{to.toUpperCase()}</div>
            </div>
            <div className="mt-4 whitespace-pre-wrap text-gray-900 leading-relaxed min-h-[9.25rem]">
              {output || ""}
            </div>
            <div className="mt-3 flex items-center justify-end">
              <button
                onClick={() => speak(output, to)}
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-3 py-2 text-xs hover:bg-black"
              >
                <Volume2 className="h-3.5 w-3.5" /> Listen
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Demo only: for production-grade accuracy we combine neural machine translation with professional linguists.
        </p>
      </div>
    </section>
  );
}
