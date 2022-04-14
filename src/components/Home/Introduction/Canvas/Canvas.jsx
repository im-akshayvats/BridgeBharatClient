import React, { useRef, useEffect } from 'react';

import './style.scss';

export default function Canvas(props) {
  const canvasRef = useRef(null);

  class Dot {
    constructor(ctx, x, y, radius, speed, color) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speed = speed;
      this.color = color;
      this.variableRadius = this.radius;
    }

    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc (this.x, this.y, this.variableRadius, 0, Math.PI * 2, false);
      this.ctx.fill();
    }

    update() {
      if (this.variableRadius >= this.radius || this.variableRadius <= 1 ) {
        this.speed = -this.speed;
      }
      this.variableRadius += this.speed;
      this.draw();
    }
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.height = 982;
    canvas.width = window.innerWidth;

    let animationFrameId;
    let margin = 50;

    const dotsArray = [];
    const colors = ['#E08B19', '#CE4C16', '#193166'];
    for (let index = 0; index < 20; index++) {
      const x = margin + Math.random() * (canvas.width - (2 * margin));
      const y = margin + Math.random() * (canvas.height - (2 * margin));
      const radius = 10 + Math.random() * 10;
      const speed = (Math.random() / 4) + 0.1;
      const randomNum = Math.round(Math.random() * 2);
      dotsArray.push(new Dot(context, x, y, radius, speed, colors[randomNum]));
      
    }

    const animate = () => {
      animationFrameId = window.requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);
      dotsArray.forEach(dot => {
        dot.update();
      })
    }

    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  });
  
  return <canvas ref={canvasRef} {...props} id='introductionCanvas'/>
}
