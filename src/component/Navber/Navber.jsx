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
            <div className="lg:px-16 max-w-screen-2xl mx-auto   fixed top-0 left-0 right-0 px-3 py-3 bg-[#131110] text-white">
                {/**nav start */}
                <nav className=" md:flex items-center justify-between">
                    {/**nav logo */}
                    <h3 className="text-3xl">Topxz</h3>
                    {/**nav link */}
                    <div className="md:flex hidden items-center   gap-8">
                        <Link href="residencies">Residencies</Link>
                        <Link href="value">Our Value</Link>
                        <Link href="contactUs">Contact Us</Link>
                        <Link href="getStart">Get Started</Link>
                        <Link href="contact"><button className="btn bg-[#568eef] px-6  text-white">Contact</button></Link>
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