"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const PASHTO_CHARS = ["پ", "ښ", "چ", "ږ", "ځ", "ڼ", "غ", "څ", "ژ", "د", "ت", "ک"];
const CODE_WORDS = [
    "const", "function", "async", "await", "SELECT *", "MongoDB",
    "React.js", "Next.js", "TypeScript", "Node.js", "Express",
    "Docker", "AWS", "Oracle", "GraphQL", "schema", "query"
];

interface FallingColumnProps {
    position: [number, number, number];
    speed: number;
    type: "pashto" | "code";
    color: string;
}

function FallingColumn({ position, speed, type, color }: FallingColumnProps) {
    const groupRef = useRef<THREE.Group>(null);

    const items = useMemo(() => {
        const list = type === "pashto" ? PASHTO_CHARS : CODE_WORDS;
        return Array.from({ length: 8 }, (_, i) => ({
            text: list[Math.floor(Math.random() * list.length)],
            yOffset: i * 0.5,
            opacity: (8 - i) / 8,
        }));
    }, [type]);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.position.y -= delta * speed;

            if (groupRef.current.position.y < -8) {
                groupRef.current.position.y = 8;
            }
        }
    });

    return (
        <group ref={groupRef} position={position}>
            {items.map((item, index) => (
                <Text
                    key={index}
                    position={[0, item.yOffset, 0]}
                    fontSize={type === "pashto" ? 0.36 : 0.22}
                    color={color}
                    font={type === "pashto" ? "/_PDMS_Kalam.ttf" : undefined}
                    fillOpacity={item.opacity * 0.95}
                    anchorX="center"
                    anchorY="middle"
                >
                    {item.text}
                </Text>
            ))}
        </group>
    );
}

function FallingMatrixScene() {
    const sceneRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (sceneRef.current) {
            const step = Math.min(0.05, delta * 3);
            sceneRef.current.rotation.x = THREE.MathUtils.lerp(
                sceneRef.current.rotation.x,
                (state.pointer.y * Math.PI) / 24,
                step
            );
            sceneRef.current.rotation.y = THREE.MathUtils.lerp(
                sceneRef.current.rotation.y,
                (state.pointer.x * Math.PI) / 24,
                step
            );
        }
    });

    const columns = useMemo(() => {
        const cols = [];
        const positionsX = [-7, -5.2, -3.5, -1.8, 0, 1.8, 3.5, 5.2, 7];

        for (let i = 0; i < positionsX.length; i++) {
            const x = positionsX[i];
            const z = (Math.random() - 0.5) * 3 - 1;
            const speed = 1.3 + Math.random() * 1.5;
            const type: "pashto" | "code" = i % 2 === 0 ? "pashto" : "code";
            const color = type === "pashto" ? "#eab308" : "#0284c7";

            cols.push({
                id: i,
                position: [x, (Math.random() - 0.5) * 12, z] as [number, number, number],
                speed,
                type,
                color,
            });
        }
        return cols;
    }, []);

    return (
        <group ref={sceneRef}>
            {columns.map((col) => (
                <FallingColumn
                    key={col.id}
                    position={col.position}
                    speed={col.speed}
                    type={col.type}
                    color={col.color}
                />
            ))}
        </group>
    );
}

export default function Background3D() {
    useEffect(() => {
        // Suppress non-actionable internal Three.js deprecation logs in development
        const originalWarn = console.warn;
        console.warn = (...args: any[]) => {
            if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) {
                return;
            }
            originalWarn(...args);
        };
        return () => {
            console.warn = originalWarn;
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-screen h-screen">
            <Canvas
                camera={{ position: [0, 0, 9], fov: 50 }}
                gl={{ antialias: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={1.5} />
                <FallingMatrixScene />
            </Canvas>
        </div>
    );
}