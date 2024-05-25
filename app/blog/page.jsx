
import Cards from "@/components/Card";
import Loader from "@/components/Loader";
import { Suspense } from "react";
import { RiSearchEyeLine } from "react-icons/ri";


export default function Blog() {
    return (
        <>
            <div className="text-white">
                <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl mt-36 text-center">Blog&apos;s</h2>
                <div className=" mt-14 flex items-center border border-slate-600 shadow-inner z-50 shadow-slate-500 lg:w-[500px] md:w-[500px] sm:w-[400px] mx-3 sm:mx-auto md:mx-auto lg:mx-auto rounded-xl overflow-hidden">
                    <input type="text" className="bg-black w-full m-1 rounded-lg border-0 field" placeholder="search blog..." />
                    <RiSearchEyeLine className=" text-2xl mx-2 cursor-pointer text-slate-400 duration-300 hover:text-white" />
                </div>
            </div>
            <Suspense fallback={<Loader />}>
                <Cards />
            </Suspense>
        </>
    )
}