import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">
          Battle<span className="text-purple-400">BOX</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Gaming Café & Store Platform
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-gray-300 mt-4">
            Edit <code className="bg-gray-800 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App