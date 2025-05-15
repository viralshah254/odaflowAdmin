import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth";
import { useUIStore } from "../stores/ui";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function AdminLayout() {
  const logout = useAuthStore((s) => s.logout);
  const { sidebarOpen, toggleSidebar } = useUIStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-neutral">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <div className="p-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">Odaflow Admin</span>
          <button onClick={toggleSidebar}>
            <XIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="mt-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-4 py-2 hover:bg-neutral/50 ${isActive ? "bg-neutral/50 font-semibold" : ""}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `block px-4 py-2 hover:bg-neutral/50 ${isActive ? "bg-neutral/50 font-semibold" : ""}`
            }
          >
            Users
          </NavLink>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 mt-4 text-red-600 hover:bg-neutral/50"
          >
            Log out
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <button onClick={toggleSidebar} className="md:hidden">
            <MenuIcon className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold">Welcome, Admin</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}