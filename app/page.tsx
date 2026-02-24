'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function SorryPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isForgiven, setIsForgiven] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; emoji: string; duration: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const particleEmojis = ['💫', '✨', '🌸', '💕', '💕', '✨', '🌸'];
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
      duration: 8 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  const handleForgive = () => {
    setShowConfetti(true);
    setIsForgiven(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-white"></div>
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Falling particles */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-3xl animate-fall"
            style={{
              left: `${particle.x}%`,
              animation: `fall ${particle.duration}s infinite linear`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {particle.emoji}
          </div>
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 800}
          height={typeof window !== 'undefined' ? window.innerHeight : 600}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl space-y-8">
          {/* Glowing title */}
          <div className="text-center space-y-4">
            <h1
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 animate-pulse"
              style={{
                textShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
                letterSpacing: '-0.02em',
              }}
            >
              I'm Sorry, Shravani 💔
            </h1>
            <p className="text-lg text-purple-600/70 font-medium">Your Besti 💜</p>
          </div>

          {/* Avatar and message section */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center">
            {/* Avatar with photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center border-4 border-white/50 shadow-2xl overflow-hidden"
                  style={{
                    boxShadow: '0 0 30px rgba(236, 72, 153, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <img 
                 src="/sharvani.png"
                    alt="Shravani"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-pink-200/50 whitespace-nowrap">
                  <span className="font-semibold text-purple-600">Shravani 🌸</span>
                </div>
              </div>
            </div>

            {/* Apology message */}
            <div className="flex-1 space-y-4">
              <div
                className="backdrop-blur-md bg-white/40 border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{
                  boxShadow: '0 0 40px rgba(236, 72, 153, 0.15), inset 0 0 30px rgba(255, 255, 255, 0.3)',
                }}
              >
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Hey besti, I know I messed up and I really didn't mean to hurt you. You mean the world to me and it breaks my heart knowing that I let you down. Your friendship is one of the most precious things in my life, and I'm truly sorry for what I did.
                </p>
              </div>
              <div
                className="backdrop-blur-md bg-white/40 border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{
                  boxShadow: '0 0 40px rgba(168, 85, 247, 0.15), inset 0 0 30px rgba(255, 255, 255, 0.3)',
                }}
              >
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  I promise to be better and to show you how much you mean to me through my actions. Thank you for always being there for me – you're the best besti ever, and I'm so grateful to have you in my life. I hope you can find it in your heart to forgive me. 💜
                </p>
              </div>
            </div>
          </div>

          {/* Handwritten sorry note card */}
          <div
            className="max-w-xl mx-auto backdrop-blur-xl bg-gradient-to-br from-white/60 to-pink-50/40 border-2 border-white/60 rounded-3xl p-8 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300"
            style={{
              boxShadow: '0 0 60px rgba(236, 72, 153, 0.2), inset 0 0 40px rgba(255, 255, 255, 0.4)',
            }}
          >
            <div
              style={{
                fontFamily: 'Caveat, cursive',
              }}
              className="text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-bold"
            >
              I'm truly sorry...
            </div>
            <div className="mt-4 text-center">
              <p
                style={{
                  fontFamily: 'Caveat, cursive',
                }}
                className="text-2xl md:text-3xl text-purple-500/80"
              >
                Can we go back to being besties? 🥺
              </p>
            </div>
          </div>

          {/* Forgive button */}
          <div className="flex justify-center">
            <button
              onClick={handleForgive}
              disabled={isForgiven}
              className={`relative px-8 md:px-12 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-500 transform hover:scale-110 active:scale-95 ${
                isForgiven
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-2xl shadow-xl'
              }`}
            >
              {isForgiven ? '✨ Forgiven! ✨' : 'Forgive Me? 🥺'}
            </button>
          </div>

          {/* Success message */}
          {isForgiven && (
            <div
              className="max-w-xl mx-auto backdrop-blur-xl bg-gradient-to-r from-purple-100/60 to-pink-100/60 border-2 border-white/60 rounded-3xl p-8 text-center animate-bounce"
              style={{
                boxShadow: '0 0 60px rgba(168, 85, 247, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.4)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Caveat, cursive',
                }}
                className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
              >
                Yayy!! You're the best besti ever! 💖
              </p>
              <div className="mt-4 text-2xl">✨ 💕 🌸 💫 ✨</div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fall {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
