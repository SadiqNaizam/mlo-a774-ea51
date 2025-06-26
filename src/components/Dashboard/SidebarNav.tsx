import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart4, LayoutDashboard, FileText, PieChart, Database, Settings, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarNavProps {
  className?: string;
}

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '#', active: true },
  { 
    name: 'Reports', 
    icon: FileText, 
    href: '#', 
    subItems: [
      { name: 'Daily Reports', href: '#' },
      { name: 'Weekly Reports', href: '#' },
      { name: 'Monthly Reports', href: '#' },
    ]
  },
  { 
    name: 'Analytics', 
    icon: PieChart, 
    href: '#',
    subItems: [
      { name: 'Sales', href: '#' },
      { name: 'Traffic', href: '#' },
      { name: 'User Behavior', href: '#' },
    ]
  },
  { 
    name: 'Data Sources', 
    icon: Database, 
    href: '#',
    subItems: [
      { name: 'API Keys', href: '#' },
      { name: 'Integrations', href: '#' },
    ]
  },
  { 
    name: 'Setting', 
    icon: Settings, 
    href: '#',
    subItems: [
      { name: 'Profile', href: '#' },
      { name: 'Billing', href: '#' },
      { name: 'Notifications', href: '#' },
    ]
  },
  { 
    name: 'Help', 
    icon: HelpCircle, 
    href: '#',
    subItems: [
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
    ]
  },
];

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  return (
    <nav className={cn('flex h-full flex-col bg-sidebar text-sidebar-foreground', className)}>
      <div className="flex items-center gap-2 p-4 pt-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
          <BarChart4 className="h-5 w-5" />
        </div>
        <h1 className="text-xl font-bold">DataAI</h1>
      </div>
      <div className="flex-1 space-y-2 p-2 pt-4">
        <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full">
          {navItems.map((item) => 
            item.subItems ? (
              <AccordionItem key={item.name} value={item.name} className="border-b-0">
                <AccordionTrigger className="hover:no-underline hover:bg-white/10 rounded-md p-2 text-sm font-medium justify-start gap-2 [&[data-state=open]>svg:last-child]:rotate-0">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 ml-auto text-white/50" />
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-0">
                  <div className="pl-7 flex flex-col space-y-1">
                    {item.subItems.map(subItem => (
                       <a
                          key={subItem.name}
                          href={subItem.href}
                          className="text-white/80 hover:text-white rounded-md p-2 text-sm font-medium"
                        >
                          {subItem.name}
                        </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 rounded-md p-2 text-sm font-medium',
                  item.active
                    ? 'bg-white/20'
                    : 'hover:bg-white/10'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </a>
            )
          )}
        </Accordion>
      </div>
      <div className="p-4">
        <div className="rounded-lg bg-accent p-4 text-center text-accent-foreground">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <BarChart4 className="h-6 w-6" />
            </div>
            <h3 className="text-md font-semibold">Data Ai Pro</h3>
            <p className="mt-1 text-xs text-white/80">Get access to all features on Data Ai</p>
            <Button variant="secondary" className="mt-4 w-full bg-white text-primary hover:bg-white/90">Get Pro</Button>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
