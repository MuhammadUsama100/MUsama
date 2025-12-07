import { useEffect, useState } from "react";

interface Block {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const AnimatedBlocks = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    // Generate random blocks
    const generatedBlocks: Block[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
    setBlocks(generatedBlocks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute animate-float"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            animation: `float ${block.duration}s ease-in-out infinite`,
            animationDelay: `${block.delay}s`,
          }}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/20 backdrop-blur-sm rounded-lg border border-accent/20"
            style={{
              transform: `rotate(${block.rotation}deg)`,
              animation: `rotate ${block.duration * 1.5}s linear infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedBlocks;
