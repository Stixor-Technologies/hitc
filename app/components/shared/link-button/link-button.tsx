import Link, { LinkProps } from "next/link";
import React, { FC } from "react";

type BaseProps = {
  text: string;
  styles?: string;
  variant: "sm" | "md";
  loading?: boolean;
};

type ActionProps = BaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as: "button";
        loading?: boolean;
      })
    | (LinkProps & {
        as: "link";
      })
  );

const LinkButton: FC<ActionProps> = ({ variant, styles, text, ...props }) => {
  const getSizeClass = () => {
    switch (variant) {
      case "sm":
        return "max-w-[10.875rem] w-full h-[2.75rem]";
      case "md":
        return "sm:max-w-[16.938rem] w-full h-[2.813rem]";
      default:
        return "";
    }
  };

  // text-lg

  const allClassNames = `rounded-[10px] bg-gradient-to-b from-ferozi to-pink ${styles} ${getSizeClass()}`;

  if (props.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...rest } = props;
    return (
      <Link
        className={`${allClassNames} inline-flex items-center justify-center`}
        {...rest}
      >
        {text}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...rest } = props;
  return (
    // <button
    //   className={`${allClassNames} ${rest.disabled && "disabled"}  after:opacity-1 after:bg-red relative flex  items-center justify-center gap-3 after:absolute after:bottom-[-10%] after:left-1/2 after:h-[30%] after:w-[95%] after:-translate-x-1/2 after:blur-md after:duration-700 after:content-['']`}
    <button
      className={`${allClassNames} ${rest.disabled && "disabled"} relative flex items-center justify-center gap-3 overflow-visible from-ferozi to-pink after:absolute after:-bottom-[3%] after:left-1/2 after:-z-10 after:h-[30%] after:w-[95%] after:-translate-x-[50%] after:rounded-full after:bg-gradient-to-b after:opacity-0 after:blur-lg after:duration-300 after:ease-in-out after:content-[''] hover:after:opacity-100`}
      {...rest}
    >
      <span className="text-white">{text}</span>
    </button>
  );
};

export default LinkButton;
