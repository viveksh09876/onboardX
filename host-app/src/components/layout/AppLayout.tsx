import Sidebar from './Sidebar';
import Header from './Header';


interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-slate-100">
            <Sidebar />
            <div className='flex flex-col flex-1'>
                <Header />
                <main className="flex-1 overflow-auto p-4">
                    {children}
                </main>
            </div>
        </div>
    )
};

export default AppLayout;