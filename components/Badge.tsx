import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "success" | "warning" | "destructive" | "outline" | "secondary" | "info";
}

export function Badge({ children, variant = "primary", className = "", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    destructive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    outline: "border border-slate-200 text-slate-950 dark:border-slate-800 dark:text-slate-50",
    secondary: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-400",
  };

  // Note: Since Tailwind isn't guaranteed, I'll use inline styles or standard CSS classes if needed.
  // But wait, the user's project seems to use CSS Modules (page.module.css).
  // However, these components are often shared. I'll use standard CSS classes that I'll define in a global CSS or just use inline styles for reliability if I don't want to mess with global CSS.
  // Actually, I should check if there's a global CSS file.
  
  return (
    <div
      className={`badge badge-${variant} ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "9999px",
        padding: "2px 10px",
        fontSize: "0.75rem",
        fontWeight: 600,
        ...getVariantStyles(variant)
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function getVariantStyles(variant: string) {
  switch (variant) {
    case "primary":
      return { backgroundColor: "rgba(0, 116, 188, 0.1)", color: "var(--primary)" };
    case "success":
      return { backgroundColor: "rgba(34, 197, 94, 0.1)", color: "var(--success)" };
    case "warning":
      return { backgroundColor: "rgba(245, 158, 11, 0.1)", color: "var(--warning)" };
    case "destructive":
      return { backgroundColor: "rgba(239, 68, 68, 0.1)", color: "var(--error)" };
    case "outline":
      return { border: "1px solid var(--border)", color: "inherit" };
    case "secondary":
      return { backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" };
    case "info":
      return { backgroundColor: "rgba(0, 116, 188, 0.1)", color: "var(--primary)" };
    default:
      return {};
  }
}
