"use client"

import { useState, useEffect } from "react"
import { Brain, Zap, Settings } from "lucide-react"

export default function AISection() {
  const [activePanel, setActivePanel] = useState(0)
  const [processingData, setProcessingData] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [activePath, setActivePath] = useState({ input: 0, hidden1: 0, hidden2: 0, output: 0 })
  const [displayedMetrics, setDisplayedMetrics] = useState({
    activeUsers: 1243,
    privacyScore: 99.8,
    transactionTime: 47,
    metadataElimination: 100.0,
  })
  const [isVisible, setIsVisible] = useState(false)

  const panels = [
    {
      title: "STEALTH TRANSACTION ROUTING",
      description: "AI-powered real-time transaction routing that scrambles origins and destinations, ensuring unlinkable blockchain activity",
      metrics: ["Multi-hop Routing", "Origin Obfuscation", "Zero Metadata", "99.9% Anonymity"],
      processes: ["Transaction Analysis", "Route Selection", "Relay Assignment", "Execution"],
      icon: Settings,
    },
    {
      title: "PRIVACY INTELLIGENCE",
      description: "Zero-knowledge proof verification and AI-driven threat detection ensuring encrypted, private communications and transactions",
      metrics: ["zk-Proof Validation", "E2E Encrypted", "Threat Detection", "DID Support"],
      processes: ["Identity Obfuscation", "Privacy Check", "Encryption Layer", "Secure Execution"],
      icon: Brain,
    },
    {
      title: "METADATA ELIMINATION",
      description: "Advanced pattern analysis that identifies and eliminates metadata leaks across all transaction and communication layers",
      metrics: ["100% Metadata Free", "Auto-detection", "Pattern Analysis", "Leak Prevention"],
      processes: ["Metadata Scan", "Pattern Analysis", "Elimination", "Verification"],
      icon: Zap,
    },
  ]

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById("ai")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Animate displayed metrics with smooth counting (only runs once when visible)
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const startTime = Date.now()
    const startValues = {
      activeUsers: 0,
      privacyScore: 0,
      transactionTime: 0,
      metadataElimination: 0,
    }

    // Use initial metrics values for animation
    const targetMetrics = {
      activeUsers: 1243,
      privacyScore: 99.8,
      transactionTime: 47,
      metadataElimination: 100.0,
    }

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

      const eased = easeOutCubic(progress)

      setDisplayedMetrics({
        activeUsers: Math.floor(startValues.activeUsers + (targetMetrics.activeUsers - startValues.activeUsers) * eased),
        privacyScore: startValues.privacyScore + (targetMetrics.privacyScore - startValues.privacyScore) * eased,
        transactionTime: Math.floor(startValues.transactionTime + (targetMetrics.transactionTime - startValues.transactionTime) * eased),
        metadataElimination: startValues.metadataElimination + (targetMetrics.metadataElimination - startValues.metadataElimination) * eased,
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // After initial animation, set to final values
        setDisplayedMetrics(targetMetrics)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible])

  // Only update processing indicator
  useEffect(() => {
    const processingInterval = setInterval(() => {
      setProcessingData(true)
      setTimeout(() => setProcessingData(false), 1500)
    }, 5000)

    return () => clearInterval(processingInterval)
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
    <section id="ai" className="py-24 sm:py-32 bg-[#0a0a0a] relative z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Animated neural network pattern */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.1)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => {
            const x1 = (i * 7) % 100
            const y1 = (i * 11) % 100
            const x2 = ((i * 7) + 20) % 100
            const y2 = ((i * 11) + 15) % 100
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                opacity="0.3"
                style={{
                  animation: `neuralLinePulse ${3 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            )
          })}
        </svg>

        {/* Floating data particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                left: `${(i * 5.3) % 100}%`,
                top: `${(i * 7.7) % 100}%`,
                opacity: 0.1 + (i % 4) * 0.05,
                animation: `dataFlow ${12 + (i % 8)}s linear infinite`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: "0 0 4px rgba(255,255,255,0.5)"
              }}
            />
          ))}
        </div>

        {/* Pulsing orbs */}
        <div 
          className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
            animation: "pulseOrb 6s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)",
            animation: "pulseOrb 8s ease-in-out infinite 1s"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light tracking-wider mb-6 font-mono text-white">
            MOON<span className="font-bold">WARE</span> PRIVACY
          </h2>
          <div className="w-24 sm:w-32 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            AI-driven privacy protection, stealth transaction routing, and metadata elimination for complete anonymity on Solana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            {panels.map((panel, index) => {
              const IconComponent = panel.icon
              return (
                <div
                  key={index}
                  className={`border-2 p-6 sm:p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    activePanel === index ? "border-white bg-[#1a1a1a]" : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => setActivePanel(index)}
                >
                  {activePanel === index && processingData && (
                    <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                      
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent size={24} className="text-gray-400" />
                      <h3 className="font-mono font-bold text-xl text-white">{panel.title}</h3>
                    </div>
                    <div
                      className={`w-4 h-4 ${activePanel === index ? "bg-white animate-pulse" : "bg-gray-600"}`}
                    ></div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{panel.description}</p>

                  {activePanel === index && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {panel.metrics.map((metric, i) => (
                          <span key={i} className="bg-white text-black px-3 py-2 text-xs font-mono text-center">
                            {metric}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div className="text-sm font-mono text-gray-400 mb-3">PROCESS FLOW:</div>
                        {panel.processes.map((process, i) => (
                          <div key={i} className="flex items-center space-x-3 text-sm">
                            <div
                              className={`w-3 h-3 ${processingData && i <= 2 ? "bg-white animate-pulse" : "bg-gray-600"}`}
                            ></div>
                            <span className="font-mono text-gray-300">{process}</span>
                            {i < panel.processes.length - 1 && <div className="flex-1 h-px bg-white/20 ml-2"></div>}
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
            <div className="relative border-2 border-white/20 bg-[#1a1a1a] p-6 sm:p-8 transition-all duration-500 hover:border-white hover:shadow-xl group overflow-hidden">
              {/* Animated Background for Privacy Network Activity */}
              <div className="absolute inset-0 opacity-10">
                {/* Animated network activity lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                  {[...Array(10)].map((_, i) => {
                    const x1 = (i * 10) % 100
                    const y1 = 20 + (i % 3) * 30
                    const x2 = ((i * 10) + 20) % 100
                    const y2 = 20 + ((i + 1) % 3) * 30
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
                        style={{
                          animation: `activityLineDash ${2 + (i % 2)}s linear infinite, activityLineOpacity ${3 + (i % 2)}s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    )
                  })}
                </svg>

                {/* Activity particles */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${(i * 8.3) % 100}%`,
                      top: `${(i * 8.3) % 100}%`,
                      opacity: 0.1 + (i % 3) * 0.05,
                      animation: `activityParticle ${6 + (i % 4)}s linear infinite`,
                      animationDelay: `${i * 0.15}s`,
                      boxShadow: "0 0 3px rgba(255,255,255,0.6)"
                    }}
                  />
                ))}

                {/* Activity orb */}
                <div 
                  className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-2xl opacity-12"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    animation: "activityOrb 5s ease-in-out infinite",
                    transform: "translate(-50%, -50%)"
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-mono font-bold text-lg text-white">PRIVACY NETWORK ACTIVITY</h4>
                <div className="text-xs font-mono text-gray-400">
                  {hoveredNode ? (
                    <span className="text-white font-bold">
                      {hoveredNode.toUpperCase().replace("-", " NODE ")}
                    </span>
                  ) : (
                    <span>HOVER TO EXPLORE</span>
                  )}
                </div>
              </div>
              <div className="relative h-[360px] sm:h-[460px] pb-10">
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  viewBox="0 0 460 360"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="nodeGlow">
                      <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                      <stop offset="70%" stopColor="#fff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="nodeGlowStrong">
                      <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                      <stop offset="50%" stopColor="#fff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
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
                            fill="#fff"
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
                            fill="#fff"
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
                            fill="#fff"
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
                            fill="#fff"
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
                            stroke="#fff"
                            strokeWidth={isActive ? 2.5 : 1}
                            opacity={isActive ? 0.7 : 0.08}
                            style={{ transition: "all 0.4s ease" }}
                          />
                          {isActive && (
                            <>
                              <circle r="3" fill="#fff" opacity="0.9">
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
                            stroke="#fff"
                            strokeWidth={isActive ? 2.5 : 1}
                            opacity={isActive ? 0.7 : 0.08}
                            style={{ transition: "all 0.4s ease" }}
                          />
                          {isActive && (
                            <>
                              <circle r="3" fill="#fff" opacity="0.9">
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
                            stroke="#fff"
                            strokeWidth={isActive ? 2.5 : 1}
                            opacity={isActive ? 0.7 : 0.08}
                            style={{ transition: "all 0.4s ease" }}
                          />
                          {isActive && (
                            <>
                              <circle r="3" fill="#fff" opacity="0.9">
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

                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center pt-4 px-2 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-300 uppercase tracking-wider transition-all duration-300 group-hover:text-white mb-1">
                      INPUT
                    </div>
                    <div className="text-xs text-gray-500">Transaction Request</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-300 uppercase tracking-wider transition-all duration-300 group-hover:text-white mb-1">
                      HIDDEN
                    </div>
                    <div className="text-xs text-gray-500">Route Obfuscation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-300 uppercase tracking-wider transition-all duration-300 group-hover:text-white mb-1">
                      HIDDEN
                    </div>
                    <div className="text-xs text-gray-500">Privacy Check</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-bold text-gray-300 uppercase tracking-wider transition-all duration-300 group-hover:text-white mb-1">
                      OUTPUT
                    </div>
                    <div className="text-xs text-gray-500">Stealth Execution</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div 
                className={`border-2 border-white/20 p-6 bg-[#1a1a1a] transition-all duration-700 hover:border-white hover:shadow-xl hover:shadow-white/20 relative overflow-hidden group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ 
                  transitionDelay: isVisible ? "0ms" : "0ms",
                  transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease"
                }}
              >
                {/* Corner accents that animate on hover */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ animation: "shimmer 3s ease-in-out infinite" }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-300">ACTIVE USERS</div>
                  <div 
                    className="text-3xl sm:text-4xl font-mono font-bold text-white transition-all duration-500"
                    style={{ 
                      textShadow: isVisible ? "0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)" : "none",
                      transition: "text-shadow 0.8s ease-out, transform 0.3s ease",
                      animation: isVisible ? "metricGlow 3s ease-in-out infinite" : "none"
                    }}
                  >
                    {displayedMetrics.activeUsers.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-2 transition-colors duration-300 group-hover:text-gray-400">protected now</div>
                </div>
              </div>
              
              <div 
                className={`border-2 border-white/20 p-6 bg-[#1a1a1a] transition-all duration-700 hover:border-white hover:shadow-xl hover:shadow-white/20 relative overflow-hidden group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ 
                  transitionDelay: isVisible ? "150ms" : "0ms",
                  transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease"
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ animation: "shimmer 3s ease-in-out infinite 0.5s" }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-300">PRIVACY SCORE</div>
                  <div 
                    className="text-3xl sm:text-4xl font-mono font-bold text-white transition-all duration-500"
                    style={{ 
                      textShadow: isVisible ? "0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)" : "none",
                      transition: "text-shadow 0.8s ease-out, transform 0.3s ease",
                      animation: isVisible ? "metricGlow 3s ease-in-out infinite 0.5s" : "none"
                    }}
                  >
                    {displayedMetrics.privacyScore.toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-2 transition-colors duration-300 group-hover:text-gray-400">anonymity level</div>
                </div>
              </div>
              
              <div 
                className={`border-2 border-white/20 p-6 bg-[#1a1a1a] transition-all duration-700 hover:border-white hover:shadow-xl hover:shadow-white/20 relative overflow-hidden group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ 
                  transitionDelay: isVisible ? "300ms" : "0ms",
                  transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease"
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ animation: "shimmer 3s ease-in-out infinite 1s" }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-300">TRANSACTION TIME</div>
                  <div 
                    className="text-3xl sm:text-4xl font-mono font-bold text-white transition-all duration-500"
                    style={{ 
                      textShadow: isVisible ? "0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)" : "none",
                      transition: "text-shadow 0.8s ease-out, transform 0.3s ease",
                      animation: isVisible ? "metricGlow 3s ease-in-out infinite 1s" : "none"
                    }}
                  >
                    {displayedMetrics.transactionTime}ms
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-2 transition-colors duration-300 group-hover:text-gray-400">avg response</div>
                </div>
              </div>
              
              <div 
                className={`border-2 border-white/20 p-6 bg-[#1a1a1a] transition-all duration-700 hover:border-white hover:shadow-xl hover:shadow-white/20 relative overflow-hidden group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ 
                  transitionDelay: isVisible ? "450ms" : "0ms",
                  transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease"
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ animation: "shimmer 3s ease-in-out infinite 1.5s" }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-300">METADATA FREE</div>
                  <div 
                    className="text-3xl sm:text-4xl font-mono font-bold text-white transition-all duration-500"
                    style={{ 
                      textShadow: isVisible ? "0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)" : "none",
                      transition: "text-shadow 0.8s ease-out, transform 0.3s ease",
                      animation: isVisible ? "metricGlow 3s ease-in-out infinite 1.5s" : "none"
                    }}
                  >
                    {displayedMetrics.metadataElimination.toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-2 transition-colors duration-300 group-hover:text-gray-400">elimination rate</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
