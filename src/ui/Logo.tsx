import classnames from "classnames";
import Image from "next/image";

type LogoProps = {
  alt: string;
  className?: string;
  icon: string;
  iconWidth: number | undefined;
  iconHeight: number | undefined;
  style?: React.CSSProperties | undefined;
};

export default function Logo({
  alt,
  className,
  icon,
  iconWidth,
  iconHeight,
  style,
}: LogoProps): JSX.Element {
  return (
    <div
      className={classnames("flex items-center justify-center", className)}
      style={style}
    >
      <div className="relative">
        <Image src={icon} alt={alt} width={iconWidth} height={iconHeight} />
      </div>
    </div>
  );
}
