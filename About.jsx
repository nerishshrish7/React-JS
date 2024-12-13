export const About = () => {
    return (
      <>
        <div id="about" className="mt-[50vh] h-[80vh] w-[100%] bg-[#99999935] flex gap-[3%]">
      <div className="h-[100%] w-[50%] pl-[10%] flex flex-col justify-center gap-[7%]">
        <h1 className='text-[2.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>ABOUT OUR GYM</h1>
        <hr className="h-[0.1vh] w-[15%] border-[#ABC502] border-solid mt-[-4vh]"/>
        <p className="text-[gray] text-[1.1vw] mt-[1vh]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit .</p>
        <p className="text-[gray] text-[1.1vw] mt-[-2.5vh]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus. Teritatis et quasi architecto.</p>
        <div className="h-[7.5vh] w-[13vw] bg-[#ABC502] cursor-pointer flex justify-center items-center text-[1vw] font-bold hover:text-[#ABC502] duration-500 hover:bg-[#000000ea]">
          <a href=".">JOIN FORCE</a>
        </div>
      </div>
      <div className='h-[47vh] w-[37%] bg-[url("./img/about-img.jpg")] bg-cover bg-no-repeat mt-[13vh]'></div>
    </div>
      </>
    )
}