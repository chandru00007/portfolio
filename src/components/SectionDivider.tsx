import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "dots" | "line" | "gradient";
}

const SectionDivider = ({ variant = "dots" }: SectionDividerProps) => {
  if (variant === "line") {
    return (
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
      />
    );
  }

  if (variant === "gradient") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      />
    );
  }

  // Default: dots
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center gap-2 py-8"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
          className="w-1.5 h-1.5 rounded-full bg-primary/40"
        />
      ))}
    </motion.div>
  );
};

export default SectionDivider;
