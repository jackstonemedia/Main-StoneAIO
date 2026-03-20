import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth")
    }, 4500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-100" />
      
      {/* Window Glow Effect - Now just a brightness boost without blur */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
        style={{ filter: 'contrast(1.5) brightness(1.5)' }}
      />
      
      <div className="absolute inset-0 z-0 bg-white/10" />

      {/* Reflective Glare Overlay */}
      <div className="glare-overlay" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1 
          className="bold-title text-6xl sm:text-8xl"
        >
          STONE AIO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="neutral-subtitle mt-4 text-sm sm:text-base"
        >
          Your 24/7 AI Agent Workforce
        </motion.p>
      </motion.div>

      {/* Retro Subtle Loading Bar */}
      <motion.div
        className="absolute bottom-12 z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  )
}
