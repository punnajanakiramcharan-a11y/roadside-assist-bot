import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import VehicleSelector from "@/components/VehicleSelector";
import VisualSymptomSelector from "@/components/VisualSymptomSelector";
import DiagnosisResult from "@/components/DiagnosisResult";
import RoboChatbot from "@/components/RoboChatbot";
import { VehicleType, SymptomId } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

type AppStep = "language" | "vehicle" | "symptom" | "diagnosis";

const AppContent = () => {
  const [step, setStep] = useState<AppStep>("language");
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [symptom, setSymptom] = useState<SymptomId | null>(null);
  const { t } = useLanguage();

  const goBack = () => {
    if (step === "diagnosis") setStep("symptom");
    else if (step === "symptom") setStep("vehicle");
    else if (step === "vehicle") setStep("language");
  };

  const handleChatDiagnose = useCallback(
    (s: SymptomId) => {
      if (!vehicleType) setVehicleType("bike");
      setSymptom(s);
      setStep("diagnosis");
    },
    [vehicleType]
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      {step !== "language" && (
        <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center gap-3 px-4 py-3 max-w-lg mx-auto">
            <button
              onClick={goBack}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors active:scale-90"
            >
              <ArrowLeft className="w-5 h-5 text-secondary-foreground" />
            </button>
            <div className="flex-1 text-center">
              <h1 className="text-lg font-bold text-foreground">🔧 {t("appTitle")}</h1>
            </div>
            <div className="w-10" />
          </div>
        </header>
      )}

      {/* Content */}
      <main className="flex-1 flex items-center justify-center py-10">
        <AnimatePresence mode="wait">
          {step === "language" && (
            <motion.div key="lang" exit={{ opacity: 0, x: -50 }}>
              <LanguageSelector onSelect={() => setStep("vehicle")} />
            </motion.div>
          )}
          {step === "vehicle" && (
            <motion.div key="vehicle" exit={{ opacity: 0, x: -50 }}>
              <VehicleSelector
                onSelect={(type) => {
                  setVehicleType(type);
                  setStep("symptom");
                }}
              />
            </motion.div>
          )}
          {step === "symptom" && (
            <motion.div key="symptom" exit={{ opacity: 0, x: -50 }}>
              <VisualSymptomSelector
                onSelect={(s) => {
                  setSymptom(s);
                  setStep("diagnosis");
                }}
              />
            </motion.div>
          )}
          {step === "diagnosis" && vehicleType && symptom && (
            <motion.div key="diagnosis" exit={{ opacity: 0, x: -50 }} className="w-full">
              <DiagnosisResult vehicleType={vehicleType} symptom={symptom} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Chatbot */}
      {step !== "language" && <RoboChatbot onDiagnose={handleChatDiagnose} />}
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default Index;
