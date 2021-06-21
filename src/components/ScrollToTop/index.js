import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { useWindowScroll } from "react-use";

export default function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 500) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <BiArrowToTop
        size={24}
        style={{
          marginTop: "7px",
          animation: "scrollTop 0.5s alternate ease infinite",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
