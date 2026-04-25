import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type BaseButtonProps = {
  children: ReactNode;
  variant?: "primary" | "accent" | "ghost";
  className?: string;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | LinkButtonProps;

function isLinkButtonProps(props: ButtonProps): props is LinkButtonProps {
  return "href" in props && typeof props.href === "string";
}

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
  } = props;

  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-center font-medium transition-all duration-200";

  const styles = {
    primary:
      "bg-gradient-to-br from-primary to-primary-dark text-white shadow-glow hover:scale-105 hover:brightness-110",
    accent:
      "bg-gradient-to-br from-accent to-accent-strong text-white shadow-[0_6px_20px_rgba(255,107,38,0.45)] hover:scale-105 hover:brightness-105",
    ghost:
      "border-[3px] border-primary/30 bg-bg text-text hover:border-primary/50 hover:bg-bg-soft",
  };

  const mergedClassName = `${base} ${styles[variant]} ${className}`.trim();

  if (isLinkButtonProps(props)) {
    const { href, ...linkProps } = props;
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      linkProps.target === "_blank" ||
      Boolean(linkProps.download);

    if (isExternal) {
      return (
        <a href={href} className={mergedClassName} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={mergedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button type={type} className={mergedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
