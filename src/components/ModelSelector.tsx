import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { VehicleType, VehicleModel, bikeModels, carModels } from "@/data/mockData";

interface Props {
  vehicleType: VehicleType;
  onSelect: (model: VehicleModel) => void;
}

const ModelSelector = ({ vehicleType, onSelect }: Props) => {
  const { t } = useLanguage();
  const models = vehicleType === "bike" ? bikeModels : carModels;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto px-4"
    >
      <h2 className="text-2xl font-bold text-foreground text-center">{t("selectModel")}</h2>

      <div className="grid grid-cols-2 gap-3 w-full">
        {models.map((m, i) => (
          <motion.button
            key={m.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="symptom-card"
            onClick={() => onSelect(m)}
          >
            <span className="text-3xl">{m.icon}</span>
            <span className="text-xs font-semibold text-foreground leading-tight">{m.name}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ModelSelector;
