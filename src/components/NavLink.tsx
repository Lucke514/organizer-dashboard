import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  collapsed: boolean;
  icon: LucideIcon;
  to: string;
  children: React.ReactNode;
}

export function NavLink({ collapsed, icon: Icon, to, children }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground',
          'hover:bg-accent hover:text-accent-foreground',
          isActive && 'bg-accent text-accent-foreground',
          collapsed && 'justify-center'
        )
      }
    >
      <Icon size={20} />
      {!collapsed && <span>{children}</span>}
    </RouterNavLink>
  );
}