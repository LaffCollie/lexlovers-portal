'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo area with glow effect */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradient mb-4 tracking-tight">
            LexLovers
          </h1>
          
          {/* Animated tagline */}
          <p className="text-2xl md:text-3xl text-blue-100 font-light animate-fade-in-up">
            Where Word Lovers Play to Learn
          </p>
        </div>

        {/* Info box with glass effect */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 max-w-lg mx-auto border border-white/20 shadow-xl animate-fade-in-up animation-delay-200">
          <p className="text-xl text-blue-100 mb-2 font-medium">
            🚀 Launching January 2026!
          </p>
          <p className="text-lg text-blue-200">
            Join the revolution in educational word games
          </p>
        </div>

        {/* CTA buttons */}
        <div className="space-y-4 animate-fade-in-up animation-delay-400">
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Dev Portal Login →
          </Link>
          
          <div className="mt-6">
            <p className="text-blue-200 text-lg">
              Questions? Contact{' '}
              <a 
                href="mailto:laffcollie@gmail.com" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 hover:from-yellow-100 hover:to-pink-100 font-medium underline decoration-2 underline-offset-2"
              >
                laffcollie@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Feature preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-3xl mb-2">🎮</div>
            <p className="text-blue-200 text-sm">6 Unique Games</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-3xl mb-2">🎓</div>
            <p className="text-blue-200 text-sm">Educational Focus</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
            <p className="text-blue-200 text-sm">Family Friendly</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-blue-200 text-sm">Track Progress</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-3xl mb-2">🌐</div>
            <p className="text-blue-200 text-sm">Play Anywhere</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-3xl mb-2">💡</div>
            <p className="text-blue-200 text-sm">AI-Powered</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}