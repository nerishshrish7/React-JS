export const Contact = () => {
    return (
      <>
        <div id="contact" className="h-[25vh] w-[100%] bg-[#ABC502] flex justify-center items-center">
      <div className="h-[15vh] w-[27%] flex flex-col justify-center items-center border-r-[0.1vw] border-black">
        <h1 className='text-[2vw] tracking-[0.001vw] font-[Roboto] font-bold'>EMAIL</h1>
        <p className="mt-[1vh]">fitx@yoursite.com</p>
        <p>support@yoursite.com</p>
      </div>
      <div className="h-[15vh] w-[27%] flex flex-col justify-center items-center border-r-[0.1vw] border-black">
        <h1 className='text-[2vw] tracking-[0.001vw] font-[Roboto] font-bold'>CALL US NOW!</h1>
        <h2 className='text-[2.7vw] tracking-[0.001vw] font-bold'>+977 9876825341</h2>
      </div>
      <div className="h-[15vh] w-[27%] flex flex-col justify-center items-center">
        <h1 className='text-[2vw] tracking-[0.001vw] font-[Roboto] font-bold'>ADDRESS</h1>
        <p>99 St. Tilottama Park</p>
        <p>Tilottama City 28292. Nepal</p>
      </div>
    </div>
      </>
    )
}