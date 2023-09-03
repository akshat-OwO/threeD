/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Cube = () => {
    const textRef = useRef();

    useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));

    return (
        <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={'#dc9dcd'}>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                    <color attach="background" args={['#dc9dcd']} />
                    <Text ref={textRef} fontSize={1} color="#555">
                        threeD
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
};

export default Cube;
