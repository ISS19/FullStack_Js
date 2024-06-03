'use client'
import React from "react";
import {Canvas} from "@react-three/fiber";

export default function ModelViewer(){
    return(
        <div>
            <Canvas>
                <Cube />
            </Canvas>
        </div>
    )
}

function Cube(){
    return(
        <mesh>
            <boxGeometry args={[1,1,1]}/>
        </mesh>
    )
}