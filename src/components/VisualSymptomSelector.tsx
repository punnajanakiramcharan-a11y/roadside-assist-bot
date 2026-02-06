import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SymptomId, symptomIcons } from "@/data/mockData";

interface Props {
  onSelect: (symptom: SymptomId) => void;
}

const symptoms: { id: SymptomId; key: string }[] = [
  { id: "engineStopped", key: "engineStopped" },
  { id: "notStarting", key: "notStarting" },
  { id: "smokecoming", key: "smokecoming" },
  { id: "strangeNoise", key: "strangeNoise" },
  { id: "lowPower", key: "lowPower" },
];

const VisualSymptomSelector = ({ onSelect }: Props) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto px-4"
    >
      <h2 className="text-2xl font-bold text-foreground text-center">{t("whatHappened")}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
        {symptoms.map((s, i) => (
          <motion.button
            key={s.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="symptom-card"
            onClick={() => onSelect(s.id)}
          >
            <span className="text-4xl">{symptomIcons[s.id]}</span>
            <span className="text-sm font-medium text-foreground leading-tight">{t(s.key)}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default VisualSymptomSelector;
