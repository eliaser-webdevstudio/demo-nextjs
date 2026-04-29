'use client'

import { useEffect, useRef, useState } from 'react'

// Financial hub positions (relative coordinates on a sphere projection)
const HUBS = [
  { name: 'New York', x: 25, y: 35, lat: '40.71°N', lon: '74.00°W' },
  { name: 'London', x: 48, y: 28, lat: '51.50°N', lon: '0.12°W' },
  { name: 'Tokyo', x: 85, y: 38, lat: '35.67°N', lon: '139.65°E' },
  { name: 'Singapore', x: 75, y: 58, lat: '1.35°N', lon: '103.81°E' },
  { name: 'Dubai', x: 58, y: 42, lat: '25.20°N', lon: '55.27°E' },
  { name: 'Hong Kong', x: 78, y: 45, lat: '22.31°N', lon: '114.16°E' },
]

const INITIAL_TICKERS = [
  { symbol: 'EUR/USD', price: '1.0845', change: '+0.23%', positive: true },
  { symbol: 'GBP/USD', price: '1.2678', change: '+0.15%', positive: true },
  { symbol: 'USD/JPY', price: '149.32', change: '-0.08%', positive: false },
  { symbol: 'USD/CHF', price: '0.8923', change: '+0.12%', positive: true },
  { symbol: 'AUD/USD', price: '0.6543', change: '-0.34%', positive: false },
  { symbol: 'USD/CAD', price: '1.3542', change: '+0.18%', positive: true },
  { symbol: 'BTC/USD', price: '67,245', change: '+2.45%', positive: true },
  { symbol: 'ETH/USD', price: '3,456', change: '+1.87%', positive: true },
  { symbol: 'XAU/USD', price: '2,345', change: '+0.56%', positive: true },
  { symbol: 'SPX/USD', price: '5,234', change: '+0.89%', positive: true },
]

export default function Globe() {
  const [mounted, setMounted] = useState(false)
  const [tickers, setTickers] = useState(INITIAL_TICKERS)
  const [rotation, setRotation] = useState(0)
  const [time, setTime] = useState(0)
  const animationRef = useRef<number>()

  useEffect(() => {
    setMounted(true)

    // Animate globe rotation
    const animate = () => {
      setTime(t => t + 0.016)
      setRotation(r => r + 0.2)
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)

    // Update tickers periodically
    const tickerInterval = setInterval(() => {
      setTickers(prev => prev.map(ticker => {
        const changeValue = (Math.random() - 0.5) * 0.5
        const currentPrice = parseFloat(ticker.price.replace(',', ''))
        const newPrice = Math.max(0.01, currentPrice * (1 + changeValue / 100))

        let formattedPrice: string
        if (ticker.symbol.includes('BTC') || ticker.symbol.includes('ETH') || ticker.symbol.includes('XAU')) {
          formattedPrice = newPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })
        } else if (ticker.symbol.includes('SPX')) {
          formattedPrice = newPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })
        } else {
          formattedPrice = newPrice.toFixed(4)
        }

        return {
          ...ticker,
          price: formattedPrice,
          change: changeValue >= 0 ? `+${changeValue.toFixed(2)}%` : `${changeValue.toFixed(2)}%`,
          positive: changeValue >= 0,
        }
      }))
    }, 2000)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearInterval(tickerInterval)
    }
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="relative w-full h-full min-h-[450px] lg:min-h-[550px]">
      {/* Globe Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background glow */}
        <div className="absolute w-[80%] h-[80%] bg-gradient-radial from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />

        {/* Globe SVG */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full max-w-[500px] max-h-[500px]"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0a1628" />
              <stop offset="70%" stopColor="#0d2847" />
              <stop offset="100%" stopColor="#1a3a5c" />
            </radialGradient>
            <linearGradient id="atmosphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer atmosphere glow */}
          <circle cx="100" cy="100" r="95" fill="url(#atmosphereGradient)" />

          {/* Main globe sphere */}
          <circle cx="100" cy="100" r="80" fill="url(#globeGradient)" />

          {/* Wireframe latitude lines */}
          {[20, 40, 60, 80].map((r, i) => (
            <ellipse
              key={`lat-${i}`}
              cx="100"
              cy="100"
              rx={r}
              ry={r * 0.4}
              fill="none"
              stroke="#00d4ff"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          ))}

          {/* Wireframe longitude lines */}
          {[0, 30, 60, 90, 120, 150].map((deg, i) => {
            const rad = (deg + rotation) * (Math.PI / 180)
            return (
              <ellipse
                key={`lon-${i}`}
                cx="100"
                cy="100"
                rx={80}
                ry={80}
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                style={{
                  transformOrigin: 'center',
                  transform: `rotateY(${deg}deg)`,
                }}
              />
            )
          })}

          {/* Connection lines between hubs */}
          <g stroke="#00d4ff" strokeWidth="0.8" fill="none" strokeOpacity="0.4">
            {/* NY to London */}
            <path d="M 55 68 Q 52 48 98 56" strokeDasharray="4 2">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="2s" repeatCount="indefinite" />
            </path>
            {/* London to Dubai */}
            <path d="M 98 56 Q 78 62 116 84" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2.5s" repeatCount="indefinite" />
            </path>
            {/* Dubai to Singapore */}
            <path d="M 116 84 Q 136 104 150 116" strokeDasharray="4 2">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="3s" repeatCount="indefinite" />
            </path>
            {/* Singapore to Tokyo */}
            <path d="M 150 116 Q 170 76 170 76" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2.2s" repeatCount="indefinite" />
            </path>
            {/* Tokyo to HK */}
            <path d="M 170 76 Q 156 90 156 90" strokeDasharray="2 2">
              <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.8s" repeatCount="indefinite" />
            </path>
            {/* HK to Singapore */}
            <path d="M 156 90 Q 153 103 150 116" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2.4s" repeatCount="indefinite" />
            </path>
            {/* NY to Tokyo */}
            <path d="M 55 68 Q 112 20 170 76" strokeDasharray="5 3">
              <animate attributeName="stroke-dashoffset" from="16" to="0" dur="4s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Hub markers */}
          {HUBS.map((hub, i) => (
            <g key={hub.name}>
              {/* Glow ring */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r="8"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1"
                strokeOpacity={0.3 + Math.sin(time * 3 + i) * 0.2}
              >
                <animate
                  attributeName="r"
                  values="6;10;6"
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.6;0.2;0.6"
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Core dot */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r="3"
                fill="#00d4ff"
              >
                <animate
                  attributeName="r"
                  values="2.5;3.5;2.5"
                  dur={`${1.5 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* Orbit paths */}
          <ellipse cx="100" cy="100" rx="120" ry="40" fill="none" stroke="#00d4ff" strokeWidth="0.3" strokeOpacity="0.2" transform="rotate(-15 100 100)" />
          <ellipse cx="100" cy="100" rx="130" ry="50" fill="none" stroke="#00ff88" strokeWidth="0.3" strokeOpacity="0.2" transform="rotate(20 100 100)" />
        </svg>

        {/* Floating Currency Symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dollar - Orbit 1 */}
          <div
            className="absolute text-cyan-400 text-3xl font-bold"
            style={{
              left: `${50 + Math.cos(time * 0.5) * 35}%`,
              top: `${50 + Math.sin(time * 0.5) * 15}%`,
              transform: 'translate(-50%, -50%)',
              textShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
              opacity: 0.8 + Math.sin(time * 2) * 0.2,
            }}
          >
            $
          </div>

          {/* Euro - Orbit 2 */}
          <div
            className="absolute text-green-400 text-2xl font-bold"
            style={{
              left: `${50 + Math.cos(time * 0.4 + 2) * 38}%`,
              top: `${50 + Math.sin(time * 0.4 + 2) * 18}%`,
              transform: 'translate(-50%, -50%)',
              textShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
              opacity: 0.8 + Math.sin(time * 2.5 + 1) * 0.2,
            }}
          >
            €
          </div>

          {/* Pound - Orbit 3 */}
          <div
            className="absolute text-red-400 text-2xl font-bold"
            style={{
              left: `${50 + Math.cos(time * 0.35 + 4) * 32}%`,
              top: `${50 + Math.sin(time * 0.35 + 4) * 12}%`,
              transform: 'translate(-50%, -50%)',
              textShadow: '0 0 20px rgba(255, 107, 107, 0.8)',
              opacity: 0.8 + Math.sin(time * 1.8 + 2) * 0.2,
            }}
          >
            £
          </div>

          {/* Yen - Orbit 4 */}
          <div
            className="absolute text-yellow-400 text-2xl font-bold"
            style={{
              left: `${50 + Math.cos(time * 0.45 + 1.5) * 42}%`,
              top: `${50 + Math.sin(time * 0.45 + 1.5) * 20}%`,
              transform: 'translate(-50%, -50%)',
              textShadow: '0 0 20px rgba(255, 217, 61, 0.8)',
              opacity: 0.8 + Math.sin(time * 2.2 + 0.5) * 0.2,
            }}
          >
            ¥
          </div>
        </div>
      </div>

      {/* HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top ticker bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-sm border-b border-cyan-500/30 flex items-center overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tickers, ...tickers].map((ticker, i) => (
              <div key={i} className="flex items-center gap-2 px-4 text-xs font-mono">
                <span className="text-gray-400">{ticker.symbol}</span>
                <span className="text-white font-semibold">{ticker.price}</span>
                <span className={ticker.positive ? 'text-green-400' : 'text-red-400'}>
                  {ticker.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-12 left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-500/50" />
        <div className="absolute top-12 right-4 w-12 h-12 border-r-2 border-t-2 border-cyan-500/50" />
        <div className="absolute bottom-12 left-4 w-12 h-12 border-l-2 border-b-2 border-cyan-500/50" />
        <div className="absolute bottom-12 right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-500/50" />

        {/* Side panels */}
        <div className="absolute left-4 top-1/3 space-y-2">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded px-3 py-2">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Market</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-green-400">OPEN</span>
            </div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded px-3 py-2">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Hubs</div>
            <div className="text-lg font-bold text-cyan-400">6</div>
          </div>
        </div>

        <div className="absolute right-4 top-1/3 space-y-2 text-right">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded px-3 py-2">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Volume</div>
            <div className="text-lg font-bold text-cyan-400">$847B</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded px-3 py-2">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Latency</div>
            <div className="text-lg font-bold text-green-400">12ms</div>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-gray-400">
              LAT: <span className="text-white">40.7128° N</span>
            </span>
            <span className="text-gray-400">
              LON: <span className="text-white">74.0060° W</span>
            </span>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            SYS: <span className="text-green-400">ONLINE</span>
          </div>
        </div>

        {/* Hub labels */}
        {HUBS.map((hub, i) => (
          <div
            key={`label-${i}`}
            className="absolute text-[10px] font-mono text-cyan-400/70"
            style={{
              left: `${hub.x}%`,
              top: `${hub.y + 8}%`,
              transform: 'translateX(-50%)',
            }}
          >
            {hub.name.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
