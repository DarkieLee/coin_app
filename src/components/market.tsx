import { useState, useEffect } from "react";

interface Obj {
    id: string,
    current_price: number,
    name: string,
    price_change_percentage_24h: number
    image: string
    market_cap: number
}

function Market() {
    function handleOnClick() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const [data, setData] = useState<Obj[]>([])

    useEffect(() => {
        async function fetchData() {
            try{
                const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=80&page=1&sparkline=false&locale=en")
                const result: Obj[] = await res.json()
                console.log(result)
                setData(result)
            }catch(error){
                alert(error)
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <button onClick={handleOnClick} className="fixed right-[30px] bottom-[20px] bg-[#0000004d] rounded-[50%] 
            w-[3.5vw] z-[99] outline-0 border-0 cursor-pointer hover:bg-amber-800 duration-700 ease-in-out">
                <img src="../images/up-arrow.png" alt="" className="w-[3.5vw] h-[5vh] invert duration-700 ease-in-out"/>
            </button>
            <h2 className="uppercase my-[40px] mx-0 text-[5rem] leading-none font-semibold mb-0 text-white text-center">Market Update</h2>
            <div className="flex flex-col justify-center items-center w-[90vw]">
                <div className="flex flex-row justify-around w-full rounded-tr-[20px] rounded-tl-[20px] bg-[#bc7a00] mt-5">
                    <div className="my-[10px] mx-[30px] w-[25vw] text-[1.8rem] leading-none text-white text-center sm:text-[0.8rem]">
                        <p>Coin</p>
                    </div>
                    <div className="my-[10px] mx-[30px] w-[25vw] text-[1.8rem] leading-none text-white text-center sm:text-[0.8rem]">
                        <p>Price</p>
                    </div>
                    <div className="my-[10px] mx-[30px] w-[25vw] text-[1.8rem] leading-none text-white text-center sm:text-[0.8rem]">
                        <p>24-hour Change</p>
                    </div>
                    <div className="my-[10px] mx-[30px] w-[25vw] text-[1.8rem] leading-none text-white text-center sm:text-[0.8rem]">
                        <p>Market Cap</p>
                    </div>
                </div>
                <div className="w-full inline-block">
                        {data.map((item: Obj) => (
                            <div className="w-full flex flex-row py-[30px] px-0 border-b-[1px] border-b-solid 
                            border-white hover:cursor-pointer hover:bg-[#6767b0] duration-[500ms]">
                                <div className="flex justify-center items-center w-[25%] text-white">
                                    <img src={item?.image} alt={item.id} key={item?.id} className="max-w-[30px] 
                                    p-0 my-0 mx-[10px] sm:w-[22px]"/>
                                    <p className="sm:text-[0.8rem]">{item?.name}</p>
                                </div>
                                <div className="flex justify-center items-center w-[25%] text-white">
                                    <p className="sm:text-[0.8rem]">
                                        {"$" + item?.current_price.toFixed(2)}
                                    </p>
                                </div>
                                <div className="flex justify-center items-center w-[25%] text-white">
                                    <p style={{color: item?.price_change_percentage_24h >= 0 
                                        ? "#44ff00"
                                        : "red"}} className="sm:text-[0.8rem]">
                                    {item?.price_change_percentage_24h + "%"}
                                    </p>
                                </div> 
                                <div className="flex justify-center items-center w-[25%] text-white">
                                    <p className="sm:text-[0.8rem]">
                                        {"$" + item?.market_cap.toLocaleString("en-US")}
                                    </p>
                                </div>   
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}


export default Market