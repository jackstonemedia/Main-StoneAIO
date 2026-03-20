import { NavLink, Outlet } from "react-router-dom"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Monitor, Bot, GitBranch, ShoppingBag, Settings, LogOut } from "lucide-react"

export default function MainShell() {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/app/dashboard' },
    { id: 'computers', label: 'Cloud Computers', icon: Monitor, path: '/app/computers' },
    { id: 'agents', label: 'Agents', icon: Bot, path: '/app/agents' },
    { id: 'workflows', label: 'Workflows', icon: GitBranch, path: '/app/workflows' },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag, path: '/app/marketplace' },
  ]

  return (
    <div className="flex h-screen w-full bg-white text-slate-900 font-sans overflow-hidden selection:bg-gray-200 selection:text-black">
      <aside className="w-[240px] bg-[#f9f9f9] border-r border-gray-200 flex flex-col shrink-0">
        <div className="h-14 flex items-center px-5 font-semibold text-slate-900 tracking-tight border-b border-gray-200/50">
          Nexus OS
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1 custom-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-colors",
                isActive ? "bg-gray-200/60 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-200/40 hover:text-gray-900"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
        <div className="p-3 border-t border-gray-200 flex flex-col gap-1">
          <NavLink to="/app/settings" className={({ isActive }) => cn("flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-colors", isActive ? "bg-gray-200/60 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-200/40 hover:text-gray-900")}>
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </NavLink>
          <button 
            onClick={() => window.location.href = '/auth'}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-[13px] text-red-600 hover:bg-red-50 transition-colors w-full text-left"
          >
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col relative bg-[#fafafa] overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}
