import MyPicture from './image.jpg';

const StyledDiv = () => {
    return(
        <>
        <main className="flex justify-center ">
            
        <div className="w-250 h-97 border mt-70 flex flex-col bg-[#16122d] text-white overflow-hidden">
            <div className="absolute inset-0 bg-purple-700 opacity-50  w-131 h-97 ml-234 mt-70  "></div>
            <h1 className='ml-15 text-[40px] mt-10'>Get <span className="text-purple-500">insights</span> that help <br />your business grow.</h1>
            <p className='mt-8 ml-14 text-[19px]'>Discover the benefits of data analytics and make <br /> better decisions regarding revenue, customer <br /> experience, and overall efficiency.</p>
            <img src={MyPicture} alt="myImage" className='w-131 h-full float-right ml-119 -mt-69 ' />
            
            <div className='flex w-115 -mt-25 justify-evenly mr-15 ' >
                
                 <h2>10k+ <br /><p>COMPANIES</p></h2>
                 <h2>314 <br /> <p>TEMPLATES</p></h2>
                 <h2>12M <br /> <p>QUERIES</p></h2>

            </div>
        </div>
        </main>
        </>
    )
}

export default StyledDiv;