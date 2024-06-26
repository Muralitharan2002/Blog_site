import CustomizedAccordions from "@/components/Accordion";

export default function Home() {
  return (
    <>

      <div className=" py-32 pb-40 bg-home  bg-cover bg-center flex items-center justify-center flex-col text-stone-300">

        <div className=" w-36 h-36 bg-white rounded-full blur-[130px] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 circle"></div>

        <p className="lg:w-[80%] md:w-[90%] w-[95%] lg:text-[65px] md:text-[50px] sm:text-[40px] text-[30px] bg-gradient bg-bgtext bg-clip-text text-transparent text-center leading-tight mt-28">
          Unlock the Secrets of the Universe with Blogify, Where Every Story Begins
        </p>

        <p className="mt-10 lg:text-xl md:text-[20px] sm:text-[19px] text-[18px] text-center w-[92%] md:w-[55%] text-slate-400 leading-relaxed">
          Blogify is your online haven, where stories come alive and knowledge thrives. Dive into a world of imagination and insight, tailored just for you.
        </p>

        <button className="py-2 px-4 z-10 rounded-full font-mainfont lg:text-2xl md:text-2xl sm:text-xl text-lg text-slate-400 hover:text-white duration-300 bg-transparent mt-10 Customshadow backdrop-blur-sm">
          Get Started
        </button>

      </div>

      <div className="text-slate-400 lg:mx-20 md:mx-10 mx-5 my-28">
        <div>
          <h2 className="lg:text-[60px] md:text-[45px] sm:text-[35px] text-[28px]  text-white">Simple, meet flexible.</h2>
          <p className="lg:text-xl md:text-[20px] sm:text-[19px] text-[18px] mt-8 lg:w-[70%] md:w-[80%] w-full">No matter what you&apos;re publishing or who your audience is, Blogify makes it easy to get started and grow your site as your readership expands.</p>
          <div className="h-[1px] bg-slate-800 mt-20"></div>
          <div>
            <CustomizedAccordions />
          </div>
        </div>
      </div>
    </>
  );
}
