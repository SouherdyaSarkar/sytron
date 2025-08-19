import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed(""); // reset when text changes

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
};

export default Typewriter;