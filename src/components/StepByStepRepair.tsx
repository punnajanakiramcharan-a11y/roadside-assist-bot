import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/data/translations";

interface Step {
  title: Record<string, string>;
  description: Record<string, string>;
  icon: string;
}

interface Props {
  steps: Step[];
  lang: Language;
}

const StepByStepRepair = ({ steps, lang }: Props) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="flex flex-col gap-4"
    >
      <h3 className="text-xl font-bold text-foreground">{t("stepByStep")}</h3>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12 }}
          className="step-card flex gap-4"
        >
          <div className="flex flex-col items-center shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
              {step.icon}
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-border mt-2" />
            )}
          </div>
          <div className="pb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-primary uppercase">
                {t("step")} {i + 1}
              </span>
            </div>
            <h4 className="font-semibold text-foreground text-sm">
              {step.title[lang] || step.title.en}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {step.description[lang] || step.description.en}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StepByStepRepair;
