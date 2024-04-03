import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (typeof window === undefined) {
      return;
    }
    setMounted(true);
  }, []);
  return mounted ? (
    ReactDOM.createPortal(<>{children}</>, document.getElementById("portalDiv"))
  ) : (
    <></>
  );
};
