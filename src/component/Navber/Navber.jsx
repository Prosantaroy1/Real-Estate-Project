import { useState } from "react";
import { Link } from "react-scroll";

{/**react icon link */ }
import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";


const Navber = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className="lg:px-24 max-w-screen-2xl mx-auto pt-8  top-0 left-0 right-0 px-3 py-3 bg-[#131110] text-white">
                {/**nav start */}
                <nav className=" md:flex items-center justify-between">
                    {/**nav logo */}
                    <Link className="text-4xl font-bold hover:cursor-pointer" to="home" activeClass="active" spy={true}  smooth={true} offset={-50}   duration={500}>Topxz</Link>
                    {/**nav link */}
                    <div className="md:flex hidden font-semibold text-xl items-center   gap-8">
                        <Link to="residencies" className="hover:cursor-pointer" activeClass="active" spy={true}  smooth={true} offset={-50}   duration={500} >Residencies</Link>
                        <Link to="value" className="hover:cursor-pointer" activeClass="active" spy={true}  smooth={true} offset={-50}   duration={500}>Our Value</Link>
                        <Link to="contactus" className="hover:cursor-pointer" activeClass="active" spy={true}  smooth={true} offset={-50}   duration={500}>Contact Us</Link>
                        <Link to="getstart" className="hover:cursor-pointer" activeClass="active" spy={true}  smooth={true} offset={-50}   duration={500}>Get Started</Link>
                        <Link to="contact" className="hover:cursor-pointer" activeClass="active" spy={true}  smooth={true} offset={-50}   duration={500}><button className="btn bg-[#568eef] px-6  text-white">Contact</button></Link>
                    </div>

                </nav>
                {/**responsive model */}
                <div className="md:hidden ">
                    <button className=" items-center" onClick={toggleMenu}>
                        {
                            open ? (<FiX className="w-8 h-6" />) : (<FiAlignCenter className="h-6 w-8" />)
                        }
                    </button>
                </div>
            </div>

            {/**nav link responsive */}
            <div className={`${open ? "hidden" : "hidden "} flex flex-col justify-center items-center space-y-5 `}>
                <Link href="residencies">Residencies</Link>
                <Link href="value">Our Value</Link>
                <Link href="contactUs">Contact Us</Link>
                <Link href="getStart">Get Started</Link>
                <Link href="contact"><button className="btn bg-[#568eef] px-6  text-white">Contact</button></Link>
            </div>

        </>
    );
};

export default Navber;