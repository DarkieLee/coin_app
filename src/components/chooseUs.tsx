function ChooseUs() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase text-[5rem] leading-none font-semibold mt-[70px] text-white text-center"> why choose us</h2>
            
            <div className="flex flex-row justify-between w-full py-[10px] px-10 md:flex-col md:justify-center
            md:items-center">
                <div className="column md:w-full">
                    <div className="reason md:w-full">
                        <img src="../images/wallet.png" alt="wallet" className="max-w-[80px] mr-5"/>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-center text-[1.6rem] leading-none font-semibold 
                            text-orange-400 my-[7.5px] mx-0">CONNECT YOUR WALLET</h3>
                            <p className="text-white text-center">Use Trust Wallet or Metamask to connect to the app.</p>
                        </div>
                    </div>
                    <div className="reason md:w-full">
                        <img src="../images/select.png" alt="select" className="max-w-[80px] mr-5"/>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-center text-[1.6rem] leading-none font-semibold 
                            text-orange-400 my-[7.5px] mx-0">SELECT YOUR QUANTITY</h3>
                            <p className="text-white text-center">Upload your crypto and set a title, description and price.</p>
                        </div>
                    </div>
                    <div className="reason md:w-full">
                        <img src="../images/selling.png" alt="selling" className="max-w-[80px] mr-5"/>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-center text-[1.6rem] leading-none font-semibold 
                            text-orange-400 my-[7.5px] mx-0">CONFIRM TRANSACTION</h3>
                            <p className="text-white text-center">Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>
                </div>
                <div className="column md:w-full">
                    <img src="../images/bitcoin.png" alt="bitcoin" className="max-w-[25vw]"/>
                </div>
                <div className="column md:w-full">
                    <div className="reason md:w-full">
                        <img src="../images/market.png" alt="market" className="max-w-[80px] mr-5"/>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-center text-[1.6rem] leading-none font-semibold 
                            text-orange-400 my-[7.5px] mx-0">RECEIVE YOUR OWN NFTS</h3>
                            <p className="text-white text-center">Invest all your crypto at one place on one platform.</p>
                        </div>
                    </div>
                    <div className="reason md:w-full">
                        <img src="../images/mining.png" alt="mining" className="max-w-[80px] mr-5"/>                        
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-center text-[1.6rem] leading-none font-semibold 
                            text-orange-400 my-[7.5px] mx-0">TAKE A MARKET TO SELL</h3>
                            <p className="text-white text-center">Discover, collect the right crypto collections to buy or sell.</p>
                        </div>
                    </div>
                    <div className="reason md:w-full">
                        <img src="../images/manage.png" alt="manage" className="max-w-[80px] mr-5"/>                        
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-center text-[1.6rem] leading-none font-semibold 
                            text-orange-400 my-[7.5px] mx-0">DRIVE YOUR COLLECTION</h3>
                            <p className="text-white text-center">We make it easy to discover, invest and manage.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChooseUs