import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/data/translations";

const languages: { id: Language; label: string; native: string }[] = [
  { id: "en", label: "English", native: "English" },
  { id: "te", label: "Telugu", native: "తెలుగు" },
  { id: "hi", label: "Hindi", native: "हिंदी" },
  { id: "ta", label: "Tamil", native: "தமிழ்" },
];

interface Props {
  onSelect: () => void;
}

const LanguageSelector = ({ onSelect }: Props) => {
  const { lang, setLang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-8 w-full max-w-md mx-auto px-4"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">🔧 Vehicle Rescue</h1>
        <p className="text-muted-foreground text-lg">Choose Your Language / మీ భాషను ఎంచుకోండి</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {languages.map((l, i) => (
          <motion.button
            key={l.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`lang-btn ${lang === l.id ? "active" : ""}`}
            onClick={() => {
              setLang(l.id);
              onSelect();
            }}
          >
            <div className="text-xl font-bold">{l.native}</div>
            <div className="text-sm opacity-70">{l.label}</div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default LanguageSelector;
