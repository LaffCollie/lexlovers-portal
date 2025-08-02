'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

// Simple game access (we'll import from shared-auth later)
class SimpleGameAccess {
  createGameToken(userId: string, email: string, game: string, tier: string) {
    const data = {
      userId,
      email,
      tier,
      game,
      expires: Date.now() + (24 * 60 * 60 * 1000)
    }
    return Buffer.from(JSON.stringify(data)).toString('base64')
  }

  buildGameUrl(game: string, token: string) {
    const urls: Record<string, string> = {
      'wordunearth': 'https://wordunearth.com',
      'letterain': 'https://letterain.com',
      'wordbridge': 'https://wordbridgegame.com',
      'gethomefirst': 'https://gethomefirstgame.com',
      'alphacatraz': 'https://alphacatraz.com',
      'lexaobscura': 'http://localhost:5173'
    }
    return `${urls[game]}/auth/sso?token=${encodeURIComponent(token)}`
  }
}

const gameAccess = new SimpleGameAccess()

interface Game {
  id: string
  name: string
  description: string
  available: boolean
  availableDate: string
  status: 'ready' | 'testing' | 'coming' | 'development'
}

const GAMES: Game[] = [
  {
    id: 'wordunearth',
    name: 'WordUnearth',
    description: 'Uncover buried words in this archaeological adventure',
    available: true,
    availableDate: '2025-08-01',
    status: 'testing'
  },
  {
    id: 'letterain',
    name: 'Letterain',
    description: 'Word Tetris for reluctant readers',
    available: false,
    availableDate: '2025-09-01',
    status: 'coming'
  },
  {
    id: 'wordbridge',
    name: 'WordBridge',
    description: 'Build bridges with words',
    available: false,
    availableDate: '2025-10-01',
    status: 'coming'
  },
  {
    id: 'gethomefirst',
    name: 'GetHomeFirst',
    description: 'Race home using word power',
    available: false,
    availableDate: '2025-11-01',
    status: 'coming'
  },
  {
    id: 'alphacatraz',
    name: 'AlphaCatraz',
    description: 'Escape using vocabulary skills',
    available: false,
    availableDate: '2025-12-01',
    status: 'coming'
  },
  {
    id: 'lexaobscura',
    name: 'LexaObscura',
    description: 'Revolutionary crossword experience',
    available: true,
    availableDate: '2025-08-01',
    status: 'development'
  }
]

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const checkUser = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
    } else {
      setUser(user)
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    checkUser()
  }, [checkUser])

  function launchGame(gameId: string, tier: string) {
    if (!user) return
    
    const token = gameAccess.createGameToken(user.id, user.email!, gameId, tier)
    const url = gameAccess.buildGameUrl(gameId, token)
    
    console.log(`Launching ${gameId} with ${tier} tier`)
    console.log('SSO URL:', url)
    
    // For now, just log - uncomment to actually redirect
    // window.location.href = url
    alert(`Would launch: ${gameId} (${tier} tier)\n\nSSO URL: ${url}`)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">LexLovers Dev Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-semibold mb-6">Available Games</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMES.map((game) => {
            const now = new Date()
            const availableDate = new Date(game.availableDate)
            const isAvailable = now >= availableDate

            return (
              <div
                key={game.id}
                className={`bg-white rounded-lg shadow p-6 ${!isAvailable ? 'opacity-60' : ''}`}
              >
                <h3 className="text-lg font-semibold mb-2">{game.name}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                
                <div className="mb-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded ${
                    game.status === 'ready' ? 'bg-green-100 text-green-800' :
                    game.status === 'testing' ? 'bg-yellow-100 text-yellow-800' :
                    game.status === 'development' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {game.status === 'ready' ? '✅ Ready' :
                     game.status === 'testing' ? '🧪 Testing' :
                     game.status === 'development' ? '🚧 In Dev' :
                     `🔒 Available ${availableDate.toLocaleDateString()}`}
                  </span>
                </div>

                {isAvailable ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => launchGame(game.id, 'free')}
                      className="w-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                    >
                      Test Free Tier
                    </button>
                    <button
                      onClick={() => launchGame(game.id, 'paid')}
                      className="w-full px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
                    >
                      Test Paid Tier
                    </button>
                    <button
                      onClick={() => launchGame(game.id, 'premium')}
                      className="w-full px-4 py-2 text-sm bg-purple-100 hover:bg-purple-200 rounded"
                    >
                      Test Premium Tier
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-4">
                    Coming Soon
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">🛠️ Dev Notes</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>SSO tokens are logged to console (check DevTools)</li>
            <li>Game launches are simulated with alerts for now</li>
            <li>Add <code>/auth/sso</code> endpoint to each game to handle tokens</li>
            <li>Games will automatically appear as their dates arrive</li>
          </ul>
        </div>
      </main>
    </div>
  )
}