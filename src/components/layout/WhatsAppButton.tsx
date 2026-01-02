import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "971565330500";
const WHATSAPP_MESSAGE = "Hello Purple Royal Tourism, I would like to inquire about your visa services.";

export function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20BD5A] transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
      >
        <Phone className="w-5 h-5" />
      </motion.div>
      <span className="font-semibold text-sm hidden sm:block">Chat with Us</span>
    </motion.a>
  );
}
