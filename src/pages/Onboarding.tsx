import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, ChevronRight, ChevronLeft, User, Briefcase, Code, Cpu, MessageSquare, Database, Headset, Calendar, Mail } from "lucide-react"

type Path = "build" | "buy" | null

export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [path, setPath] = useState<Path>(null)
  const [selections, setSelections] = useState<string[]>([])
  const [workspaceName, setWorkspaceName] = useState("")
  const [role, setRole] = useState("")
  const [avatar, setAvatar] = useState(0)
  const [defaultView, setDefaultView] = useState("builder")

  // Generate stars once so they don't jump around on re-renders
  const stars = React.useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 2}s`,
    }))
  }, [])

  const totalSteps = 5

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const toggleSelection = (item: string) => {
    setSelections((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const handleLaunch = () => {
    navigate("/app/dashboard")
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center text-center"
          >
            <span className="mb-4 text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
              Welcome to Stone AIO
            </span>
            <h2 className="mb-6 bold-title text-3xl sm:text-4xl">
              The future of work is autonomous.
            </h2>
            <p className="mb-10 max-w-md text-xs font-bold tracking-widest text-white/30 uppercase leading-relaxed">
              Set up your workspace and deploy your first AI agent in minutes.
            </p>
            <Button size="lg" onClick={nextStep} className="w-full max-w-sm bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.2em] text-xs h-14 shadow-2xl">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
              Step 1 of 4
            </span>
            <h2 className="mb-2 bold-title text-2xl uppercase">
              What brings you to Stone AIO?
            </h2>
            <p className="mb-8 text-[10px] font-bold tracking-widest text-white/20 uppercase">
              Choose your primary goal to help us tailor your experience.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card
                className={cn(
                  "glass-card cursor-pointer p-8 transition-all hover:bg-white/5",
                  path === "build" ? "border-white bg-white/5" : "border-white/5"
                )}
                onClick={() => {
                  setPath("build")
                  setDefaultView("builder")
                }}
              >
                <Cpu className={cn("mb-6 h-10 w-10 transition-colors", path === "build" ? "text-white" : "text-white/20")} />
                <h3 className="mb-2 font-display text-sm font-black tracking-widest uppercase">Build AI Agents</h3>
                <p className="text-[10px] font-bold tracking-wider text-white/30 uppercase leading-normal">
                  Create custom agents and complex workflows from scratch.
                </p>
              </Card>
              <Card
                className={cn(
                  "glass-card cursor-pointer p-8 transition-all hover:bg-white/5",
                  path === "buy" ? "border-white bg-white/5" : "border-white/5"
                )}
                onClick={() => {
                  setPath("buy")
                  setDefaultView("marketplace")
                }}
              >
                <Briefcase className={cn("mb-6 h-10 w-10 transition-colors", path === "buy" ? "text-white" : "text-white/20")} />
                <h3 className="mb-2 font-display text-sm font-black tracking-widest uppercase">Use Pre-Built Agents</h3>
                <p className="text-[10px] font-bold tracking-wider text-white/30 uppercase leading-normal">
                  Browse and deploy ready-made agents from our marketplace.
                </p>
              </Card>
            </div>
            <div className="mt-12 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-[0.2em] text-[10px] font-black text-white/40 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={nextStep} disabled={!path} className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.2em] text-[10px] px-8 h-12">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )
      case 3:
        const isBuild3 = path === "build"
        const options3 = isBuild3
          ? ["My own business", "Client projects", "SaaS product", "Sales & outreach", "Marketing & content", "Research & analysis"]
          : ["Real Estate", "Healthcare", "E-Commerce", "Finance & Insurance", "Agency / Marketing", "SaaS / Tech"]
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
              Step 2 of 4 · {isBuild3 ? "Builder Path" : "Browse Path"}
            </span>
            <h2 className="mb-2 bold-title text-2xl uppercase">
              {isBuild3 ? "What are you building for?" : "What industry are you in?"}
            </h2>
            <p className="mb-8 text-[10px] font-bold tracking-widest text-white/20 uppercase">Select all that apply.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {options3.map((opt) => (
                <div
                  key={opt}
                  onClick={() => toggleSelection(opt)}
                  className={cn(
                    "glass-card flex cursor-pointer items-center rounded-xl p-5 transition-all hover:bg-white/5",
                    selections.includes(opt) ? "border-white bg-white/5" : "border-white/5"
                  )}
                >
                  <div className={cn("mr-4 flex h-6 w-6 items-center justify-center rounded-lg border-2 transition-all", selections.includes(opt) ? "border-white bg-white text-black" : "border-white/10")}>
                    {selections.includes(opt) && <Check className="h-4 w-4" />}
                  </div>
                  <span className="text-[10px] font-black tracking-[0.15em] uppercase">{opt}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-[0.2em] text-[10px] font-black text-white/40 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={nextStep} disabled={selections.length === 0} className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.2em] text-[10px] px-8 h-12">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )
      case 4:
        const isBuild4 = path === "build"
        const options4 = isBuild4
          ? [
              { id: "voice", label: "Voice Agents", icon: Headset },
              { id: "content", label: "Content Agents", icon: MessageSquare },
              { id: "outreach", label: "Outreach Agents", icon: Mail },
              { id: "data", label: "Data Agents", icon: Database },
              { id: "support", label: "Support Agents", icon: User },
              { id: "custom", label: "Custom Workflow", icon: Cpu },
            ]
          : [
              { id: "voice_ai", label: "Voice AI Agents", icon: Headset },
              { id: "chat", label: "Chat & Support", icon: MessageSquare },
              { id: "appt", label: "Appointment Setter", icon: Calendar },
              { id: "lead", label: "Lead Qualifier", icon: User },
              { id: "copy", label: "Content & Copy", icon: Code },
              { id: "email", label: "Email Automation", icon: Mail },
            ]
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
              Step 3 of 4 · {isBuild4 ? "Builder Path" : "Browse Path"}
            </span>
            <h2 className="mb-2 bold-title text-2xl uppercase">
              {isBuild4 ? "What kinds of agents are you planning to build?" : "What type of agents are you interested in?"}
            </h2>
            <p className="mb-8 text-[10px] font-bold tracking-widest text-white/20 uppercase">Select all that apply.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {options4.map((opt) => {
                const Icon = opt.icon
                return (
                  <div
                    key={opt.id}
                    onClick={() => toggleSelection(opt.id)}
                    className={cn(
                      "glass-card flex cursor-pointer items-center rounded-xl p-5 transition-all hover:bg-white/5",
                      selections.includes(opt.id) ? "border-white bg-white/5" : "border-white/5"
                    )}
                  >
                    <Icon className={cn("mr-4 h-6 w-6 transition-colors", selections.includes(opt.id) ? "text-white" : "text-white/20")} />
                    <span className="text-[10px] font-black tracking-[0.15em] uppercase">{opt.label}</span>
                    <div className="ml-auto">
                      <div className={cn("flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all", selections.includes(opt.id) ? "border-white bg-white text-black" : "border-white/10")}>
                        {selections.includes(opt.id) && <Check className="h-4 w-4" />}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-12 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-[0.2em] text-[10px] font-black text-white/40 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={nextStep} className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.2em] text-[10px] px-8 h-12">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )
      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
              Step 4 of 4 · Almost There
            </span>
            <h2 className="mb-2 bold-title text-2xl uppercase">
              Set up your workspace.
            </h2>
            <p className="mb-8 text-[10px] font-bold tracking-widest text-white/20 uppercase">
              Personalize your Stone AIO environment.
            </p>
            
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Workspace Name</label>
                  <Input 
                    placeholder="Acme Corp AI" 
                    value={workspaceName} 
                    onChange={(e) => setWorkspaceName(e.target.value)} 
                    className="glass-card uppercase tracking-widest text-[10px] font-bold h-12 px-5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Your Role</label>
                  <Input 
                    placeholder="Founder, Developer, etc." 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    className="glass-card uppercase tracking-widest text-[10px] font-bold h-12 px-5"
                  />
                </div>
              </div>
 
              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Choose Avatar</label>
                <div className="flex gap-4">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      onClick={() => setAvatar(i)}
                      className={cn(
                        "h-14 w-14 overflow-hidden rounded-full border-2 transition-all",
                        avatar === i ? "border-white ring-4 ring-white/10" : "border-transparent opacity-30 hover:opacity-100"
                      )}
                    >
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}&backgroundColor=b6e3f4`} alt={`Avatar ${i}`} />
                    </button>
                  ))}
                </div>
              </div>
 
              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Default View</label>
                <div className="grid grid-cols-3 gap-3">
                  {["builder", "computer", "marketplace"].map((view) => (
                    <button
                      key={view}
                      onClick={() => setDefaultView(view)}
                      className={cn(
                        "glass-card rounded-xl px-4 py-3 text-[10px] font-black tracking-[0.1em] uppercase transition-all",
                        defaultView === view ? "border-white bg-white text-black" : "border-white/5 text-white/40 hover:bg-white/5"
                      )}
                    >
                      {view === "builder" ? "Builder" : view === "computer" ? "Cloud" : "Market"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
 
            <div className="mt-12 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-[0.2em] text-[10px] font-black text-white/40 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleLaunch} disabled={!workspaceName} className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.2em] text-[10px] px-8 h-12">
                Enter Workspace
              </Button>
            </div>
          </motion.div>
        )
    }
  }
 
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#0a0a0a] p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]" />
      
      {/* Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
              '--duration': star.duration,
              '--delay': star.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>
 
      <div className="z-10 w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-center gap-3">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 w-10 rounded-full transition-all duration-700",
                i + 1 === step ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]" : i + 1 < step ? "bg-white/40" : "bg-white/5"
              )}
            />
          ))}
        </div>
 
        <div className="glass-card overflow-hidden rounded-[2.5rem] p-10 sm:p-16 shadow-2xl">
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
