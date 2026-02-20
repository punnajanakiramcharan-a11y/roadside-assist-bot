import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { DiagnosisData, VehicleType, SymptomId } from "@/data/mockData";
import { diagnosisDatabase } from "@/data/mockData";
import { AlertTriangle, CheckCircle, Wrench, MapPin, IndianRupee } from "lucide-react";
import StepByStepRepair from "./StepByStepRepair";
import PartPriceCards from "./PartPriceCards";
import NearbyMechanics from "./NearbyMechanics";
import { useState } from "react";
import { Language } from "@/data/translations";

interface Props {
  vehicleType: VehicleType;
  symptom: SymptomId;
  vehicleModelName?: string;
}

const DiagnosisResult = ({ vehicleType, symptom, vehicleModelName }: Props) => {
  const { t, lang } = useLanguage();
  const data: DiagnosisData = diagnosisDatabase[vehicleType][symptom];
  const [showRepair, setShowRepair] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const [showMechanics, setShowMechanics] = useState(false);

  const getLocalized = (obj: Record<string, string>) => obj[lang] || obj.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 w-full max-w-lg mx-auto px-4"
    >
      <h2 className="text-2xl font-bold text-foreground text-center">{t("diagnosisTitle")}</h2>

      {/* Vehicle Model Badge */}
      {vehicleModelName && (
        <div className="flex justify-center">
          <span className="px-4 py-1.5 bg-accent/15 text-accent rounded-full text-sm font-semibold">
            🚗 {vehicleModelName}
          </span>
        </div>
      )}

      {/* Engine Warning */}
      {data.isEngineRelated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-start gap-3"
        >
          <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">{t("engineWarning")}</p>
        </motion.div>
      )}

      {!data.isEngineRelated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success/10 border border-success/30 rounded-xl p-4 flex items-start gap-3"
        >
          <CheckCircle className="w-6 h-6 text-success shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">{t("smallIssue")}</p>
        </motion.div>
      )}

      {/* Possible Reasons */}
      <div className="step-card">
        <h3 className="font-semibold text-foreground mb-3">{t("possibleReasons")}</h3>
        <div className="flex flex-col gap-2">
          {data.possibleReasons.map((r, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
              <span className="text-2xl">{r.icon}</span>
              <span className="text-sm text-foreground">{getLocalized(r)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Damaged Part */}
      <div className="step-card">
        <div className="flex items-center gap-2 mb-2">
          <Wrench className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">{t("damagedPart")}</h3>
        </div>
        <p className="text-foreground font-medium">{getLocalized(data.damagedPart)}</p>
      </div>

      {/* Part Location */}
      <div className="step-card">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-foreground">{t("partLocation")}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{getLocalized(data.partLocationDesc)}</p>
      </div>

      {/* Can Fix at Home */}
      <div className="step-card flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{t("canFixAtHome")}</h3>
        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
          data.canFixAtHome
            ? "bg-success/15 text-success"
            : "bg-destructive/15 text-destructive"
        }`}>
          {data.canFixAtHome ? `✅ ${t("yes")}` : `❌ ${t("no")}`}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={() => setShowRepair(!showRepair)}
          className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all hover:opacity-90 active:scale-[0.98]"
        >
          🔧 {t("viewRepairGuide")}
        </button>
        <button
          onClick={() => setShowPrices(!showPrices)}
          className="w-full py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <IndianRupee className="w-5 h-5" /> {t("partPrices")}
        </button>
        <button
          onClick={() => setShowMechanics(!showMechanics)}
          className="w-full py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg transition-all hover:opacity-90 active:scale-[0.98]"
        >
          📍 {t("findMechanic")}
        </button>
      </div>

      {/* Expandable Sections */}
      {showRepair && (
        <StepByStepRepair steps={data.repairSteps} lang={lang as Language} />
      )}
      {showPrices && (
        <PartPriceCards
          prices={data.partPrices}
          partName={getLocalized(data.partName)}
        />
      )}
      {showMechanics && (
        <NearbyMechanics
          damagedPartName={getLocalized(data.damagedPart)}
          vehicleModelName={vehicleModelName}
        />
      )}
    </motion.div>
  );
};

export default DiagnosisResult;
