import React from "react";

function SplashScreen() {
  return (
    <div className="splash-screen d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="lines d-flex gap-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "4px",
              height: "60px",
              backgroundColor: "white",
              animation: `lineFadeIn 1s ease ${(i + 1) * 0.2}s forwards`,
              opacity: 0,
            }}
          ></div>
        ))}
      </div>
      <style>{`
        @keyframes lineFadeIn {
          to {
            opacity: 1;
            transform: scaleY(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;
