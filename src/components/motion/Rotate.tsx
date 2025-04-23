// src/components/motion/Rotate.tsx
import * as motion from "motion/react-client"
import Image from "next/image";
import LogoKuraT from "../../../public/logo-kura-transparent.png";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  paddingBottom: 1,
  justifyContent: "center",
  width: 200,
  height: 200,
  backgroundColor: "#f29f1e",
  borderRadius: 5,
  boxShadow: "0 0 5px #f29f1e, 0 0 30px #f29f1e",
};

export default function Rotate() {
  return (
    <motion.div
      style={boxStyle}
      transition={{ duration: 1 }}
      initial={{ opacity: 0, x: -100, rotate: 360 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Image
        src={LogoKuraT}
        alt="Logo Kura"
        width={150}
        height={150}
      />
    </motion.div>
  );
}