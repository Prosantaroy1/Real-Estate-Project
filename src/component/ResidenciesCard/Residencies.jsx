import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Residencies = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then((data) => {
                setCards(data)
            })
    }, [])
    console.log(cards);

    return (
        <div className="pt-20 pb-8">
            <div className="space-y-3">
                <h2 className="text-[#ffc011] font-bold text-3xl">Best Choices</h2>
                <h1 className="text-4xl font-bold text-[#1f3e72]">Popular Residencies</h1>
            </div>
            <div className="flex gap-4">
                {
                    cards.map((card, idx) => <div
                        key={idx}
                        card={card}
                        className="pt-8"
                    >
                    
                         <div className=" w-80 bg-[#ffff] rounded-2xl pb-4  hover:bg-[#b4f9f4]  shadow">
                            <figure className="px-3 pt-2">
                                <img src={card.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="px-3 pt-2 pb-3 space-y-3">
                                <h3 className="text-xl font-semibold"><span className="text-[#ffbb34] font-bold text-2xl">$</span>{card.price}</h3>
                                <h2 className="text-2xl text-[#1f3e72] font-bold">{card.name}</h2>
                                <p className=" font-semibold">{card.details}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Residencies;