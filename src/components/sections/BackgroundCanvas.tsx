"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener("resize", handleResize);

    class Bubble {
      x!: number;
      y!: number;
      radius!: number;
      vx!: number;
      vy!: number;
      alpha!: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 40 + 15;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.25 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -50 || this.x > width + 50 || this.y < -50 || this.y > height + 50) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 230, 253, ${this.alpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(56, 189, 248, ${this.alpha * 1.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    class DataStream {
      x!: number;
      y!: number;
      length!: number;
      speed!: number;
      angle!: number;
      opacity!: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.length = Math.random() * 120 + 60;
        this.speed = Math.random() * 1.5 + 0.5;
        this.angle = Math.floor(Math.random() * 4) * 90 * (Math.PI / 180);
        this.opacity = Math.random() * 0.4 + 0.15;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < -100 || this.x > width + 100 || this.y < -100 || this.y > height + 100) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        const headX = this.x;
        const headY = this.y;
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0)");
        gradient.addColorStop(1, `rgba(2, 132, 199, ${this.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(headX, headY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(2, 132, 199, ${this.opacity + 0.2})`;
        ctx.fill();
      }
    }

    let bubbles: Bubble[] = [];
    let streams: DataStream[] = [];

    const initElements = () => {
      bubbles = Array.from({ length: 25 }, () => new Bubble());
      streams = Array.from({ length: 20 }, () => new DataStream());
    };

    initElements();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b) => {
        b.update();
        b.draw();
      });

      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const dx = bubbles[i].x - bubbles[j].x;
          const dy = bubbles[i].y - bubbles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(bubbles[i].x, bubbles[i].y);
            ctx.lineTo(bubbles[j].x, bubbles[j].y);
            ctx.strokeStyle = `rgba(186, 230, 253, ${0.25 * (1 - dist / 180)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      streams.forEach((s) => {
        s.update();
        s.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
    />
  );
}