import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Splash from "./pages/Splash"
import Auth from "./pages/Auth"
import Onboarding from "./pages/Onboarding"
import Dashboard from "./pages/Dashboard"
import CloudComputers from "./pages/CloudComputers"
import Agents from "./pages/Agents"
import Workflows from "./pages/Workflows"
import Marketplace from "./pages/Marketplace"
import Settings from "./pages/Settings"
import MainShell from "./components/layout/MainShell"
import CloudComputerShell from "./components/layout/CloudComputerShell"
import DesktopHome from "./pages/desktop/DesktopHome"
import DesktopTerminal from "./pages/desktop/DesktopTerminal"
import DesktopFiles from "./pages/desktop/DesktopFiles"
import DesktopPlaceholder from "./pages/desktop/DesktopPlaceholder"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Main App Routes */}
        <Route path="/app" element={<MainShell />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="computers" element={<CloudComputers />} />
          <Route path="agents" element={<Agents />} />
          <Route path="workflows" element={<Workflows />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="settings" element={<Settings />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
        
        {/* Cloud Computer Routes */}
        <Route path="/desktop" element={<CloudComputerShell />}>
          <Route path="home" element={<DesktopHome />} />
          <Route path="files" element={<DesktopFiles />} />
          <Route path="chats" element={<DesktopPlaceholder title="Chats" />} />
          <Route path="agents" element={<DesktopPlaceholder title="Agents" />} />
          <Route path="workflows" element={<DesktopPlaceholder title="Workflows" />} />
          <Route path="integrations" element={<DesktopPlaceholder title="Integrations" />} />
          <Route path="space" element={<DesktopPlaceholder title="Space" />} />
          <Route path="skills" element={<DesktopPlaceholder title="Skills" />} />
          <Route path="hosting" element={<DesktopPlaceholder title="Hosting" />} />
          <Route path="datasets" element={<DesktopPlaceholder title="Datasets" />} />
          <Route path="system" element={<DesktopPlaceholder title="System" />} />
          <Route path="terminal" element={<DesktopTerminal />} />
          <Route path="billing" element={<DesktopPlaceholder title="Billing" />} />
          <Route path="resources" element={<DesktopPlaceholder title="Resources" />} />
          <Route path="bookmarks" element={<DesktopPlaceholder title="Bookmarks" />} />
          <Route path="settings" element={<DesktopPlaceholder title="Settings" />} />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
