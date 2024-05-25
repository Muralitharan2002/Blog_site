import Link from "next/link";

export default function Signup() {
    return (
        <>
            <div className="text-white flex justify-center flex-col h-screen">
                <h3 className="text-2xl text-center">Welcom to Blogify</h3>
                <div className="mt-8 p-4 w-72 mx-auto rounded-md  bg-slate-800">
                    <div className="flex gap-2 w-full">
                        <div className="">
                            <label htmlFor="" className="text-slate-400 text-sm">Username</label>
                            <input type="text" className="w-full bg-black rounded-md mt-1 text-sm field focus:border-slate-300" placeholder="Muralitharan" />
                        </div>
                        <div className="w-[50%]">
                            <label htmlFor="" className="text-slate-400 text-sm">Last name</label>
                            <input type="text" className="w-full bg-black rounded-md mt-1 text-sm field focus:border-slate-300" placeholder="S" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="text-slate-400 text-sm">Email address</label>
                        <input type="text" className="w-full bg-black rounded-md mt-1 text-sm field focus:border-slate-300" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="text-slate-400 text-sm">Password</label>
                        <input type="text" className="w-full bg-black rounded-md mt-1 text-sm field focus:border-slate-300" />
                    </div>

                    <button className="w-full text-center bg-black Customshadow py-2 rounded-md mt-6 text-slate-400 hover:text-white duration-300">Sign in</button>
                </div>

                <div className="w-72 flex justify-center mx-auto mt-5 py-5 rounded-md bg-slate-950">
                    <p>Already have an account? <Link href={"/login"} className=" text-slate-500  hover:underline">Login</Link></p>
                </div>
            </div>
        </>
    )
}