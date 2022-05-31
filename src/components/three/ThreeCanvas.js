import React, { useRef, useState, useEffect, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Plane } from "@react-three/drei";
import { useGroundTexture } from "../../hooks/useGroundTexture";
//import { orbitControlsArgs } from "../Constants/controls";
import { useLocation, useNavigate } from "react-router-dom";
import { EatFlower } from "./model/Flower";
import * as TWEEN from "@tweenjs/tween.js";
import uvGroundTexture from "../../assets/textures/uv_grid_opengl.jpg";

//import { tweenLookAt } from "../Lib/tweenLookAt";
//import { objectSetting } from "../Constants/objectSettings";
//import { getClosestObj } from "../Lib/utils";
const orbitControlsArgs = {
  minDistance: 5,
  maxDistance: 15,
  maxPolarAngle: Math.PI / 2 - 0.05,
  enableDamping: true,
  enablePan: false,
  enableRotate: true,
  enableZoom: false,
  reverseOrbit: false,
};

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => {
        click(!clicked);
        window.appNavigate("/about", { replace: true });
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Ground() {
  const [groundTexture] = useGroundTexture(uvGroundTexture);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshPhongMaterial
        color={"#999999"}
        specular={"#101010"}
        map={groundTexture}
      />
    </mesh>
  );
}

function Scene({ location }) {
  const { set, get } = useThree();
  const cameraRef = useRef();
  const characterRef = useRef();
  const controlsRef = useRef();

  const path = useMemo(() => location.pathname, [location]);
  /*useEffect(() => {
    const isFromTopMenu = !!location.state?.navFromTopMenu;
    set({ navFromTopMenu: isFromTopMenu, currPath: path });
  }, [path]);*/

  useFrame((state) => {
    /*if (!!characterRef.current) {
      TWEEN.update();
      const characterPosition = characterRef.current.position;
      const closestObj = getClosestObj(characterPosition);

      if (state.navFromTopMenu) {
        cameraRef.current.lookAt(characterPosition);
        controlsRef.current.target.copy(characterPosition);
      } else {
        if (state.currPath === "/") {
          cameraRef.current.lookAt(characterPosition);
          controlsRef.current.target.copy(characterPosition);
          if (closestObj) {
            window.appNavigate(closestObj.path, {
              replace: true,
              state: { navFromTopMenu: false },
            });
            tweenLookAt(
              cameraRef.current,
              closestObj.props.position,
              controlsRef.current,
              closestObj.offset
            );
          }
        } else {
          if (!closestObj) {
            window.appNavigate("/", {
              replace: true,
              state: { navFromTopMenu: false },
            });
            tweenLookAt(
              cameraRef.current,
              [characterPosition.x, characterPosition.y, characterPosition.z],
              controlsRef.current,
              {
                cameraToObjectOffset: [10, 10, 10],
                lookAtOffset: [0, 0, 0],
                duration: 2000,
              }
            );
          }
        }
      }
    }*/
  });

  return (
    <Suspense fallback={null}>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={30}
        position={[8, 8, 12]}
      />
      <OrbitControls ref={controlsRef} {...orbitControlsArgs} />
      <color attach="background" args={["#050505"]} />
      {/* <ambientLight intensity={0.5} /> */}
      <fog attach="fog" args={["#050505", 10, 40]} />
      <hemisphereLight skyColor="#443333" groundColor="#111122" />
      <spotLight position={[0, 10, 0]} angle={Math.PI / 6} penumbra={0.5} />
      <pointLight position={[0, 10, 0]} />

      {/* <axisHelper /> */}

      {/* <Box onClick={() => navigate("../about", { replace: true })} /> */}
      <Ground />
      <EatFlower
        //ref={eatFlowerRef}
        controls={controlsRef}
        //boxProps={objectSetting.EatFlower.props}
      />
    </Suspense>
  );
}

function ThreeCanvas() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    window.appNavigate = navigate;
    //console.log("navigate:", navigate);
  }, [navigate]);

  return (
    <Canvas
      flat
      shadows
      dpr={[1, 2]}
      //camera={{ fov: 30, position: [8, 8, 12] }}
    >
      <Scene location={location} />
    </Canvas>
  );
}

export default ThreeCanvas;
