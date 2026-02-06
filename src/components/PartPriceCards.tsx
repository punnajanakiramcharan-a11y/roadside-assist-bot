import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  prices: { amazon: number; flipkart: number; local: number };
  partName: string;
}

const PartPriceCards = ({ prices, partName }: Props) => {
  const { t } = useLanguage();

  const cards = [
    { label: t("amazon"), price: prices.amazon, color: "bg-warning/10 border-warning/30", icon: "🛒" },
    { label: t("flipkart"), price: prices.flipkart, color: "bg-accent/10 border-accent/30", icon: "🏪" },
    { label: t("localShop"), price: prices.local, color: "bg-success/10 border-success/30", icon: "🏠", best: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-3"
    >
      <h3 className="text-xl font-bold text-foreground">{t("partPrices")}</h3>
      <p className="text-sm text-muted-foreground font-medium">{partName}</p>
      <div className="grid grid-cols-3 gap-3">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`price-card border ${c.color} relative`}
          >
            {c.best && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-success text-success-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                BEST
              </span>
            )}
            <span className="text-2xl">{c.icon}</span>
            <p className="text-xs text-muted-foreground mt-2">{c.label}</p>
            <p className="text-lg font-bold text-foreground mt-1">₹{c.price}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PartPriceCards;
