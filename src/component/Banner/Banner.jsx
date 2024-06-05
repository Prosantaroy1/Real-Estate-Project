import { MdOutlineLocationOn } from "react-icons/md";
import bannerimg from '../../assets/img/hero-image.png'


const Banner = () => {
    return (
        <div className='bg-[#131110] mt-16 pt-12 pb-12 flex lg:px-24 px-3 justify-between items-center text-white'>
            <div className="space-y-14">
                <h2 className="text-6xl space-y-6 font-bold">
                    Discover<br />
                    Most Suitable,<br />
                    Property<br />
                </h2>
                <p className="text-cl">
                    Find a variety of properties that suit you very easilty,<br />
                    Forget all difficulties in finding a residence for you
                </p>
                <label className="input bg-[#ffff] flex items-center gap-2 h-20 outline-none ">
                    <MdOutlineLocationOn className="w-8 text-black h-8" />
                    <input type="text" className="grow text-black text-xl" />
                    <button className="btn bg-[#568eef] px-6  text-white">Contact</button>
                </label>
                <div className="flex gap-8 ">
                    <div className="flex items-center flex-col">
                        <h3 className="text-2xl">9,000 <span className="text-[#fa3600]">+</span></h3>
                        <p className="text-xl">Premium Product</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <h3 className="text-2xl">2,200 <span className="text-[#fa3600]">+</span></h3>
                        <p className="text-xl">Happy Customer</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <h3 className="text-2xl">20 <span className="text-[#fa3600]">+</span></h3>
                        <p className="text-xl">Awards Winning</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerimg} className="w-[550px] h-[380px]" alt="bannerImg" />
            </div>
        </div>
    );
};

export default Banner;