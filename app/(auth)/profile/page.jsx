export default function Profile() {
    return (
        <>
            <div className="text-white mt-32 lg:mx-20 md:mx-10">
                <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-5">

                    <div className="lg:border-r lg:border-b-0 md:border-b  border-slate-800 lg:w-72 w-full lg:h-96 md:h-64 h-60 flex lg:flex-col lg:gap-0 md:gap-10 sm:gap-10 gap-7 items-center justify-center">
                        <div className="w-32 h-32 rounded-full flex justify-center items-center bg-gradient-to-b from-blue-600 to-slate-800 cursor-pointer">
                            <p className="text-6xl">M</p>
                        </div>


                        <div>
                            <div className="lg:mt-5">
                                <div className="text-slate-500">@Muralitharan</div>
                                <div className="text-3xl">Muralitharan S</div>
                            </div>

                            <div className="lg:mt-8 md:mt-4 mt-4">
                                <button className=" w-48 py-2 rounded-md shadow-inner shadow-slate-500">Log out</button>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-[75%] md:w-full w-full px-5">
                        <h2 className="text-3xl border-b pb-5 border-slate-800">My Blogs</h2>
                        <div className="mt-5  min-h-96">
                            hello
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}