"use client";

import BlueprintGradientMesh from "@/components/ui/blueprint-gradient-mesh";

export default function BlueprintDemo() {
  return (
    <div className="relative min-h-screen">
      {/* Blueprint Gradient Mesh Background */}
      <BlueprintGradientMesh />

      {/* Content overlay */}
      <div className="relative z-50 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Blueprint Gradient Mesh
          </h1>
          <p className="mb-8 text-lg md:text-xl opacity-90">
            An interactive canvas component with moving grid lines,
            <br />
            film grain texture, and hover effects.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Moving Grid</h3>
              <p className="text-white/70">Animated blueprint grid with diagonal movement</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Interactive Hover</h3>
              <p className="text-white/70">Hover over cells to see subtle glow effects</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Film Grain</h3>
              <p className="text-white/70">Subtle noise texture for authentic feel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
