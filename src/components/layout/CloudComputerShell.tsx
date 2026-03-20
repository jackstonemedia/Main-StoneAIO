import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { 
  Home, Folder, MessageSquare, Users, GitBranch, Box, Zap, 
  ChevronDown, Globe, Database, Monitor, Terminal, CreditCard, 
  Info, Bookmark, Settings, Search, Plus, PanelLeftClose, Blocks, ArrowLeft
} from "lucide-react"

export default function CloudComputerShell() {
  const navigate = useNavigate();
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/desktop/home', exact: true },
    { id: 'files', label: 'Files', icon: Folder, path: '/desktop/files', action: Search },
    { id: 'chats', label: 'Chats', icon: MessageSquare, path: '/desktop/chats' },
    { id: 'agents', label: 'Agents', icon: Users, path: '/desktop/agents' },
    { id: 'workflows', label: 'Workflows', icon: GitBranch, path: '/desktop/workflows' },
    { id: 'integrations', label: 'Integrations', icon: Blocks, path: '/desktop/integrations' },
    { id: 'space', label: 'Space', icon: Box, path: '/desktop/space' },
    { id: 'skills', label: 'Skills', icon: Zap, path: '/desktop/skills' },
    { id: 'more', label: 'More', icon: ChevronDown, path: '#', isDropdown: true },
    { id: 'hosting', label: 'Hosting', icon: Globe, path: '/desktop/hosting' },
    { id: 'datasets', label: 'Datasets', icon: Database, path: '/desktop/datasets' },
    { id: 'system', label: 'System', icon: Monitor, path: '/desktop/system' },
    { id: 'terminal', label: 'Terminal', icon: Terminal, path: '/desktop/terminal' },
    { id: 'billing', label: 'Billing', icon: CreditCard, path: '/desktop/billing' },
    { id: 'resources', label: 'Resources', icon: Info, path: '/desktop/resources' },
  ]

  const bottomNavItems = [
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, path: '/desktop/bookmarks' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/desktop/settings' },
  ]

  return (
    <div className="flex h-screen w-full bg-white text-slate-900 font-sans overflow-hidden selection:bg-gray-200 selection:text-black">
      <aside className="w-[240px] bg-[#f9f9f9] border-r border-gray-200 flex flex-col shrink-0">
        <div className="h-14 flex items-center justify-between px-4 border-b border-gray-200/50">
          <button 
            onClick={() => navigate('/app/dashboard')}
            className="flex items-center gap-2 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit Desktop
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2 px-3 flex flex-col gap-0.5 custom-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.exact}
              className={({ isActive }) => cn(
                "group flex items-center justify-between px-3 py-2 rounded-md text-[13px] transition-colors",
                isActive && item.path !== '#' ? "bg-gray-200/60 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-200/40 hover:text-gray-900"
              )}
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-4 h-4", isActive && item.path !== '#' ? "text-gray-700" : "text-gray-400 group-hover:text-gray-600")} strokeWidth={2} />
                    <span>{item.label}</span>
                  </div>
                  {item.action && (
                    <button className="text-gray-400 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      <item.action className="w-3.5 h-3.5" />
                    </button>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="p-3 border-t border-gray-200 flex flex-col gap-0.5">
          {bottomNavItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => cn(
                "group flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-colors",
                isActive ? "bg-gray-200/60 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-200/40 hover:text-gray-900"
              )}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn("w-4 h-4", isActive ? "text-gray-700" : "text-gray-400 group-hover:text-gray-600")} strokeWidth={2} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative bg-white overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}
