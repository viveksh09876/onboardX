
const Sidebar: React.FC = () => {
    return (
      <aside className="w-64 h-full bg-slate-900 text-white flex flex-col">
        <div className="h-14 flex items-center px-4 text-xl font-bold border-b border-slate-700">
          OnboardX
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2">
          <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
            Dashboard
          </div>

          <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
            Main Application
          </div>

          <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
            Analyst Portal
          </div>

          <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
            QC Portal
          </div>
        </nav>
      </aside>
    )
}

export default Sidebar;