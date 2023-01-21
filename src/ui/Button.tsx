/* eslint-disable prettier/prettier */
type ButtonProps = {
  label: string;
  onClick?:
  | (React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLAnchorElement>)
  | undefined;
  href?: string | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  variant: string | undefined;
};

const primaryStyles =
  "bg-primary-violet text-secondary-white cursor-pointer inline-flex items-center justify-center py-4 px-[31px] font-bold text-16 rounded-[5px] capitalize hover:bg-primary-light-violet transition-all ease-in-out";

const secondaryStyles =
  "bg-primary-violet-100 text-primary-violet cursor-pointer inline-flex items-center justify-center py-4 px-[31px] font-bold text-16 rounded-[5px] capitalize hover:bg-primary-violet-200 transition-all ease-in-out dark:bg-secondary-white-100 dark:text-secondary-white dark:hover:bg-secondary-white-200";

const gusts = (variant: string | undefined) =>
  variant === "primary" ? primaryStyles : secondaryStyles;

export default function Button({
  label,
  onClick,
  href,
  type,
  variant,
}: ButtonProps) {
  const Component = href ? "a" : "button";
  return (
    <Component
      type={type}
      href={href}
      onClick={onClick}
      className={gusts(variant)}
    >
      {label}
    </Component>
  );
}
