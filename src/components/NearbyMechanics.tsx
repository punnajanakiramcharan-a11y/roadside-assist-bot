import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockMechanics } from "@/data/mockData";
import { Phone, Star, MapPin } from "lucide-react";

const NearbyMechanics = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-3"
    >
      <h3 className="text-xl font-bold text-foreground">{t("nearbyMechanics")}</h3>
      {mockMechanics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className="step-card flex items-center justify-between"
        >
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground text-sm truncate">{m.name}</h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" /> {m.distance}
              </span>
              <span className="flex items-center gap-1 text-xs text-warning">
                <Star className="w-3 h-3 fill-current" /> {m.rating}
              </span>
            </div>
          </div>
          <a
            href={`tel:${m.phone}`}
            className="shrink-0 w-10 h-10 rounded-full bg-success flex items-center justify-center text-success-foreground active:scale-90 transition-transform"
          >
            <Phone className="w-4 h-4" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NearbyMechanics;
