import Image from "next/image"
import blogImg from "../public/blog.jpg"
import Avatar from "../public/avatar.jpg"
export default function Cards() {
    return (
        <>

            <div className="mt-14 w-[90%] mx-auto justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className=" text-white rounded-xl col-span-1 row-span-1 bg-gradient-to-t from-blue-700 to-black p-[1px] overflow-hidden">
                    <div className="bg-black rounded-xl overflow-hidden ">
                        <div className=" h-52 rounded-[8px] overflow-hidden m-2">
                            <Image src={blogImg} alt="" className="w-full h-full aspect-[4/3] object-cover" />
                        </div>
                        <div className="  px-2">
                            <h3 className=" text-2xl pt-2">
                                Today Mega IPL action
                            </h3>

                            <p className="mt-3 line-clamp-3 text-ellipsis">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                        <div className="px-2 my-3 flex items-center gap-3 text-slate-500 text-sm">
                            <div className=" w-9 h-9 rounded-full overflow-hidden ">
                                <Image src={Avatar} alt="" className="w-full" />
                            </div>
                            <div>
                                <p className="text-[14px]">@leo</p>
                                <p className="text-[14px]">january 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" text-white rounded-xl col-span-1 row-span-1 bg-gradient-to-t from-blue-700 to-black p-[1px] overflow-hidden">
                    <div className="bg-black  rounded-xl overflow-hidden max-w-full max-h-full">
                        <div className="h-52 rounded-[8px] overflow-hidden m-2">
                            <Image src={blogImg} alt="" className="w-full h-full aspect-[4/3] object-cover" />
                        </div>
                        <div className="  px-2">
                            <h3 className=" text-2xl pt-2">
                                Today Mega IPL action
                            </h3>

                            <p className="mt-3 line-clamp-3 text-ellipsis">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                        <div className="px-2 my-3 flex items-center gap-3 text-slate-500 text-sm">
                            <div className=" w-9 h-9 rounded-full overflow-hidden ">
                                <Image src={Avatar} alt="" className="w-full" />
                            </div>
                            <div>
                                <p className="text-[14px]">@leo</p>
                                <p className="text-[14px]">january 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" text-white rounded-xl col-span-1 row-span-1 bg-gradient-to-t from-blue-700 to-black p-[1px] overflow-hidden">
                    <div className="bg-black  rounded-xl overflow-hidden max-w-full max-h-full">
                        <div className="h-52 rounded-[8px] overflow-hidden m-2">
                            <Image src={blogImg} alt="" className="w-full h-full aspect-[4/3] object-cover" />
                        </div>
                        <div className="  px-2">
                            <h3 className=" text-2xl pt-2">
                                Today Mega IPL action
                            </h3>

                            <p className="mt-3 line-clamp-3 text-ellipsis">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                        <div className="px-2 my-3 flex items-center gap-3 text-slate-500 text-sm">
                            <div className=" w-9 h-9 rounded-full overflow-hidden ">
                                <Image src={Avatar} alt="" className="w-full " />
                            </div>
                            <div>
                                <p className="text-[14px]">@leo</p>
                                <p className="text-[14px]">january 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}