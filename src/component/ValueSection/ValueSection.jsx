import valueImg from '../../assets/img/value.png'
{/**react icon */ }
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const ValueSection = () => {
    return (
        <div className='pt-16 pb-7 px-16 flex justify-between items-center'>
            <div>
                <img src={valueImg} className="w-[500px] h-[550px] rounded-t-[50%] border-spacing-4 border border-x-[#686767]  " alt="bannerImg" />
            </div>
            <div className=''>
                <h3 className='text-[#ffc011] font-bold text-3xl'>Our Value</h3>
                <h2 className='text-4xl text-[#1f3e72] pt-4 pb-4 font-bold'>Value We Give to You</h2>
                <p>
                    We always ready to help by providijng the best services for you.<br />
                    We beleive a good blace to live can make your life better
                </p>
               {/**accoding part */}
                <div className='pt-14 flex gap-3 flex-col'>
                    <div className="collapse  bg-[#ffff] border-2 rounded text-[#1f3e72]">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl  text-[#1f3e72] text-center font-bold flex justify-between">
                            <span><AiTwotoneSafetyCertificate className='w-8 h-8 p-2 text-[#1f3e72] bg-slate-200' /></span>
                            Best price on the market
                            <span><AiFillCaretDown className='w-8 h-8 bg-slate-100 text-[#1f3e72] p-2' /></span>
                        </div>
                        <div className="collapse-content text-ce pt-3">
                            <p>Exercitation in fugiat est ut ad ea cupidatat ut<br /> in cupidatat
                                occaecat ut occaecat consequat est minim minim esse<br /> tempor laborum
                                consequat esse adipisicing eu reprehenderit enim.</p>
                        </div>
                    </div>
                    <div className="collapse bg-[#ffff] border-2 rounded text-[#1f3e72]">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl text-[#1f3e72] text-center font-bold flex justify-between">
                            <span><AiTwotoneSafetyCertificate className='w-8 h-8 p-2 text-[#1f3e72] bg-slate-200' /></span>
                            Prevent unstable prices
                            <span><AiFillCaretDown className='w-8 h-8 bg-slate-100 text-[#1f3e72] p-2' /></span>
                        </div>
                        <div className="collapse-content pt-3">
                            <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
                                ut<br /> occaecat consequat est minim minim esse tempor laborum consequat esse<br /> adipisicing eu reprehenderit enim..</p>
                        </div>
                    </div>
                    <div className="collapse bg-[#ffff] border-2 rounded text-[#1f3e72]">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl text-[#1f3e72] text-center font-bold flex justify-between">
                            <span><AiTwotoneSafetyCertificate className='w-8 h-8 p-2 text-[#1f3e72] bg-slate-200' /></span>
                            Prevent unstable prices
                            <span><AiFillCaretDown className='w-8 h-8 bg-slate-100 text-[#1f3e72] p-2' /></span>
                        </div>
                        <div className="collapse-content pt-3">
                            <p>Exercitation in fugiat est ut ad ea cupidatat ut<br /> in cupidatat
                                occaecat ut occaecat consequat est minim minim esse<br /> tempor laborum
                                consequat esse adipisicing eu reprehenderit enim.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueSection;