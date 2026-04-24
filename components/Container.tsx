import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
