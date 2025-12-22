import { useAppSelector } from "../../store/hooks";
import { ROLES, hasRole } from "../../utils/roles";

const Sidebar: React.FC = () => {
  const userRole = useAppSelector((state) => state.auth.user?.role);

  return (
    <aside className="w-64 h-full bg-slate-900 text-white flex flex-col">
      <div className="h-14 flex items-center px-4 text-xl font-bold border-b border-slate-700">
        OnboardX
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-2">
        {/* Common */}
        <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
          Dashboard
        </div>

        {/* USER */}
        {hasRole(userRole, [ROLES.USER]) && (
          <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
            Main Application
          </div>
        )}

        {/* ANALYST */}
        {hasRole(userRole, [ROLES.ANALYST]) && (
          <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
            Analyst Portal
          </div>
        )}

        {/* QC */}
        {hasRole(userRole, [ROLES.QC]) && (
          <div className="p-2 rounded cursor-pointer hover:bg-slate-700">
            QC Portal
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;