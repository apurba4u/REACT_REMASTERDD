import NavBar from "./NavBar";
import { useState } from "react";

const Code1 = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <NavBar theme={theme} />
    </div>
  );
};

export default Code1;
