import { useState } from "react";

export default function useHomeAnimation() {
  const [animation1] = useState({
    initial: { x: -500, opacity: 0, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }
  });

  const [animation2] = useState({
    initial: { x: 500, opacity: 0, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }
  });

  const [animation3] = useState({
    initial : {x: 300, y : -200, opacity: 0, scale: 0.1 },
    animate : { x :0 , y: 0 , opacity: 1, scale: 1 },
    transition : { duration: 1, delay: 0.6,ease: [0, 0.71, 0.2, 1.01]}
  });

  
  return { animation1, animation2 , animation3 };
}
