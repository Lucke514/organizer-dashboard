import { Sidebar } from '@/pages/dashboard/Sidebar';
import { useState } from 'react';
import { Outlet} from 'react-router';

export default function MainLayout() {
    // Estado para manejar el colapso de la Sidebar
    const [collapsed, setCollapsed] = useState(false);

    // -> Render
    return (
        <main className="flex  w-screen h-screen max-h-screen">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <section className='py-2 px-2 w-full max-w-full h-full overflow-auto'>
                <Outlet />
            </section>
        </main>
    )
}