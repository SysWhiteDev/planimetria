"use client";
// @ts-ignore
import React, { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};
const Wrapper = ({ children, className }: WrapperProps): React.JSX.Element => {
  const [ItemsArray, setItemsArray] = useState([
    { active: true },
    { active: true },
    { active: true },
  ]);
  const ItemsList = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === Item) {
      return child;
    }
  });
  const TitleList = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Title) {
      return child;
    }
  });
  return (
    <div className={`flex items-center ${className}`}>
      {TitleList}
      <div className={"flex items-center gap-1.5"}>
        {ItemsList?.map((item, index) => {
          // @ts-ignore
          /*for (let i = 0; i < ItemsList.length && ItemsList.length <= ItemsArray.length; i++) {
                        console.log(ItemsArray);
                        // @ts-ignore
                        setItemsArray([...ItemsArray, {active: true}]);
                    }*/

          return (
            <ItemRender
              index={index}
              active={ItemsArray[index]?.active}
              array={ItemsArray}
              setArray={setItemsArray}
            >
              {item}
            </ItemRender>
          );
        })}
      </div>
    </div>
  );
};

type ItemRenderProps = {
  active?: boolean;
  index?: number;
  children?: React.ReactNode;
  className?: string;
  setArray?: any;
  array?: any;
};

const Item = ({ children }: ItemRenderProps): React.JSX.Element => {
  return <>{children}</>;
};

const ItemRender = ({
  active,
  setArray,
  array,
  index,
  children,
  className,
}: ItemRenderProps): React.JSX.Element => {
  const toggleActive = (index: number) => {
    setArray(
      array.map((item: { active: any }, i: number) => {
        if (i === index) {
          // Create a new object with the updated active property
          return { ...item, active: !item.active };
        }
        return item;
      }),
    );
  };

  return (
    <div
      onClick={() => toggleActive(index || 0)}
      className={`flex select-none items-center transition-all text-white justify-between rounded-full bg-red-500 px-2 pr-1 py-0.5 cursor-pointer ${className} ${!active && "!pr-2 !text-neutral-600 dark:!text-neutral-400 dark:!bg-neutral-800 !bg-neutral-300"}`}
    >
      <p className={"text-xs"}>{children}</p>
      {active && (
        <div
          className={
            "bg-white text-black rounded-full text-sm bg-opacity-40 ml-1"
          }
        >
          <HiOutlineXMark />
        </div>
      )}
    </div>
  );
};

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};
const Title = ({ children, className }: TitleProps): React.JSX.Element => {
  return <p className={`opacity-70 mr-2.5 text-sm ${className}`}>{children}</p>;
};
export default {
  Wrapper,
  Item,
  Title,
};
