import { useState } from "react";


export default function useLenguaje() {
  const [Español, setEspañol] = useState(true)

  const changeIdioma = () => {
    setEspañol(!Español)
  }

  return [Español, changeIdioma];
}
