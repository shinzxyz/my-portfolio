"use client"

import { useState, useEffect, useRef, memo } from "react"
import { Volume2, VolumeX } from "lucide-react"

const BackgroundMusic = memo(function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true) // Start muted by default
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true) // Set to true by default to ensure button appears
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set initial volume
    audio.volume = 0.5

    // Preload audio but don't autoplay
    audio.preload = "auto" // Changed to auto for better loading

    const handleCanPlayThrough = () => {
      setIsLoaded(true)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setIsMuted(true)
    }

    const handlePlay = () => {
      setIsPlaying(true)
      setIsMuted(false)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    // Add event listeners
    audio.addEventListener("canplaythrough", handleCanPlayThrough)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    // Force isLoaded to true after a timeout as fallback
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    // Cleanup
    return () => {
      clearTimeout(timer)
      audio.removeEventListener("canplaythrough", handleCanPlayThrough)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)

      // Ensure audio is stopped when component unmounts
      audio.pause()
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      try {
        audio.muted = false
        await audio.play()
        setIsPlaying(true)
        setIsMuted(false)
      } catch (error) {
        console.log("Playback failed:", error)
        setIsPlaying(false)
        setIsMuted(true)
        audio.muted = true
      }
    } else {
      audio.muted = true
      audio.pause()
      setIsPlaying(false)
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="https://files.catbox.moe/kxu767.mp3" preload="auto" />

      {/* Music control button - responsive across all platforms */}
      <div className="fixed landscape:top-20 landscape:right-4 portrait:bottom-24 portrait:right-4 z-[9999]">
        <button
          onClick={togglePlayback}
          className="flex items-center justify-center gap-1.5 bg-black/80 hover:bg-black p-3 sm:p-2 rounded-full transition-all duration-300 border border-yellow-400/50 hover:border-yellow-400 shadow-lg group touch-manipulation min-w-[44px] min-h-[44px]"
          aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {isMuted || !isPlaying ? (
            <VolumeX className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
          )}
          <span className="text-xs text-white hidden group-hover:inline-block whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
            {isMuted || !isPlaying ? "Play Music" : "Pause Music"}
          </span>

          {/* Pulsing animation when muted to draw attention */}
          {(isMuted || !isPlaying) && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
          )}
        </button>
      </div>
    </>
  )
})

export default BackgroundMusic

