function JoinUs() {
    return (
        <div className="max-h-full flex flex-col justify-center items-center" id="joinus">
            <h2 className="uppercase text-[5rem] leading-none font-semibold mt-[30px] mb-0 text-center text-white">join us today</h2>
            <p className="text-[4rem] text-[#01d6d6] text-center">on social media</p>
            <p className="text-[#01d6d6] text-center">connect with people sharing the same interest as yours</p>
            <div className="flex flex-row justify-evenly items-center w-full sm:flex-col">
                <div className="flex justify-center items-center flex-col sm:flex-row">
                    <a href="https://discord.com/" target="_blank">
                        <img src="/images/discord.png" alt="discord" className="max-w-[80px] m-[50px] duration-500 invert 
                        hover:scale-[1.3] sm:max-w-[50px] sm:m-5"/>
                    </a>
                    <a href="https://facebook.com/" target="_blank">
                        <img src="/images/facebook.png" alt="facebook" className="max-w-[80px] m-[50px] duration-500 invert 
                        hover:scale-[1.3] sm:max-w-[50px] sm:m-5"/>
                    </a>
                </div>
                <div className="flex justify-center">
                    <img src="../images/communication.png" alt="communication" className="max-w-[24vw] max-h-[30vh] sm:max-w-[70vw]"/>
                </div>
                <div className="flex justify-center items-center flex-col sm:flex-row">
                    <a href="https://instagram.com/" target="_blank">
                        <img src="/images/instagram.png" alt="instagram" className="max-w-[80px] m-[50px] duration-500 invert 
                        hover:scale-[1.3] sm:max-w-[50px] sm:m-5" />
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img src="/images/x-twitter.png" alt="x-twitter" className="max-w-[80px] m-[50px] duration-500 invert 
                        hover:scale-[1.3] sm:max-w-[50px] sm:m-5" />
                    </a>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center m-5">
                <a href="#" className="no-underline m-5 text-[#01d6d6]">Privacy</a>
                <a href="#" className="no-underline m-5 text-[#01d6d6]">Terms of Service</a>
            </div>
        </div>
    )
}

export default JoinUs