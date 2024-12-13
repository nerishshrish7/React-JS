export const Home = () => {
    return (
      <>
        <div className='h-[125vh] w-[100%] bg-[url("./img/img-1.jpg")] bg-cover bg-no-repeat'>
            <div className='pt-[47vh] pl-[9.5vw]'>
              <h1 className='text-white text-[4vw] font-bold'>WELCOME TO FITX</h1>
              <h2 className='text-[#ABC502] font-[Roboto] text-[2vw] font-normal pt-[1.8vh] pb-[1.5vh]'>GET FIT IN TWO WEEKS</h2>
              <hr className='h-[0.1vh] w-[10%] border-[#ABC502] border-solid'/>
              <p className='text-white w-[45vw] pt-[3vh] pb-[4vh]'>We provide high businesses dolor sit amet, consectetur adipiscing elit dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
              <div className="h-[7.5vh] w-[13vw] bg-[#ABC502] cursor-pointer flex justify-center duration-500 items-center text-[1vw] font-bold hover:text-[#ABC502] hover:border-[#ABC502] hover:bg-transparent hover:border-solid hover:border-[0.2vh]">
                <a href=".">CONTACT NOW</a>
              </div>
            </div>
        </div>
      </>
    )
}