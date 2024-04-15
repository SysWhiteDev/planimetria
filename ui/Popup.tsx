import React from "react";
import { HiOutlineX } from "react-icons/hi";

type WrapperProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
};

const Wrapper = ({
  children,
  open,
  setOpen,
  className,
}: WrapperProps): React.JSX.Element => {
  const TitleElement = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Title) {
      return child;
    }
  });
  const SubtitleElement = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Subtitle) {
      return child;
    }
  });
  const ContentElement = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Content) {
      return child;
    }
  });

  return (
    <>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className={`fixed ${className} overflow-hidden flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-black bg-opacity-55 z-[50]`}
          />

          <div
            className={`p-4 mx-2 py-3 fixed z-[51] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-xl bg-neutral-100 border-neutral-300  dark:bg-neutral-950 transition-all border dark:border-neutral-800`}
          >
            {/* header section */}
            <div>
              <div className="flex justify-between gap-2 mb-4 items-center">
                <div>
                  {TitleElement}
                  {SubtitleElement}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 bg-neutral-400 dark:bg-neutral-800 bg-opacity-25 hover:bg-opacity-45 dark:hover:bg-opacity-65 transiton-all flex justify-center items-center rounded-md"
                >
                  <HiOutlineX size={20} />
                </button>
              </div>
            </div>
            {ContentElement}
          </div>
        </>
      )}
    </>
  );
};

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};
const Title = ({ children, className }: TitleProps): React.JSX.Element => {
  return <p className={`font-semibold ${className}`}>{children}</p>;
};

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};
const Subtitle = ({
  children,
  className,
}: SubtitleProps): React.JSX.Element => {
  return <div className={`${className} text-sm`}>{children}</div>;
};

type ContentProps = {
  children: React.ReactNode;
  className?: string;
};
const Content = ({ children, className }: ContentProps): React.JSX.Element => {
  return <div className={className}>{children}</div>;
};

export default {
  Wrapper,
  Title,
  Subtitle,
  Content,
};
