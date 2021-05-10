import { motion } from "framer-motion";
import Standard from "./Standard";

export default function Card({ setPage, data, position }) {
  return (
    <motion.div initial={{ y: 500 }} animate={{ y: position }}>
      {data.cardType === "standard" && (
        <Standard
          question={data.question}
          answers={data.answers}
          setPage={setPage}
        />
      )}
    </motion.div>
  );
}
