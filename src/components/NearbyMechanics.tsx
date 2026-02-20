import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockMechanics, MockMechanic } from "@/data/mockData";
import { Phone, Star, MapPin, Navigation, CheckCircle, AlertCircle, Send, UserCheck, RefreshCw } from "lucide-react";

interface Props {
  damagedPartName?: string;
  vehicleModelName?: string;
}

const NearbyMechanics = ({ damagedPartName, vehicleModelName }: Props) => {
  const { t } = useLanguage();
  const [gpsLocation, setGpsLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [gpsLoading, setGpsLoading] = useState(true);
  const [selectedMechanic, setSelectedMechanic] = useState<MockMechanic | null>(null);
  const [dispatched, setDispatched] = useState(false);
  const [dispatchingFailed, setDispatchingFailed] = useState(false);

  // Simulate GPS tracking
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulated GPS coordinates (Hyderabad area)
      setGpsLocation({ lat: 17.385044, lng: 78.486671 });
      setGpsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRequestMechanic = (mechanic: MockMechanic) => {
    if (!mechanic.available) {
      setDispatchingFailed(true);
      // Auto-select next available mechanic
      setTimeout(() => {
        const nextAvailable = mockMechanics.find(m => m.available && m.name !== mechanic.name);
        if (nextAvailable) {
          setDispatchingFailed(false);
          setSelectedMechanic(nextAvailable);
          setDispatched(true);
        }
      }, 2000);
      return;
    }
    setSelectedMechanic(mechanic);
    setDispatched(true);
  };

  const handleSelectAnother = () => {
    setSelectedMechanic(null);
    setDispatched(false);
    setDispatchingFailed(false);
  };

  const estimateETA = (distanceKm: number) => Math.round(distanceKm * 5 + 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-4"
    >
      <h3 className="text-xl font-bold text-foreground">{t("nearbyMechanics")}</h3>

      {/* GPS Tracker Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="step-card bg-accent/10 border-accent/30"
      >
        <div className="flex items-center gap-2 mb-2">
          <Navigation className="w-5 h-5 text-accent" />
          <h4 className="font-semibold text-foreground text-sm">{t("gpsTracking")}</h4>
        </div>
        {gpsLoading ? (
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
              <RefreshCw className="w-4 h-4" />
            </motion.div>
            Detecting location...
          </div>
        ) : gpsLocation ? (
          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted-foreground">{t("gpsDesc")}</p>
            <div className="flex gap-4 mt-1">
              <span className="text-xs font-mono bg-secondary px-2 py-1 rounded text-secondary-foreground">
                {t("latitude")}: {gpsLocation.lat.toFixed(4)}
              </span>
              <span className="text-xs font-mono bg-secondary px-2 py-1 rounded text-secondary-foreground">
                {t("longitude")}: {gpsLocation.lng.toFixed(4)}
              </span>
            </div>
          </div>
        ) : null}
      </motion.div>

      {/* Dispatched Success Card */}
      <AnimatePresence>
        {dispatched && selectedMechanic && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="step-card bg-success/10 border-success/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-success" />
              <h4 className="font-bold text-success text-sm">{t("mechanicDispatched")}</h4>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-foreground" />
              <span className="text-sm font-semibold text-foreground">{selectedMechanic.name}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              {selectedMechanic.name} {t("mechanicOnWay")}
            </p>

            {/* Message to Mechanic */}
            <div className="bg-card rounded-lg p-3 border border-border space-y-2">
              <div className="flex items-center gap-2">
                <Send className="w-3 h-3 text-primary" />
                <span className="text-xs font-semibold text-foreground">{t("mechanicMessage")}</span>
              </div>
              {vehicleModelName && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{t("vehicleModel")}:</span>
                  <span className="text-xs font-semibold text-foreground">{vehicleModelName}</span>
                </div>
              )}
              {damagedPartName && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{t("damagedPartInfo")}:</span>
                  <span className="text-xs font-semibold text-destructive">{damagedPartName}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{t("toolsRequired")}:</span>
                <span className="text-xs font-semibold text-foreground">✅</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{t("eta")}:</span>
                <span className="text-xs font-bold text-primary">
                  ~{estimateETA(selectedMechanic.distanceKm)} {t("minutes")}
                </span>
              </div>
            </div>

            <button
              onClick={handleSelectAnother}
              className="mt-3 w-full py-2 bg-secondary text-secondary-foreground rounded-lg text-xs font-semibold active:scale-95 transition-transform"
            >
              🔄 {t("selectAnotherMechanic")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unavailable Warning */}
      <AnimatePresence>
        {dispatchingFailed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="step-card bg-warning/10 border-warning/30"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-warning" />
              <p className="text-xs text-foreground">{t("mechanicUnavailable")}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mechanics List */}
      {!dispatched && mockMechanics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className="step-card flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-foreground text-sm truncate">{m.name}</h4>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                  m.available
                    ? "bg-success/15 text-success"
                    : "bg-destructive/15 text-destructive"
                }`}>
                  {m.available ? t("available") : t("unavailable")}
                </span>
              </div>
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
          </div>

          {/* Request Rescue Button */}
          <button
            onClick={() => handleRequestMechanic(m)}
            className={`w-full py-2.5 rounded-xl text-xs font-bold active:scale-[0.98] transition-all ${
              m.available
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {t("requestMechanic")}
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NearbyMechanics;
