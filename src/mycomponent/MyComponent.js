import React, { useState, useRef, useEffect } from "react";

const MyComponent = (props) => {
  const [clicks, setClicks] = useState(0);
  const componentDivRef = useRef(null);

  useEffect(() => {
    function clickHandler() {
      setClicks((prevClicks) => prevClicks + 1);
    }

    const componentDiv = componentDivRef.current;
    componentDiv.addEventListener("click", clickHandler);

    return () => {
      componentDiv.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div className="my-component" ref={componentDivRef}>
      <h2>My Component ({clicks} clicks)</h2>
      <h3>{props.headerText}</h3>
      {props.children}
    </div>
  );
}

export default MyComponent