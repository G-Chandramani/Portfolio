import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Preload the model for better performance
useGLTF.preload("./planet/scene.gltf");

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  // Optimize for performance
  const isMobile = window.innerWidth <= 768;
  const isLowEndDevice = (navigator.hardwareConcurrency || 4) <= 2 || (navigator.deviceMemory || 4) <= 2;
  const dpr = isLowEndDevice || isMobile ? [1, 1.5] : [1, 2];

  return (
    <Canvas
      shadows={!isLowEndDevice}
      frameloop='demand'
      dpr={dpr}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isLowEndDevice,
        powerPreference: isLowEndDevice ? "low-power" : "default"
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
