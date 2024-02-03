// @ts-ignore
import React from "react";
import {Spinner} from "../index";

type ButtonProps = {
    children: React.ReactNode;
    type?: "primary" | "secondary" | "destructive" | "outline";
    loading?: boolean;
    onClick?: () => void;
}
const Button = ({children, type, loading, onClick}: ButtonProps): React.JSX.Element => {
    switch (type) {
        case "primary":
            return (
                <>
                    <button
                        onClick={onClick}
                        className={`${loading && "!cursor-default !bg-opacity-95 dark:!bg-gray-300 !opacity-80"} transition-all flex items-center px-3 py-1 bg-opacity-95 backdrop-blur font-small text-sm bg-black dark:bg-white shadow rounded-md hover:bg-opacity-85 hover:dark:bg-gray-300 text-white dark:text-black`}>
                        {loading && <Spinner size={18} className={"mr-1 dark:fill-black fill-white"}/>}
                        {children}
                    </button>
                </>
            )
        case "secondary":
            return (
                <button
                    onClick={onClick}
                    className={`${loading && "!cursor-default !opacity-80 !bg-opacity-80 dark:!bg-opacity-85"} transition-all flex items-center bg-opacity-70 text-sm backdrop-blur px-3 py-1 bg-gray-300 dark:bg-gray-800 shadow rounded-md hover:bg-opacity-100 hover:dark:bg-opacity-85 text-black dark:text-white`}>
                    {loading && <Spinner size={18} className={"mr-1 fill-black dark:fill-white"}/>}
                    {children}
                </button>
            )
        case "destructive":
            return (
                <button
                    onClick={onClick}
                    className={`${loading && "!cursor-default !bg-opacity-75 !opacity-80"} transition-all flex items-center font-base bg-opacity-85 text-sm backdrop-blur px-3 py-1 bg-red-700 shadow rounded-md hover:bg-opacity-75 text-white`}>
                    {loading && <Spinner size={18} className={"mr-1 fill-white"}/>}
                    {children}
                </button>
            )
        case "outline":
            return (
                <button
                    onClick={onClick}
                    className={`${loading && "!cursor-default !opacity-80 hover:!bg-white hover:!bg-opacity-5 !hover:backdrop-blur"} transition-all flex items-center px-3 py-1 font-small text-sm outline outline-1 outline-[#e4e4e7] bg-white bg-opacity-5 backdrop-blur dark:outline-gray-700 hover:bg-gray-200 hover:dark:bg-gray-700 -outline-offset-1 shadow rounded-md text-black dark:text-white`}>
                    {loading && <Spinner size={18} className={"mr-1 fill-black dark:fill-white"}/>}
                    {children}
                </button>
            )
        default:
            return (
                <>
                    <button
                        onClick={onClick}
                        className={"transition-all flex items-center px-3 py-1 bg-opacity-95 backdrop-blur font-small text-sm bg-black dark:bg-white shadow rounded-md hover:bg-opacity-85 hover:dark:bg-gray-300 text-white dark:text-black"}>
                        {loading && <Spinner size={18} className={"mr-1 dark:fill-black fill-white"}/>}
                        {children}
                    </button>
                </>
            )
    }
}
export default Button;
