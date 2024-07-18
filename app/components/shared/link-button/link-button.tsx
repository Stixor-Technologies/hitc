import Link, { LinkProps } from "next/link";
import React, { FC } from "react";
import Spinner from "../spinner/spinner";

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
        return "sm:max-w-[10.875rem] w-full h-[2.75rem]";
      case "md":
        return "sm:max-w-[16.938rem] w-full h-[2.813rem]";
      default:
        return "";
    }
  };

  const allClassNames = `rounded-[0.625rem]  bg-gradient-to-b from-ferozi to-pink items-center justify-center gap-3 overflow-visible after:absolute after:-bottom-[3%] after:left-1/2 after:-z-10 after:h-[30%] after:w-[95%] after:-translate-x-[50%] after:rounded-full after:bg-gradient-to-b after:opacity-0 after:blur-lg after:duration-300 after:ease-in-out after:content-[''] hover:after:opacity-100 disabled:opacity-70 ${styles} ${getSizeClass()}`;

  if (props.as === "link") {
    const { as, ...rest } = props;
    return (
      <Link className={`${allClassNames} inline-flex`} {...rest}>
        {text}
      </Link>
    );
  }

  const { as, loading, ...rest } = props;
  return (
    <button className={`${allClassNames} relative flex `} {...rest}>
      <span className="text-white">{text}</span>
      {loading && (
        <div>
          <Spinner size="size-4 md:size-6" color="text-white" />
        </div>
      )}
    </button>
  );
};

export default LinkButton;
