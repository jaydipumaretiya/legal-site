import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6 overflow-x-auto py-1" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 hover:text-sky-600 transition-colors shrink-0">
        <Home className="w-3.5 h-3.5" />
        <span>Legal Center</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 shrink-0">
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          {item.href ? (
            <Link href={item.href} className="hover:text-sky-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-slate-800">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
