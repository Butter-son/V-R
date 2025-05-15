import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import image1 from "./assets/giphy.webp";
import image2 from "./assets/giphy2.webp";

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showSurprise2, setShowSurprise2] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];
    function createHeart() {
      hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        size: Math.random() * 30 + 20,
        speed: Math.random() * 1.5 + 1,
        xSpeed: Math.random() * 2 - 1,
      });
    }

    function drawHeartShape(ctx) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
      ctx.bezierCurveTo(-5, 3, 0, 5, 0, 8);
      ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
      ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
      ctx.fillStyle = 'pink';
      ctx.fill();
    }

    function drawHearts() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((heart, index) => {
        ctx.save();
        ctx.translate(heart.x, heart.y);
        ctx.scale(heart.size / 30, heart.size / 30);
        drawHeartShape(ctx);
        ctx.restore();
        heart.y -= heart.speed;
        heart.x += heart.xSpeed;
        if (heart.y < -30 || heart.x < -30 || heart.x > canvas.width + 30) {
          hearts.splice(index, 1);
        }
      });
    }

    function animate() {
      drawHearts();
      requestAnimationFrame(animate);
    }

    setInterval(createHeart, 200);
    animate();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date('May 21, 2033 00:00:00').getTime();
      const now = new Date().getTime();
      const gap = targetDate - now;
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const d = Math.floor(gap / day);
      const h = Math.floor((gap % day) / hour);
      const m = Math.floor((gap % hour) / minute);
      const s = Math.floor((gap % minute) / second);
      setCountdown({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSurprise = () => {
    setShowSurprise(true);
    launchConfetti();
  };

  const handleSurprise2 = () => {
    setShowSurprise2(true);
    launchConfetti();
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ffb6c1', '#ffc0cb', '#ff1493']
    });
  };

  return (
    <div className="App">
      <canvas id="heartCanvas"></canvas>
      <header>
        <h1 className="heartbeat">Happy Anniversary, My Dear !💖</h1>
        <p>Another year, Same love, Deeper roots</p>
      </header>

      <section className="hug-section">
        <h2>Two hearts one Love 💞</h2>
        <img src={image1}alt="Cartoon Hug GIF" className="hug-gif" />
      </section>

      <section className="surprise-section">
        <h2>Click for Surprise Message 💌</h2>
        <button onClick={handleSurprise} className="button-ss">Reveal Surprise🎉</button>
        {showSurprise && (
          <div id="surprise-text">
            <p className="fade-in">You are my today and all of my tomorrows </p>
            <p className="fade-in2">I still get butterflies even though I’ve seen you a Thousand times.</p>
            <p className="fade-in">Love you so much de Chella Pondatti 💘</p>
          </div>
        )}
      </section>

      <section className="love-slider">
        <h2>Your love for me🤌🏻</h2>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">You are Waiting for my success 💘</div>
            <div className="slide">You support my dreams ✨</div>
            <div className="slide">You love me unconditionally 💖</div>
            <div className="slide">You listen to me patiently 🎧</div>
            <div className="slide">You think my problem as your problem 🫂</div>
            <div className="slide">You are making me Happy 🥰</div>
            <div className="slide">You are my forever and always ♾️</div>
            <div className="slide">You made me feel special, just by being you 💞</div>
          </div>
        </div>
      </section>

      <section className="surprise-section2">
        <h2>🎁Something for you</h2>
        <button onClick={handleSurprise2} className="button-ss">Click here</button>
        {showSurprise2 && (
          <div id="surprise-text2">
            <p className="fade-in">Forever isn't Long enough with you. 💑</p>
            <p className="fade-in2">Let's face everything by holding our hands🧑🏻‍🤝‍👩🏻</p>
            <img src={image2 }alt="Cartoon Hug GIF" className="hug-gif1" />
            <p className='fade-in'> 🥂Cheers! to two beautiful years of love and togetherness 🥰</p>
          </div>
        )}
      </section>

      <section className="countdown-section">
        <h2>⏳ Countdown to Our Special Day 💖</h2>
        <div className="countdown">
          <div className="time">
            <span>{countdown.days}</span>
            <small>Days</small>
          </div>
          <div className="time">
            <span>{countdown.hours}</span>
            <small>Hours</small>
          </div>
          <div className="time">
            <span>{countdown.minutes}</span>
            <small>Minutes</small>
          </div>
          <div className="time">
            <span>{countdown.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>
      </section>

      <footer>
      <p className='fade-in2'>&Once again, Love you de Alagii 😍</p>
        <p>~ Rajesh ❤️</p>
      </footer>
    </div>
  );
}

export default App;
