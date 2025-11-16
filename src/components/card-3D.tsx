import React, { useState } from 'react';
import Image from 'next/image';

const Card3D = ({ image }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState('');
  const [glowStyle, setGlowStyle] = useState('');

  const handleMouseEnter = (e: any) => {
    setIsHovered(true);
  };

  const handleMouseMove = (e: any) => {
    if (!isHovered) return;

    const bounds = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    setTransformStyle(`
        scale3d(1.02, 1.02, 1.02)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `);

    setGlowStyle(`
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('');
    setGlowStyle('');
  };

  return (
    <div
      className={`card w-full md:w-1/2 h-full relative overflow-hidden ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transitionDuration: isHovered ? '300ms' : '150ms',
        boxShadow: isHovered
          ? '0 5px 20px 5px #00000044'
          : '0 1px 5px #00000099',
      }}
    >
      <Image
        src={image}
        alt="Project preview"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
      />
      <div
        className="glow absolute inset-0 pointer-events-none"
        style={{ backgroundImage: glowStyle }}
      />
    </div>
  );
};

export default Card3D;
