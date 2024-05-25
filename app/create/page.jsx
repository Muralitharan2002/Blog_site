"use client"
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

import { BsUpload } from "react-icons/bs";
import Image from 'next/image';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateBlog() {
    const [value, setValue] = useState('');

    const blogCategories = [
        { name: 'Technology' },
        { name: 'Travel' },
        { name: 'Food' },
        { name: 'Fashion' },
        { name: 'Health' },
        { name: 'Fitness' },
        { name: 'Lifestyle' },
        { name: 'Sports' },
        { name: 'Movies' },
        { name: 'Education' },
        { name: 'Finance' },
        { name: 'other' }
        // Add more categories as needed
    ];



    return (
        <>
            <div className=' text-white mt-32'>
                <h2 className='text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl '>Build up your Blog</h2>

                <form className=' lg:w-[48%] md:w-[70%] w-[90%] mt-10 mx-auto'>
                    <div className=''>
                        <div>
                            <label htmlFor="category" className='text-slate-500 lg:text-2xl md:text-2xl sm:text-2xl text-xl '>Enter a blog title :</label>
                            <input type="text" className='w-full mt-4 bg-black rounded-md focus:border-slate-600 cursor-pointer field  ' placeholder=' Blog title' />
                        </div>

                        <div className='my-8'>
                            <label htmlFor="category" className='text-slate-500 lg:text-2xl md:text-2xl sm:text-2xl text-xl'>Blog image :</label>
                            <div className='w-full mt-4 rounded-md border-slate-500 mx-auto min-h-60 border overflow-hidden'>
                                {/* <Image src={web} alt="" className='w-full h-full object-cover' /> */}
                            </div>

                            <div className='w-[50%] mx-auto mt-7 text-white border-slate-500 border rounded-md shadow-inner shadow-blue-500 lg:py-2 md:py-2 py-1 text-lg cursor-pointer'>
                                <label htmlFor="input-file" className='flex items-center gap-4 justify-center '><BsUpload className='text-base' />upload</label>
                                <input type="file" className='hidden' />
                            </div>

                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="category" className='text-slate-500 lg:text-2xl md:text-2xl sm:text-2xl text-xl'>Select a category:</label>
                            <select id="category" className='bg-black focus:border-slate-600 rounded-md field mt-4 mb-8'>
                                {/* Mapping over the categories array to create dropdown options */}
                                {blogCategories.map((category, index) => (
                                    <option key={index} value={category.name} className='bg-black py-2'>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className='text-slate-500 lg:text-2xl md:text-2xl sm:text-2xl text-xl'>Text editor :</label>
                            <div className='mt-4'>
                                <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Write something amazing..." />
                            </div>
                        </div>

                        <div>
                            <button type='submit' className='border cursor-pointer lg:py-2 md:py-2 py-1 w-full rounded-md border-slate-600 mt-16 shadow-inner shadow-blue-500 text-xl'>Create</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}