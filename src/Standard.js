import { motion } from "framer-motion";
import Ans from "./Ans";

export default function Standard({ question, answers, setPage }) {
  return (
    <div>
      <div className="question">Question: {question}</div>
      <div>
        {answers.map((ans, index) => (
          <motion.div
            whileTap={{ scale: 1.5 }}
            onClick={() => {
              setPage(ans.goTo);
            }}
            key={index}
          >
            <Ans truth={ans.tr}>
              <div className="keynum">{index}</div>
              {ans.answer}
            </Ans>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
