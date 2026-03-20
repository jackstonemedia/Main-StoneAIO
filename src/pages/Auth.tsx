import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Auth() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Always navigate to onboarding for testing purposes
    navigate("/onboarding")
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#050505] p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-80" />
      
      {/* Window Glow Effect - Isolates bright spots (windows) and blurs them to create a neon bloom */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
        style={{ filter: 'contrast(2) brightness(1.2) blur(16px)' }}
      />
      
      <div className="absolute inset-0 z-0 bg-black/20 backdrop-blur-[12px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-md"
      >
        <div className="mb-12 text-center">
          <h1 className="bold-title text-4xl sm:text-5xl">STONE AIO</h1>
          <p className="neutral-subtitle mt-2 text-xs sm:text-sm">Your 24/7 AI Agent Workforce</p>
        </div>

        <div className="glass-panel overflow-hidden rounded-2xl p-1 shadow-2xl">
          {/* Tab Switcher */}
          <div className="flex rounded-xl bg-white/5 p-1">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold tracking-tight transition-all ${
                activeTab === "signin" ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white/60"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold tracking-tight transition-all ${
                activeTab === "signup" ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white/60"
              }`}
            >
              Create Account
            </button>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.form
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === "signin" ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === "signin" ? 10 : -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* OAuth Section */}
                <div className="flex gap-3">
                  <Button type="button" variant="outline" className="flex-1 border-white/5 bg-white/5 hover:bg-white/10 font-bold">
                    Google
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 border-white/5 bg-white/5 hover:bg-white/10 font-bold">
                    GitHub
                  </Button>
                </div>

                <div className="relative py-2 flex flex-col items-center justify-center">
                  <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Or continue with email</span>
                  <div className="h-px w-full bg-white/5" />
                </div>

                {activeTab === "signup" && (
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <Input placeholder="John Doe" required className="bg-white/5 border-white/5 focus:border-white/20 transition-all" />
                  </div>
                )}
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-white/5 border-white/5 focus:border-white/20 transition-all" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Password</label>
                    {activeTab === "signin" && (
                      <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Forgot?</a>
                    )}
                  </div>
                  <Input type="password" placeholder="••••••••" required className="bg-white/5 border-white/5 focus:border-white/20 transition-all" />
                </div>

                <Button type="submit" className="mt-6 w-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest text-xs h-12">
                  {activeTab === "signin" ? "Sign In" : "Create Account"}
                </Button>
              </motion.form>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-10 text-center text-[10px] font-bold uppercase tracking-widest text-white/20">
          By continuing, you agree to our <a href="#" className="text-white/40 hover:text-white underline underline-offset-4">Terms</a> and <a href="#" className="text-white/40 hover:text-white underline underline-offset-4">Privacy</a>.
        </p>
      </motion.div>
    </div>
  )
}
