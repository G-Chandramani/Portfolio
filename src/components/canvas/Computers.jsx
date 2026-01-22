import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Preload the model for better performance
useGLTF.preload("./desktop_pc/scene.gltf");

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.5} />
      
      {/* Hemisphere light with brighter intensity */}
      <hemisphereLight intensity={0.75} groundColor='#ffffff' />
      
      {/* Main spotlight from top-left */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Additional spotlight from right */}
      <spotLight
        position={[20, 30, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
      />
      
      {/* Point lights for better illumination */}
      <pointLight position={[10, 20, 10]} intensity={1.2} />
      <pointLight position={[-10, 20, -10]} intensity={0.8} />
      
      {/* Directional light for overall brightness */}
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : isTablet ? 0.72 : 0.75}
        position={isMobile ? [0, -3, -2.2] : isTablet ? [0, -3.2, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Detect device capabilities
    const detectDevice = () => {
      const width = window.innerWidth;
      const isMobileDevice = width <= 500;
      const isTabletDevice = width > 500 && width <= 1024;
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      
      // Detect low-end devices based on hardware concurrency and memory
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = navigator.deviceMemory || 4;
      const isLowEnd = hardwareConcurrency <= 2 || deviceMemory <= 2;
      
      setIsLowEndDevice(isLowEnd);
    };

    // Initial detection
    detectDevice();

    // Media queries for responsive breakpoints
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 501px) and (max-width: 1024px)");

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
      if (event.matches) setIsTablet(false);
    };

    const handleTabletChange = (event) => {
      setIsTablet(event.matches);
      if (event.matches) setIsMobile(false);
    };

    // Add listeners
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", handleMobileChange);
      tabletQuery.addEventListener("change", handleTabletChange);
    } else {
      // Fallback for older browsers
      mobileQuery.addListener(handleMobileChange);
      tabletQuery.addListener(handleTabletChange);
    }

    // Handle window resize
    const handleResize = () => detectDevice();
    window.addEventListener("resize", handleResize);

    return () => {
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener("change", handleMobileChange);
        tabletQuery.removeEventListener("change", handleTabletChange);
      } else {
        mobileQuery.removeListener(handleMobileChange);
        tabletQuery.removeListener(handleTabletChange);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Optimize DPR based on device capabilities
  const getDPR = () => {
    if (isLowEndDevice || isMobile) return [1, 1.5];
    if (isTablet) return [1, 1.75];
    return [1, 2];
  };

  return (
    <Canvas
      frameloop='demand'
      shadows={!isLowEndDevice}
      dpr={getDPR()}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isLowEndDevice,
        powerPreference: isLowEndDevice ? "low-power" : "high-performance"
      }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
