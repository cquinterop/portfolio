"use client";

// import ChatComponent from '../components/ChatComponent';
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "../components/Experience";
import { Leva } from "leva";
import { UI } from "../components/UI";

function App() {
  return (
    <>
      <Loader />
      <Leva />
      <UI />
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
