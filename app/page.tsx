import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo area with glow effect */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 mb-4 tracking-tight animate-pulse">
            LexLovers
          </h1>
          
          {/* Animated tagline */}
          <p className="text-2xl md:text-3xl text-blue-100 font-light animate-fade-in">
            Where Word Lovers Play to Learn
          </p>
        </div>

        {/* Info box with glass effect */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 max-w-lg mx-auto border border-white/20 shadow-xl animate-fade-in">
          <p className="text-xl text-blue-100 mb-2 font-medium">
            🚀 Launching January 2026!
          </p>
          <p className="text-lg text-blue-200">
            Join the revolution in educational word games
          </p>
        </div>

        {/* CTA buttons */}
        <div className="space-y-4 animate-fade-in">
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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in opacity-0 animate-delay-1000">
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-2">🎮</div>
            <p className="text-blue-200 text-sm">6 Unique Games</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-2">🎓</div>
            <p className="text-blue-200 text-sm">Educational Focus</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
            <p className="text-blue-200 text-sm">Family Friendly</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-blue-200 text-sm">Track Progress</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-2">🌐</div>
            <p className="text-blue-200 text-sm">Play Anywhere</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-2">💡</div>
            <p className="text-blue-200 text-sm">AI-Powered</p>
          </div>
        </div>
      </div>
    </div>
  )
}