const Header: React.FC = () => {
    return (
        <header className="h-14 bg-white border-b flex items-center justify-between px-4">
        <div className="text-lg font-semibold text-slate-800">
            OnboardX
        </div>
        <div className="text-sm text-slate-600">
            Guest
        </div>
        </header>
    )
}

export default Header;