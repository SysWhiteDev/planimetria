// @ts-ignore
import React from "react";
import {Spinner} from "../index";

type ButtonProps = {
    children: React.ReactNode;
    type?: "primary" | "secondary" | "destructive" | "outline";
    loading?: boolean;
    onClick?: () => void;
    className?: string;
}
const Button = ({children, type, loading, onClick, className}: ButtonProps): React.JSX.Element => {
    switch (type) {
        case "primary":
            return (
                <>
                    <button
                        onClick={onClick}
                        className={`${className} ${loading && "!pl-3 !cursor-default !bg-opacity-95 dark:!bg-gray-300 !opacity-80"} transition-all duration-200 flex items-center px-5 py-1.5 bg-opacity-95 backdrop-blur font-semibold text-sm bg-black dark:bg-white shadow rounded-md hover:bg-opacity-85 hover:dark:bg-gray-300 text-white dark:text-black`}>
                        {loading && <Spinner size={18} className={"mr-2 dark:!fill-black !fill-white"}/>}
                        {children}
                    </button>
                </>
            )
        case "secondary":
            return (
                <button
                    onClick={onClick}
                    className={`${className} ${loading && "!pl-3 !cursor-default !opacity-80 !bg-opacity-80 dark:!bg-opacity-85"} transition-all duration-200 flex items-center bg-opacity-70 text-sm backdrop-blur px-5 py-1.5 bg-gray-300 dark:bg-gray-800 shadow rounded-md hover:bg-opacity-100 hover:dark:bg-opacity-85 text-black dark:text-white`}>
                    {loading && <Spinner size={18} className={"mr-2 !fill-black dark:!fill-white"}/>}
                    {children}
                </button>
            )
        case "destructive":
            return (
                <button
                    onClick={onClick}
                    className={`${className} ${loading && "!pl-3 !cursor-default !bg-opacity-75 !opacity-80"} transition-all duration-200 flex items-center font-base bg-opacity-85 text-sm backdrop-blur px-5 py-1.5 bg-red-700 shadow rounded-md hover:bg-opacity-75 text-white`}>
                    {loading && <Spinner size={18} className={"mr-2 !fill-white"}/>}
                    {children}
                </button>
            )
        case "outline":
            return (
                <button
                    onClick={onClick}
                    className={`${className} ${loading && "!pl-3 !cursor-default !opacity-80 hover:!bg-white hover:!bg-opacity-5 !hover:backdrop-blur"} transition-all duration-200 flex items-center px-5 py-1.5 font-semibold text-sm border border-1 border-neutral-500 bg-white bg-opacity-0 backdrop-blur dark:border-neutral-700 hover:bg-gray-200 hover:dark:bg-neutral-700 -border-offset-1 shadow rounded-md text-black dark:text-white`}>
                    {loading && <Spinner size={18} className={"mr-2 !fill-black dark:!fill-white"}/>}
                    {children}
                </button>
            )
        default:
            return (
                <>
                    <button
                        onClick={onClick}
                        className={`${className} ${loading && "!pl-3 !cursor-default !bg-opacity-95 dark:!bg-gray-300 !opacity-80"} transition-all duration-200 flex items-center px-5 py-1.5 bg-opacity-95 backdrop-blur font-semibold text-sm bg-black dark:bg-white shadow rounded-md hover:bg-opacity-85 hover:dark:bg-gray-300 text-white dark:text-black`}>
                        {loading && <Spinner size={18} className={"mr-2 dark:!fill-black !fill-white"}/>}
                        {children}
                    </button>
                </>
            )
    }
}
export default Button;
