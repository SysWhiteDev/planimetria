import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  type?: "green" | "yellow" | "red" | "gray";
  bgColor?: string;
  textColor?: string;
};

const Badge = ({
  children,
  type,
  bgColor,
  textColor,
}: BadgeProps): React.JSX.Element => {
  const RenderBadge = (type: string | undefined) => {
    switch (type) {
      case "green":
        return (
          <span className="text-xs dark:bg-green-400 bg-green-300 dark:text-black text-green-800 px-1.5 py-0.5 rounded-md">
            {children}
          </span>
        );
      case "yellow":
        return (
          <span className="text-xs dark:bg-yellow-400 bg-yellow-300 dark:text-black text-yellow-800 px-1.5 py-0.5 rounded-md">
            {children}
          </span>
        );
      case "red":
        return (
          <span className="text-xs dark:bg-red-400 bg-red-300 dark:text-black text-red-800 px-1.5 py-0.5 rounded-md">
            {children}
          </span>
        );
      case "gray":
        return (
          <span className="text-xs dark:bg-neutral-400 bg-neutral-300 dark:text-neutral-700 text-neutral-800 px-1.5 py-0.5 rounded-md">
            {children}
          </span>
        );
      default:
        return (
          <span
            style={{ color: textColor, backgroundColor: bgColor }}
            className={`text-xs ${!bgColor && "dark:bg-neutral-400 bg-neutral-300"} ${!textColor && "dark:text-neutral-700 text-neutral-800"} px-1.5 py-0.5 rounded-md`}
          >
            {children}
          </span>
        );
    }
  };

  return <>{RenderBadge(type)}</>;
};

export default Badge;
