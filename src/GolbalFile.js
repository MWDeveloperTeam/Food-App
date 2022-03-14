import React, { useState } from "react";
import Button from "./components/Button";
import { Store } from "./Store";

const GolbalFile = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Store.Provider value={{ toggle, setToggle }}>
        <Button />
      </Store.Provider>
    </div>
  );
};

export default GolbalFile;
