"use client"

import { useState, useEffect } from "react"
import { Network, Shield, Lock, Zap } from "lucide-react"

export default function ArchitectureSection() {
  const [activeRelay, setActiveRelay] = useState<number | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4)
      setActiveRelay(Math.floor(Math.random() * 5))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const relayNodes = [
    { id: 0, x: 20, y: 30, region: "US-EAST" },
    { id: 1, x: 50, y: 20, region: "EU-WEST" },
    { id: 2, x: 80, y: 40, region: "ASIA-PAC" },
    { id: 3, x: 50, y: 60, region: "US-WEST" },
    { id: 4, x: 20, y: 50, region: "EU-NORTH" },
  ]

  return (
    <section id="architecture" className="py-24 sm:py-32 bg-[#0a0a0a] relative z-10 overflow-hidden">
      {/* Animated Network Background */}
      <div className="absolute inset-0 opacity-25">
        {/* Animated network grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            animation: "gridMove 22s linear infinite"
          }}
        />

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
          {[...Array(25)].map((_, i) => {
            const x1 = (i * 6.4) % 100
            const y1 = (i * 5.2) % 100
            const x2 = ((i * 6.4) + 30) % 100
            const y2 = ((i * 5.2) + 25) % 100
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                strokeDasharray="3,3"
                style={{
                  animation: `networkLineDash ${3 + (i % 3)}s linear infinite, networkLineOpacity ${4 + (i % 2)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            )
          })}
        </svg>

        {/* Network relay particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                left: `${(i * 3.7) % 100}%`,
                top: `${(i * 4.3) % 100}%`,
                opacity: 0.15 + (i % 4) * 0.08,
                animation: `relayPulse ${5 + (i % 5)}s ease-in-out infinite`,
                animationDelay: `${i * 0.12}s`,
                boxShadow: "0 0 6px rgba(255,255,255,0.7)"
              }}
            />
          ))}
        </div>

        {/* Network orbs */}
        <div 
          className="absolute top-1/3 left-1/5 w-[400px] h-[400px] rounded-full blur-3xl opacity-18"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
            animation: "networkPulse 10s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] rounded-full blur-3xl opacity-18"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
            animation: "networkPulse 12s ease-in-out infinite 2.5s"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light tracking-wider mb-6 font-mono text-white">
            NETWORK ARCHITECTURE
          </h2>
          <div className="w-24 sm:w-32 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Decentralized relay network with multi-hop routing, MPC nodes, and zero-knowledge proofs. 
            No single point of failure. Privacy by design.
          </p>
        </div>

        {/* Multi-Hop Routing Visualization */}
        <div className="bg-[#1a1a1a] border-2 border-white/20 p-6 sm:p-10 mb-12 relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            {/* Animated network connections */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180
                const x1 = 50 + 30 * Math.cos(angle)
                const y1 = 50 + 30 * Math.sin(angle)
                const x2 = 50 + 40 * Math.cos(angle + Math.PI / 6)
                const y2 = 50 + 40 * Math.sin(angle + Math.PI / 6)
                return (
                  <line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur={`${2 + (i % 3)}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.1;0.5;0.1"
                      dur={`${3 + (i % 2)}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.2}s`}
                    />
                  </line>
                )
              })}
            </svg>

            {/* Network particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 5.2) % 100}%`,
                  opacity: 0.1 + (i % 4) * 0.05,
                  animation: `networkParticle ${10 + (i % 6)}s linear infinite`,
                  animationDelay: `${i * 0.15}s`,
                  boxShadow: "0 0 4px rgba(255,255,255,0.6)"
                }}
              />
            ))}

            {/* Pulsing network orb */}
            <div 
              className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-12"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
                animation: "shadowNetPulse 8s ease-in-out infinite",
                transform: "translate(-50%, -50%)"
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="font-mono font-bold text-xl mb-8 text-center tracking-wide text-white">
              TX SHADOWNET - MULTI-HOP ROUTING
            </h3>
          
          <div className="relative h-[400px] sm:h-[500px]">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
              {/* Connection Lines */}
              {relayNodes.map((node, i) =>
                relayNodes.slice(i + 1).map((targetNode) => {
                  const distance = Math.sqrt(
                    Math.pow(node.x - targetNode.x, 2) + Math.pow(node.y - targetNode.y, 2)
                  )
                  const isActive =
                    animationPhase === 1 &&
                    (activeRelay === node.id || activeRelay === targetNode.id)
                  
                  return (
                    <line
                      key={`${i}-${targetNode.id}`}
                      x1={node.x}
                      y1={node.y}
                      x2={targetNode.x}
                      y2={targetNode.y}
                      stroke="#fff"
                      strokeWidth={isActive ? 0.5 : 0.2}
                      opacity={isActive ? 0.4 : 0.1}
                      strokeDasharray={distance > 30 ? "1,1" : "none"}
                    >
                      {isActive && (
                        <animate
                          attributeName="opacity"
                          values="0.1;0.6;0.1"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      )}
                    </line>
                  )
                })
              )}

              {/* Relay Nodes */}
              {relayNodes.map((node, i) => {
                const isActive = activeRelay === node.id
                return (
                  <g key={node.id}>
                    {/* Glow effect */}
                    {isActive && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="4"
                        fill="#fff"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0.6;0.3"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    
                    {/* Node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="2"
                      fill="#fff"
                      opacity={isActive ? 1 : 0.6}
                      className="cursor-pointer"
                      onClick={() => setActiveRelay(isActive ? null : node.id)}
                    >
                      {isActive && (
                        <animate
                          attributeName="r"
                          values="2;2.5;2"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      )}
                    </circle>

                    {/* Node label */}
                    <text
                      x={node.x}
                      y={node.y - 5}
                      fontSize="2"
                      fill="#fff"
                      opacity="0.7"
                      textAnchor="middle"
                      className="font-mono"
                    >
                      {node.region}
                    </text>
                  </g>
                )
              })}

              {/* Transaction Flow Animation */}
              {animationPhase >= 2 && (
                <g>
                  <circle r="0.8" fill="#fff" opacity="0.9">
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      path={`M ${relayNodes[0].x} ${relayNodes[0].y} L ${relayNodes[1].x} ${relayNodes[1].y} L ${relayNodes[2].x} ${relayNodes[2].y} L ${relayNodes[3].x} ${relayNodes[3].y}`}
                    />
                  </circle>
                </g>
              )}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 border border-white/60 rounded-full"></div>
                <span className="text-gray-400">Relay Node</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-px h-4 bg-white/20"></div>
                <span className="text-gray-400">Connection Path</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-gray-400">Active Route</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-[#0a0a0a] border border-white/10">
              <div className="text-2xl font-mono font-bold text-white mb-2">100+</div>
              <div className="text-xs text-gray-400 font-mono uppercase">RELAY NODES</div>
            </div>
            <div className="text-center p-4 bg-[#0a0a0a] border border-white/10">
              <div className="text-2xl font-mono font-bold text-white mb-2">Multi-Hop</div>
              <div className="text-xs text-gray-400 font-mono uppercase">ROUTING</div>
            </div>
            <div className="text-center p-4 bg-[#0a0a0a] border border-white/10">
              <div className="text-2xl font-mono font-bold text-white mb-2">0%</div>
              <div className="text-xs text-gray-400 font-mono uppercase">METADATA LEAK</div>
            </div>
          </div>
          </div>
        </div>

        {/* MPC Node Distribution */}
        <div className="bg-[#1a1a1a] border-2 border-white/20 p-6 sm:p-10 mb-12 relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            {/* Animated circular connections */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
              {[1, 2, 3, 4, 5].map((node, i) => {
                const angle = (i * 2 * Math.PI) / 5
                const x = 50 + 25 * Math.cos(angle)
                const y = 50 + 25 * Math.sin(angle)
                return (
                  <line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                    strokeDasharray="1,1"
                    style={{
                      animation: `mpcLineDash ${2 + (i % 2)}s linear infinite, mpcLineOpacity ${3 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`
                    }}
                  />
                )
              })}
              
              {/* Outer circle */}
              <circle
                cx="50%"
                cy="50%"
                r="30%"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                style={{
                  animation: "mpcCircleRotate 10s linear infinite"
                }}
              />
            </svg>

            {/* MPC share particles */}
            {[...Array(10)].map((_, i) => {
              const angle = (i * 2 * Math.PI) / 10
              const radius = 25 + (i % 3) * 5
              const x = 50 + radius * Math.cos(angle)
              const y = 50 + radius * Math.sin(angle)
              return (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity: 0.15 + (i % 3) * 0.1,
                    animation: `mpcParticle ${4 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    boxShadow: "0 0 6px rgba(255,255,255,0.7)",
                    transform: "translate(-50%, -50%)"
                  }}
                />
              )
            })}

            {/* Pulsing center orb */}
            <div 
              className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-2xl opacity-15"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
                animation: "mpcCenterPulse 6s ease-in-out infinite",
                transform: "translate(-50%, -50%)"
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="font-mono font-bold text-xl mb-8 text-center tracking-wide text-white">
              MULTI-PARTY COMPUTATION (MPC)
            </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Secrets are split across multiple independent nodes. No single node ever has complete access 
                to sensitive information. Even if one node is compromised, privacy remains intact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-white" size={20} />
                  <div>
                    <div className="text-sm font-mono font-bold text-white">Secret Sharing</div>
                    <div className="text-xs text-gray-400">Data split into random pieces</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Network className="text-white" size={20} />
                  <div>
                    <div className="text-sm font-mono font-bold text-white">Distributed Computation</div>
                    <div className="text-xs text-gray-400">Each node performs partial operation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="text-white" size={20} />
                  <div>
                    <div className="text-sm font-mono font-bold text-white">Threshold Security</div>
                    <div className="text-xs text-gray-400">Minimum nodes required for completion</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-white" size={20} />
                  <div>
                    <div className="text-sm font-mono font-bold text-white">Key Rotation</div>
                    <div className="text-xs text-gray-400">Automatic refresh for forward secrecy</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px]">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
                {/* MPC Nodes */}
                {[1, 2, 3, 4, 5].map((node, i) => {
                  const angle = (i * 2 * Math.PI) / 5
                  const x = 50 + 30 * Math.cos(angle)
                  const y = 50 + 30 * Math.sin(angle)
                  
                  return (
                    <g key={i}>
                      {/* Connection to center */}
                      <line
                        x1={50}
                        y1={50}
                        x2={x}
                        y2={y}
                        stroke="#fff"
                        strokeWidth="0.3"
                        opacity="0.2"
                      />
                      
                      {/* Node circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r="3"
                        fill="#fff"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="r"
                          values="3;3.5;3"
                          dur="2s"
                          begin={`${i * 0.4}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      
                      {/* Secret share visualization */}
                      <text
                        x={x}
                        y={y + 6}
                        fontSize="2"
                        fill="#fff"
                        opacity="0.6"
                        textAnchor="middle"
                        className="font-mono"
                      >
                        Share {i + 1}
                      </text>
                    </g>
                  )
                })}
                
                {/* Center - Secret (never fully reconstructed) */}
                <circle
                  cx={50}
                  cy={50}
                  r="4"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.5"
                  strokeDasharray="1,1"
                  opacity="0.5"
                />
                <text
                  x={50}
                  y={50}
                  fontSize="2.5"
                  fill="#fff"
                  opacity="0.7"
                  textAnchor="middle"
                  className="font-mono"
                >
                  Secret
                </text>
              </svg>
            </div>
          </div>
          </div>
        </div>

        {/* Encryption Stack */}
        <div className="bg-[#1a1a1a] border-2 border-white/20 p-6 sm:p-10 relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            {/* Animated encryption layers */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
              {[...Array(4)].map((_, i) => (
                <rect
                  key={i}
                  x={`${20 + i * 15}%`}
                  y={`${30 + i * 10}%`}
                  width="15%"
                  height="40%"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  style={{
                    animation: `encryptLayerDash ${3 + i}s linear infinite, encryptLayerOpacity ${4 + (i % 2)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </svg>

            {/* Encryption particles */}
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${(i * 6.25) % 100}%`,
                  top: `${(i * 6.25) % 100}%`,
                  opacity: 0.1 + (i % 4) * 0.05,
                  animation: `encryptParticle ${7 + (i % 5)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: "0 0 4px rgba(255,255,255,0.5)"
                }}
              />
            ))}

            {/* Encryption orbs */}
            <div 
              className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-12"
              style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                animation: "encryptOrb 7s ease-in-out infinite"
              }}
            />
            <div 
              className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-12"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
                animation: "encryptOrb 9s ease-in-out infinite 2s"
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="font-mono font-bold text-xl mb-8 text-center tracking-wide text-white">
              ENCRYPTION STACK
            </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Stealth", subtitle: "ADDRESSES", desc: "One-time addresses for each payment. Only sender and receiver can recognize." },
              { title: "HPKE", subtitle: "ENCRYPTION", desc: "Hybrid Public Key Encryption for end-to-end secure messaging." },
              { title: "PLONK", subtitle: "ZK PROOFS", desc: "Zero-knowledge proofs that validate without revealing data." },
              { title: "MPC", subtitle: "MULTI-PARTY", desc: "Secrets split across nodes. No single point of trust." },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-[#0a0a0a] border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1"
              >
                {/* Animated background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                    animation: "shimmer 3s ease-in-out infinite",
                    animationDelay: `${index * 0.3}s`
                  }}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="text-3xl font-mono font-bold text-white mb-3 group-hover:text-white transition-colors duration-300" style={{ textShadow: "0 0 10px rgba(255,255,255,0.2)" }}>{item.title}</div>
                  <div className="text-xs text-gray-400 font-mono uppercase mb-4 group-hover:text-gray-300 transition-colors duration-300">{item.subtitle}</div>
                  <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

