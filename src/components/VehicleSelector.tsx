import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { VehicleType } from "@/data/mockData";
import bikeImg from "@/assets/bike.png";
import carImg from "@/assets/car.png";

interface Props {
  onSelect: (type: VehicleType) => void;
}

const VehicleSelector = ({ onSelect }: Props) => {
  const { t } = useLanguage();

  const vehicles: { type: VehicleType; img: string; label: string }[] = [
    { type: "bike", img: bikeImg, label: t("bike") },
    { type: "car", img: carImg, label: t("car") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-8 w-full max-w-lg mx-auto px-4"
    >
      <h2 className="text-2xl font-bold text-foreground text-center">{t("selectVehicle")}</h2>

      <div className="grid grid-cols-2 gap-6 w-full">
        {vehicles.map((v, i) => (
          <motion.button
            key={v.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="vehicle-card flex flex-col items-center gap-4"
            onClick={() => onSelect(v.type)}
          >
            <img src={v.img} alt={v.label} className="w-32 h-32 object-contain" />
            <span className="text-xl font-semibold text-foreground">{v.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default VehicleSelector;
