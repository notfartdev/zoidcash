"use client"

import { useState, useEffect } from "react"
import { Brain, Zap, Settings } from "lucide-react"

export default function AISection() {
  const [activePanel, setActivePanel] = useState(0)
  const [processingData, setProcessingData] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [activePath, setActivePath] = useState({ input: 0, hidden1: 0, hidden2: 0, output: 0 })
  const [metrics, setMetrics] = useState({
    activeUsers: 1247,
    networkMatch: 99.8,
    activationTime: 47,
    costSavings: 94.2,
  })

  const panels = [
    {
      title: "SMART NETWORK SELECTION",
      description: "AI-powered real-time network optimization selecting the best carrier based on speed, cost, and availability",
      metrics: ["650+ Networks", "Auto-failover", "Best Price", "99.9% Success"],
      processes: ["Location Detection", "Network Scanning", "Cost Analysis", "Auto-Connect"],
      icon: Settings,
    },
    {
      title: "PRIVACY & SECURITY AI",
      description: "Zero-knowledge proof verification and AI-driven threat detection ensuring encrypted, private connectivity",
      metrics: ["zk-Proof KYC", "E2E Encrypted", "Threat Detection", "DID Support"],
      processes: ["Identity Verify", "Privacy Check", "Encryption Layer", "Secure Provision"],
      icon: Brain,
    },
    {
      title: "USAGE INTELLIGENCE",
      description: "Predictive analytics for data consumption patterns with personalized plan recommendations and cost optimization",
      metrics: ["95% Accuracy", "Smart Alerts", "Cost Savings", "Auto-suggest"],
      processes: ["Usage Tracking", "Pattern Analysis", "Plan Matching", "Notification"],
      icon: Zap,
    },
  ]

  useEffect(() => {
    let animationFrame: number
    let lastUpdate = Date.now()

    const updateMetrics = () => {
      const now = Date.now()
      const delta = Math.min((now - lastUpdate) / 1000, 0.1) // Cap at 100ms
      
      setMetrics((prev) => ({
        // Active Users: 800-2000 range (realistic for growing platform)
        activeUsers: Math.max(800, Math.min(2000, prev.activeUsers + (Math.random() - 0.5) * 80 * delta)),
        // Network Match: 98.5-99.9% (very high accuracy for AI network selection)
        networkMatch: Math.max(98.5, Math.min(99.9, prev.networkMatch + (Math.random() - 0.5) * 0.2 * delta)),
        // Activation Time: 35-65ms (fast provisioning response time)
        activationTime: Math.max(35, Math.min(65, prev.activationTime + (Math.random() - 0.5) * 6 * delta)),
        // Cost Savings: 92-96% (high savings vs traditional roaming)
        costSavings: Math.max(92, Math.min(96, prev.costSavings + (Math.random() - 0.5) * 0.6 * delta)),
      }))
      
      lastUpdate = now
      animationFrame = requestAnimationFrame(updateMetrics)
    }

    animationFrame = requestAnimationFrame(updateMetrics)

    const processingInterval = setInterval(() => {
      setProcessingData(true)
      setTimeout(() => setProcessingData(false), 1500)
    }, 5000)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearInterval(processingInterval)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePath({
        input: Math.floor(Math.random() * 4),
        hidden1: Math.floor(Math.random() * 5),
        hidden2: Math.floor(Math.random() * 3),
        output: Math.floor(Math.random() * 2),
      })
    }, 2200)

    return () => clearInterval(interval)
  }, [])

  const hoveredInfo = hoveredNode ? hoveredNode.split("-") : null
  const hoveredLayer = hoveredInfo?.[0] as keyof typeof activePath | undefined
  const hoveredIndex = hoveredInfo ? Number(hoveredInfo[1]) : null

  const isNodeActive = (layer: keyof typeof activePath, index: number) =>
    hoveredNode === `${layer}-${index}` || activePath[layer] === index

  const isConnectionActive = (
    fromLayer: keyof typeof activePath,
    fromIndex: number,
    toLayer: keyof typeof activePath,
    toIndex: number,
  ) => {
    if (hoveredLayer && hoveredIndex !== null) {
      if ((hoveredLayer === fromLayer && hoveredIndex === fromIndex) || (hoveredLayer === toLayer && hoveredIndex === toIndex)) {
        return true
      }
    }

    return activePath[fromLayer] === fromIndex && activePath[toLayer] === toIndex
  }

  const getNodeVisuals = (layer: keyof typeof activePath, index: number, baseRadius: number) => {
    const isActive = isNodeActive(layer, index)
    const isHovered = hoveredNode === `${layer}-${index}`
    return {
      radius: isHovered ? baseRadius + 3 : isActive ? baseRadius + 1.5 : baseRadius,
      opacity: isHovered || isActive ? 1 : 0.25,
      strokeWidth: isHovered ? 2 : isActive ? 1.2 : 0,
    }
  }

  return (
    <section id="ai" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light tracking-wider mb-6 font-mono">
            SEEKER<span className="font-bold">OS</span>™ AI
          </h2>
          <div className="w-32 h-px bg-black mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            AI-driven network optimization, privacy protection, and usage intelligence for seamless global connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {panels.map((panel, index) => {
              const IconComponent = panel.icon
              return (
                <div
                  key={index}
                  className={`border-2 p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    activePanel === index ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-400"
                  }`}
                  onClick={() => setActivePanel(index)}
                >
                  {activePanel === index && processingData && (
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                      
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent size={24} className="text-gray-600" />
                      <h3 className="font-mono font-bold text-xl">{panel.title}</h3>
                    </div>
                    <div
                      className={`w-4 h-4 ${activePanel === index ? "bg-black animate-pulse" : "bg-gray-300"}`}
                    ></div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{panel.description}</p>

                  {activePanel === index && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-3">
                        {panel.metrics.map((metric, i) => (
                          <span key={i} className="bg-black text-white px-3 py-2 text-xs font-mono text-center">
                            {metric}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div className="text-sm font-mono text-gray-500 mb-3">PROCESS FLOW:</div>
                        {panel.processes.map((process, i) => (
                          <div key={i} className="flex items-center space-x-3 text-sm">
                            <div
                              className={`w-3 h-3 ${processingData && i <= 2 ? "bg-black animate-pulse" : "bg-gray-400"}`}
                            ></div>
                            <span className="font-mono">{process}</span>
                            {i < panel.processes.length - 1 && <div className="flex-1 h-px bg-gray-300 ml-2"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="space-y-8">
            <div className="relative border-2 border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:border-black hover:shadow-xl group">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-mono font-bold text-lg">NEURAL NETWORK ACTIVITY</h4>
                <div className="text-xs font-mono text-gray-500">
                  {hoveredNode ? (
                    <span className="text-black font-bold">
                      {hoveredNode.toUpperCase().replace("-", " NODE ")}
                    </span>
                  ) : (
                    <span>HOVER TO EXPLORE</span>
                  )}
                </div>
              </div>
              <div className="relative" style={{ height: "460px", paddingBottom: "2.5rem" }}>
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  viewBox="0 0 460 360"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="nodeGlow">
                      <stop offset="0%" stopColor="#000" stopOpacity="1" />
                      <stop offset="70%" stopColor="#000" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="nodeGlowStrong">
                      <stop offset="0%" stopColor="#000" stopOpacity="1" />
                      <stop offset="50%" stopColor="#000" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Input Layer */}
                  <g>
                    {[0, 1, 2, 3].map((i) => {
                      const visuals = getNodeVisuals("input", i, 9)
                      return (
                        <g key={`input-${i}`}>
                          {visuals.opacity > 0.5 && (
                            <circle
                              cx="60"
                              cy={60 + i * 60}
                              r={visuals.radius * 2}
                              fill="url(#nodeGlowStrong)"
                              opacity="0.4"
                              style={{ transition: "all 0.3s ease" }}
                            >
                              <animate
                                attributeName="r"
                                values={`${visuals.radius * 2};${visuals.radius * 2.5};${visuals.radius * 2}`}
                                dur="2s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                          <circle
                            cx="60"
                            cy={60 + i * 60}
                            r={visuals.radius}
                            fill="#000"
                            opacity={visuals.opacity}
                            style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                            onMouseEnter={() => setHoveredNode(`input-${i}`)}
                            onMouseLeave={() => setHoveredNode(null)}
                          >
                            <animate
                              attributeName="r"
                              values={`${visuals.radius};${visuals.radius + 2};${visuals.radius}`}
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      )
                    })}
                  </g>

                  {/* Hidden Layer 1 */}
                  <g>
                    {[0, 1, 2, 3, 4].map((i) => {
                      const visuals = getNodeVisuals("hidden1", i, 7)
                      return (
                        <g key={`hidden1-${i}`}>
                          {visuals.opacity > 0.5 && (
                            <circle
                              cx="180"
                              cy={40 + i * 50}
                              r={visuals.radius * 2}
                              fill="url(#nodeGlow)"
                              opacity="0.3"
                              style={{ transition: "all 0.3s ease" }}
                            >
                              <animate
                                attributeName="r"
                                values={`${visuals.radius * 2};${visuals.radius * 2.3};${visuals.radius * 2}`}
                                dur="2s"
                                begin={`${i * 0.2}s`}
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                          <circle
                            cx="180"
                            cy={40 + i * 50}
                            r={visuals.radius}
                            fill="#000"
                            opacity={visuals.opacity}
                            style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                            onMouseEnter={() => setHoveredNode(`hidden1-${i}`)}
                            onMouseLeave={() => setHoveredNode(null)}
                          >
                            <animate
                              attributeName="r"
                              values={`${visuals.radius};${visuals.radius + 1.5};${visuals.radius}`}
                              dur="2s"
                              begin={`${i * 0.2}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      )
                    })}
                  </g>

                  {/* Hidden Layer 2 */}
                  <g>
                    {[0, 1, 2].map((i) => {
                      const visuals = getNodeVisuals("hidden2", i, 7)
                      return (
                        <g key={`hidden2-${i}`}>
                          {visuals.opacity > 0.5 && (
                            <circle
                              cx="300"
                              cy={80 + i * 60}
                              r={visuals.radius * 2}
                              fill="url(#nodeGlow)"
                              opacity="0.3"
                              style={{ transition: "all 0.3s ease" }}
                            >
                              <animate
                                attributeName="r"
                                values={`${visuals.radius * 2};${visuals.radius * 2.3};${visuals.radius * 2}`}
                                dur="2s"
                                begin={`${i * 0.25}s`}
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                          <circle
                            cx="300"
                            cy={80 + i * 60}
                            r={visuals.radius}
                            fill="#000"
                            opacity={visuals.opacity}
                            style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                            onMouseEnter={() => setHoveredNode(`hidden2-${i}`)}
                            onMouseLeave={() => setHoveredNode(null)}
                          >
                            <animate
                              attributeName="r"
                              values={`${visuals.radius};${visuals.radius + 1.5};${visuals.radius}`}
                              dur="2s"
                              begin={`${i * 0.25}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      )
                    })}
                  </g>

                  {/* Output Layer */}
                  <g>
                    {[0, 1].map((i) => {
                      const visuals = getNodeVisuals("output", i, 9)
                      return (
                        <g key={`output-${i}`}>
                          {visuals.opacity > 0.5 && (
                            <circle
                              cx="420"
                              cy={100 + i * 60}
                              r={visuals.radius * 2}
                              fill="url(#nodeGlowStrong)"
                              opacity="0.4"
                              style={{ transition: "all 0.3s ease" }}
                            >
                              <animate
                                attributeName="r"
                                values={`${visuals.radius * 2};${visuals.radius * 2.5};${visuals.radius * 2}`}
                                dur="2s"
                                begin={`${i * 0.3 + 0.5}s`}
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                          <circle
                            cx="420"
                            cy={100 + i * 60}
                            r={visuals.radius}
                            fill="#000"
                            opacity={visuals.opacity}
                            style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                            onMouseEnter={() => setHoveredNode(`output-${i}`)}
                            onMouseLeave={() => setHoveredNode(null)}
                          >
                            <animate
                              attributeName="r"
                              values={`${visuals.radius};${visuals.radius + 2};${visuals.radius}`}
                              dur="2s"
                              begin={`${i * 0.3 + 0.5}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      )
                    })}
                  </g>

                  {/* Connections: Input to Hidden1 */}
                  {[0, 1, 2, 3].map((i) =>
                    [0, 1, 2, 3, 4].map((j) => {
                      const isActive = isConnectionActive("input", i, "hidden1", j)
                      return (
                        <g key={`conn-input-${i}-${j}`}>
                          <line
                            x1="60"
                            y1={60 + i * 60}
                            x2="180"
                            y2={40 + j * 50}
                            stroke="#000"
                            strokeWidth={isActive ? 2.5 : 1}
                            opacity={isActive ? 0.7 : 0.08}
                            style={{ transition: "all 0.4s ease" }}
                          />
                          {isActive && (
                            <>
                              <circle r="3" fill="#000" opacity="0.9">
                                <animateMotion dur="1.5s" repeatCount="indefinite">
                                  <mpath xlinkHref={`#path-input-${i}-hidden1-${j}`} />
                                </animateMotion>
                              </circle>
                              <path
                                id={`path-input-${i}-hidden1-${j}`}
                                d={`M 60 ${60 + i * 60} L 180 ${40 + j * 50}`}
                                fill="none"
                                stroke="none"
                              />
                            </>
                          )}
                        </g>
                      )
                    }),
                  )}

                  {/* Connections: Hidden1 to Hidden2 */}
                  {[0, 1, 2, 3, 4].map((i) =>
                    [0, 1, 2].map((j) => {
                      const isActive = isConnectionActive("hidden1", i, "hidden2", j)
                      return (
                        <g key={`conn-hidden1-${i}-${j}`}>
                          <line
                            x1="180"
                            y1={40 + i * 50}
                            x2="300"
                            y2={80 + j * 60}
                            stroke="#000"
                            strokeWidth={isActive ? 2.5 : 1}
                            opacity={isActive ? 0.7 : 0.08}
                            style={{ transition: "all 0.4s ease" }}
                          />
                          {isActive && (
                            <>
                              <circle r="3" fill="#000" opacity="0.9">
                                <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.3s">
                                  <mpath xlinkHref={`#path-hidden1-${i}-hidden2-${j}`} />
                                </animateMotion>
                              </circle>
                              <path
                                id={`path-hidden1-${i}-hidden2-${j}`}
                                d={`M 180 ${40 + i * 50} L 300 ${80 + j * 60}`}
                                fill="none"
                                stroke="none"
                              />
                            </>
                          )}
                        </g>
                      )
                    }),
                  )}

                  {/* Connections: Hidden2 to Output */}
                  {[0, 1, 2].map((i) =>
                    [0, 1].map((j) => {
                      const isActive = isConnectionActive("hidden2", i, "output", j)
                      return (
                        <g key={`conn-hidden2-${i}-${j}`}>
                          <line
                            x1="300"
                            y1={80 + i * 60}
                            x2="420"
                            y2={100 + j * 60}
                            stroke="#000"
                            strokeWidth={isActive ? 2.5 : 1}
                            opacity={isActive ? 0.7 : 0.08}
                            style={{ transition: "all 0.4s ease" }}
                          />
                          {isActive && (
                            <>
                              <circle r="3" fill="#000" opacity="0.9">
                                <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.6s">
                                  <mpath xlinkHref={`#path-hidden2-${i}-output-${j}`} />
                                </animateMotion>
                              </circle>
                              <path
                                id={`path-hidden2-${i}-output-${j}`}
                                d={`M 300 ${80 + i * 60} L 420 ${100 + j * 60}`}
                                fill="none"
                                stroke="none"
                              />
                            </>
                          )}
                        </g>
                      )
                    }),
                  )}
                </svg>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center pt-4 px-2 border-t border-gray-300">
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-700 uppercase tracking-wider transition-all duration-300 group-hover:text-black mb-1">
                      INPUT
                    </div>
                    <div className="text-xs text-gray-400">User Request</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-700 uppercase tracking-wider transition-all duration-300 group-hover:text-black mb-1">
                      HIDDEN
                    </div>
                    <div className="text-xs text-gray-400">Network Match</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-700 uppercase tracking-wider transition-all duration-300 group-hover:text-black mb-1">
                      HIDDEN
                    </div>
                    <div className="text-xs text-gray-400">Privacy Check</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-700 uppercase tracking-wider transition-all duration-300 group-hover:text-black mb-1">
                      OUTPUT
                    </div>
                    <div className="text-xs text-gray-400">eSIM Provision</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-gray-200 p-6 bg-white transition-all duration-300 hover:border-black hover:shadow-md">
                <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wide">ACTIVE USERS</div>
                <div className="text-3xl font-mono font-bold transition-all duration-300" style={{ transition: "all 0.3s ease-out" }}>
                  {Math.round(metrics.activeUsers).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 font-mono">connected now</div>
              </div>
              <div className="border-2 border-gray-200 p-6 bg-white transition-all duration-300 hover:border-black hover:shadow-md">
                <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wide">NETWORK MATCH</div>
                <div className="text-3xl font-mono font-bold transition-all duration-300" style={{ transition: "all 0.3s ease-out" }}>
                  {metrics.networkMatch.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-500 font-mono">optimal selection</div>
              </div>
              <div className="border-2 border-gray-200 p-6 bg-white transition-all duration-300 hover:border-black hover:shadow-md">
                <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wide">ACTIVATION TIME</div>
                <div className="text-3xl font-mono font-bold transition-all duration-300" style={{ transition: "all 0.3s ease-out" }}>
                  {Math.round(metrics.activationTime)}ms
                </div>
                <div className="text-xs text-gray-500 font-mono">avg response</div>
              </div>
              <div className="border-2 border-gray-200 p-6 bg-white transition-all duration-300 hover:border-black hover:shadow-md">
                <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wide">COST SAVINGS</div>
                <div className="text-3xl font-mono font-bold transition-all duration-300" style={{ transition: "all 0.3s ease-out" }}>
                  {metrics.costSavings.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-500 font-mono">vs roaming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
