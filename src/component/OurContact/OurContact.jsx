import contactImg from '../../assets/img/contact.jpg'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineTwitch } from "react-icons/ai";

const OurContact = () => {
    return (
        <div className='pt-16 pb-7 px-16 flex justify-between items-center' id='contactus'>
            <div>
                <h3 className='text-[#ffc011] font-bold text-3xl'>Our Contact us</h3>
                <h2 className='text-4xl text-[#1f3e72] pt-4 pb-4 font-bold'>Easy to contact us</h2>
                <p>
                    We always ready to help by providijng the best services for you.<br />
                    We beleive a good blace to live can make your life better
                </p>
                {/**contact account */}
                <div className='pt-10'>
                    <div className='flex gap-6'>
                        <div className='border-2 p-6 rounded-xl bg-slate-50 hover:shadow-2xl'>
                            <div className='flex items-center gap-12 pb-5'>
                                <div>
                                    <AiOutlinePhone className='w-12 h-12 bg-[#e8e8e8] rounded p-2' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-[#1f3e72]'>Call</h3>
                                    <h4>088 678 346 34</h4>
                                </div>
                            </div>
                            <button className="btn  w-full bg-[#a1f0f9] hover:shadow-xl btn-info">Call Now</button>
                        </div>
                        <div className='border-2 p-6 rounded-xl bg-slate-50 hover:shadow-2xl'>
                            <div className='flex items-center gap-12 pb-5'>
                                <div>
                                    <AiOutlineMessage className='w-12 h-12 bg-[#e8e8e8] rounded p-2' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-[#1f3e72]'>Chat</h3>
                                    <h4>606 457 445 34</h4>
                                </div>
                            </div>
                            <button className="btn  w-full bg-[#a1f0f9] hover:shadow-xl btn-info">Chat Now</button>
                        </div>
                      

                    </div>
                    {/**seconde section contact */}
                    <div className='flex gap-6 pt-5'>
                        <div className='border-2 p-6 rounded-xl bg-slate-50 hover:shadow-2xl'>
                            <div className='flex items-center gap-12 pb-5'>
                                <div>
                                    <AiOutlineMessage className='w-12 h-12 bg-[#e8e8e8] rounded p-2' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-[#1f3e72]'>Video Call</h3>
                                    <h4>086 013 532 88</h4>
                                </div>
                            </div>
                            <button className="btn  w-full bg-[#a1f0f9] hover:shadow-xl btn-info">Video Call Now</button>
                        </div>
                        <div className='border-2 p-6 rounded-xl bg-slate-50 hover:shadow-2xl'>
                            <div className='flex items-center gap-12 pb-5'>
                                <div>
                                    <AiOutlineTwitch className='w-12 h-12 bg-[#e8e8e8] rounded p-2' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-[#1f3e72]'>Message</h3>
                                    <h4>128 457 385 38</h4>
                                </div>
                            </div>
                            <button className="btn  w-full bg-[#a1f0f9] hover:shadow-xl btn-info">Message Now</button>
                        </div>
                      

                    </div>
                </div>
            </div>
            <div>
                <img src={contactImg} className="w-[500px] h-[550px] rounded-t-[50%] border-spacing-4 border-8 border-solid border-x-[#686767]  " alt="bannerImg" />
            </div>
        </div>
    );
};

export default OurContact;