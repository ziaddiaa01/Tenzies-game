import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  };

  // Dynamically generate class names based on the value prop
  const classNames = `dice dice-${props.value}`;

  // Generate the dots for dice with value 4, 5, or 6
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < props.value; i++) {
      dots.push(<span key={i} className="dot"></span>);
    }
    return dots;
  };

  return (
    <div className="dice-container">
      <div className={`${classNames}`} style={styles} onClick={props.holdDice}>
        {props.value <= 3 ? (
          // Dice with 1, 2, or 3 dots
          [...Array(props.value)].map((_, index) => (
            <span key={index} className="dot"></span>
          ))
        ) : (
          // Dice with 4, 5, or 6 dots
          <>
            {props.value === 4 ? (
                <>
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    </div>
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                </>
            ) : props.value === 5 ? (
              <>
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="column">
                    <div className="dot"></div>  
                </div>
                <div className="column">
                     <div className="dot"></div>
                     <div className="dot"></div>
                </div>
              </>
            ) : props.value === 6 ? (
                <>
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
