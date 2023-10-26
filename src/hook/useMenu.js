import { useState } from "react";



export default function useMenu() {

  const [Menu, setMenu] = useState(false);

  const changeMenu = () => {
    setMenu(!Menu);
  };

  return [ Menu ,changeMenu];
}
