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
                        <div className="text-black dark:text-white font-bold cursor-pointer">
                            <a href="/" className="text-gray-800 dark:text-gray-300 hover:text-black hover:dark:text-white">Planimetria</a>
                        </div>
                        <div className="flex space-x-4 text-sm">
                            <a href="components" className="text-gray-800 dark:text-gray-300 hover:text-black hover:dark:text-white">Components</a>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
}

export default Navbar;