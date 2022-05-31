import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export function useGroundTexture(sUrl, settings = {}) {
    const { repeat = [2, 2], anisotropy = 1, offset = [0.5, 0.5] } = settings;

    const groundTexture = useTexture(sUrl);

    React.useLayoutEffect(() => {
        if (!groundTexture) return;

        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat = new THREE.Vector2(repeat[0], repeat[1]);
        groundTexture.offset = new THREE.Vector2(offset[0], offset[1]);
        groundTexture.anisotropy = anisotropy;
    }, [groundTexture, anisotropy, repeat, offset]);

    return [groundTexture];
}
