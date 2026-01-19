"use client"

import React from "react"

export const CubeLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="perspective-container relative h-32 w-32">
        <style jsx>{`
          .perspective-container {
            perspective: 1000px;
            transform-style: preserve-3d;
          }

          .preserve-3d {
            transform-style: preserve-3d;
            animation: cube-spin 8s infinite linear;
          }

          .cube-side {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(6, 182, 212, 0.3);
            background: rgba(6, 182, 212, 0.1);
            backdrop-filter: blur(4px);
            animation: breathe 3s ease-in-out infinite;
          }

          .cube-side:nth-child(1) {
            transform: rotateY(0deg) translateZ(64px);
            animation-delay: 0s;
          }

          .cube-side:nth-child(2) {
            transform: rotateY(90deg) translateZ(64px);
            animation-delay: 0.5s;
          }

          .cube-side:nth-child(3) {
            transform: rotateY(180deg) translateZ(64px);
            animation-delay: 1s;
          }

          .cube-side:nth-child(4) {
            transform: rotateY(-90deg) translateZ(64px);
            animation-delay: 1.5s;
          }

          .cube-side:nth-child(5) {
            transform: rotateX(90deg) translateZ(64px);
            animation-delay: 2s;
          }

          .cube-side:nth-child(6) {
            transform: rotateX(-90deg) translateZ(64px);
            animation-delay: 2.5s;
          }

          .cube-core {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            background: radial-gradient(circle, rgba(6, 182, 212, 0.8), rgba(6, 182, 212, 0.2));
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
          }

          .cube-shadow {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 10px;
            background: radial-gradient(ellipse, rgba(6, 182, 212, 0.3), transparent);
            border-radius: 50%;
            animation: shadow-breathe 3s ease-in-out infinite;
          }

          @keyframes cube-spin {
            0% {
              transform: rotateX(0deg) rotateY(0deg);
            }
            100% {
              transform: rotateX(360deg) rotateY(360deg);
            }
          }

          @keyframes breathe {
            0%,
            100% {
              transform: translateZ(0);
            }
            50% {
              transform: translateZ(8px);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }

          @keyframes shadow-breathe {
            0%,
            100% {
              opacity: 0.3;
              transform: translateX(-50%) scale(1);
            }
            50% {
              opacity: 0.6;
              transform: translateX(-50%) scale(1.2);
            }
          }
        `}</style>
        <div className="preserve-3d relative h-full w-full">
          <div className="cube-side"></div>
          <div className="cube-side"></div>
          <div className="cube-side"></div>
          <div className="cube-side"></div>
          <div className="cube-side"></div>
          <div className="cube-side"></div>
          <div className="cube-core"></div>
        </div>
        <div className="cube-shadow"></div>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
          Loading
        </h3>
        <p className="text-xs text-gray-400">
          Preparing your experience, please wait…
        </p>
      </div>
    </div>
  )
}
