import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { LayoutDashboard, BarChart3, Users, Settings, ChevronRight, ChevronLeft, UserPlus, Contact, Users2, UserPen } from 'lucide-react';
import { NavLink } from '@/pages/NavLink';
import { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
    const [usersOpen, setUsersOpen] = useState(false);

    return (
        <div
            className={cn(
                'relative border-r bg-background transition-all duration-300 ease-in-out',
                collapsed ? 'w-16' : 'w-64'
            )}
        >
            <div className="flex h-16 items-center justify-between px-4">
                <h2 className={cn('text-lg font-semibold', collapsed && 'hidden')}>Dashboard</h2>
                <Button
                    size="icon"
                    className="h-8 w-8 rounded-full bg-primary p-2"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? (
                        <ChevronRight size={16} />
                    ) : (
                        <ChevronLeft size={16} />
                    )}
                </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-4rem)]">
                <nav className="flex flex-col gap-2 p-2">
                    <NavLink collapsed={collapsed} icon={UserPen} to="/profile">
                        Profile
                    </NavLink>
                    <NavLink collapsed={collapsed} icon={LayoutDashboard} to="/">
                        Dashboard
                    </NavLink>
                    <NavLink collapsed={collapsed} icon={BarChart3} to="/analytics">
                        Analytics
                    </NavLink>
                    <Collapsible
                        open={usersOpen}
                        onOpenChange={setUsersOpen}
                        className={cn('space-y-2 ', collapsed && 'items-center')}
                    >
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className={cn(
                                    'w-full justify-start bg-white dark:bg-transparent',
                                    collapsed && 'justify-center px-2'
                                )}
                            >
                                <Users className={cn('h-5 w-5', !collapsed && 'mr-2')} />
                                {!collapsed && <span>Users</span>}
                                {!collapsed && (
                                    <ChevronRight
                                        className={cn(
                                            'ml-auto h-4 w-4 transition-transform duration-200',
                                            usersOpen && 'rotate-90'
                                        )}
                                    />
                                )}
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className={cn('space-y-2 bg-secondary rounded-md p-2', collapsed && 'hidden')}>
                            <NavLink collapsed={collapsed} icon={UserPlus} to="/users/invite">
                                Invite
                            </NavLink>
                            <NavLink collapsed={collapsed} icon={Contact} to="/users/contacts">
                                Contacts
                            </NavLink>
                            <NavLink collapsed={collapsed} icon={Users2} to="/users/team">
                                Team
                            </NavLink>
                        </CollapsibleContent>
                    </Collapsible>
                    <NavLink collapsed={collapsed} icon={Settings} to="/settings">
                        Settings
                    </NavLink>
                </nav>
            </ScrollArea>
        </div>
    );
}
