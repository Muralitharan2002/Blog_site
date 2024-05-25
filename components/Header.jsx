"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";


export default function Header() {
    const [Menu, setMenu] = useState(false)
    const [AccMenu, setAccMenu] = useState(false)
    const [LoginStatus, setLoginStatus] = useState(false)

    const MenuOn = () => {
        setMenu(!Menu)
    }
    const MenuOff = () => {
        setMenu(!Menu)
    }

    const dropdownOn = () => {
        setAccMenu(!AccMenu)
    }
    const dropdownOff = () => {
        setAccMenu(!AccMenu)
    }


    return (
        <>
            <div className="flex items-center justify-center z-50 relative">
                <div className="text-white fixed w-[91%] py-2 top-8 Customshadow  rounded-full px-5 flex items-center justify-between backdrop-blur navbar-container z-40" >
                    <div className="bg-bgtext bg-clip-text text-transparent text-3xl">
                        Blogify
                    </div>

                    {
                        Menu && <div className={`absolute lg:hidden md:hidden top-0 left-0 w-full h-screen bg-[#000003b4] z-30`} onClick={() => MenuOff()}></div>
                    }

                    <div className={` px-4 xl:flex md:flex justify-center gap-8 text-slate-400  sm:hidden hidden ${Menu ? "navbar" : ""}`}>
                        <Link href={"/"} className="hover:text-white duration-300">Home</Link>
                        <Link href={"/blog"} className="hover:text-white duration-300">Blog</Link>
                        <Link href={"/create"} className="hover:text-white duration-300">Create</Link>
                        <Link href={"/"} className="hover:text-white duration-300">About</Link>
                    </div>
                    <div className="flex items-center">
                        {
                            LoginStatus ?
                                <div className="" onClick={dropdownOn} onAbort={dropdownOff}>
                                    <div className=" w-8 h-8 rounded-full flex justify-center items-center bg-gradient-to-b from-blue-600 to-slate-800 cursor-pointer">
                                        <p className="text-lg">M</p>
                                    </div>
                                    {
                                        AccMenu &&

                                        <div onClick={dropdownOn} className="absolute rounded-md bg-slate-800 left-[1309px] top-[60px] w-20 py-2 flex flex-col">
                                            <Link href={"/profile"} className="text-[16px px-2 duration-300 hover:text-slate-400 cursor-pointer">Profile</Link>
                                            <Link href={"/logout"} className="mt-2 text-[16px] px-2 hover:text-slate-400 duration-300 cursor-pointer">Log out</Link>
                                        </div>
                                    }

                                </div>
                                :
                                <>
                                    <Link href={"/login"} className="">
                                        <div className="hover:text-white duration-300 text-slate-400">Login</div>
                                    </Link>
                                    <Link href={"/signup"} className=" ml-5">
                                        <div className=" rounded-full pb-1 px-2 Customshadow2">Sign up</div>
                                    </Link>
                                </>
                        }

                        <div className=" text-2xl ml-4 hidden menubar"><CgMenuRightAlt onClick={() => { MenuOn() }} /></div>
                    </div>

                </div>
            </div>
        </>
    )
}