import React from "react";

type NavbarProps = {
    children: React.ReactNode;
}

const Navbar = ({children}: NavbarProps): React.JSX.Element => {
    return (
        <>
            <nav className="z-50 sticky border-b border-zinc-50 border-opacity-5 top-0 font-light shadow backdrop-blur-md p-4 text-base overflow-hidden">
                <div className="container mx-auto max-w-5xl ">
                    <div className="flex justify-between items-center">
                        <div className="text-black dark:text-white font-bold cursor-pointer">Planimetria</div>
                        <div className="flex space-x-4 text-sm">
                            <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-black hover:dark:text-white">Home</a>
                            <a href="#" className="text-black dark:text-white font-medium">About</a>
                            <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-black hover:dark:text-white">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
}

export default Navbar;