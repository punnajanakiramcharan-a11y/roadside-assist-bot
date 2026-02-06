import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, X } from "lucide-react";
import roboImg from "@/assets/robo-mechanic.png";
import { SymptomId } from "@/data/mockData";

interface Props {
  onDiagnose?: (symptom: SymptomId) => void;
}

type ChatStep = "greeting" | "askStart" | "askSound" | "askSmoke" | "result";

const symptomMap: Record<string, SymptomId> = {
  askStart_yes: "notStarting",
  askSound_yes: "strangeNoise",
  askSmoke_yes: "smokecoming",
  fallback: "lowPower",
};

const RoboChatbot = ({ onDiagnose }: Props) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const [step, setStep] = useState<ChatStep>("greeting");
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [...prev, { text, isBot }]);
  };

  const handleOpen = () => {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([{ text: t("chatGreeting"), isBot: true }]);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: t("chatAskStart"), isBot: true }]);
        setStep("askStart");
      }, 800);
    }
  };

  const handleAnswer = (answer: "yes" | "no") => {
    addMessage(answer === "yes" ? t("chatYes") : t("chatNo"), false);

    if (step === "askStart" && answer === "yes") {
      setTimeout(() => {
        addMessage(t("chatRedirect"), true);
        setStep("result");
        onDiagnose?.("notStarting");
      }, 500);
    } else if (step === "askStart" && answer === "no") {
      setTimeout(() => {
        addMessage(t("chatAskSound"), true);
        setStep("askSound");
      }, 500);
    } else if (step === "askSound" && answer === "yes") {
      setTimeout(() => {
        addMessage(t("chatRedirect"), true);
        setStep("result");
        onDiagnose?.("strangeNoise");
      }, 500);
    } else if (step === "askSound" && answer === "no") {
      setTimeout(() => {
        addMessage(t("chatAskSmoke"), true);
        setStep("askSmoke");
      }, 500);
    } else if (step === "askSmoke" && answer === "yes") {
      setTimeout(() => {
        addMessage(t("chatRedirect"), true);
        setStep("result");
        onDiagnose?.("smokecoming");
      }, 500);
    } else {
      setTimeout(() => {
        addMessage(t("chatHelp"), true);
        setStep("result");
        onDiagnose?.("lowPower");
      }, 500);
    }
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center animate-pulse-glow ${
          open ? "hidden" : ""
        }`}
      >
        <img src={roboImg} alt="Assistant" className="w-12 h-12 rounded-full object-cover" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-80 max-h-[28rem] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-t-2xl">
              <img src={roboImg} alt="Bot" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-semibold text-sm flex-1">Mech Buddy 🤖</span>
              <button onClick={() => setOpen(false)} className="hover:opacity-70">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div className={msg.isBot ? "chat-bubble-bot" : "chat-bubble-user"}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Reply Buttons */}
            {step !== "greeting" && step !== "result" && (
              <div className="px-4 pb-4 flex gap-2">
                <button
                  onClick={() => handleAnswer("yes")}
                  className="flex-1 py-3 bg-success/15 text-success font-semibold rounded-xl text-sm active:scale-95 transition-transform"
                >
                  ✅ {t("chatYes")}
                </button>
                <button
                  onClick={() => handleAnswer("no")}
                  className="flex-1 py-3 bg-destructive/15 text-destructive font-semibold rounded-xl text-sm active:scale-95 transition-transform"
                >
                  ❌ {t("chatNo")}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RoboChatbot;
