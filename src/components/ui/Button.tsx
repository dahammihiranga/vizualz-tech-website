import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  showArrow?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#ff1e1e] text-white hover:bg-[#e31717] hover:shadow-[0_0_35px_rgba(255,30,30,0.35)]",
    outline:
      "border border-white/15 bg-white/[0.03] text-white hover:border-[#ff1e1e]/60 hover:bg-[#ff1e1e]/10",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <ArrowUpRight
          size={17}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return <button className={styles}>{content}</button>;
}