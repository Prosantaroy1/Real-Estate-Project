

const Footerpage = () => {
    return (
        <div className="pt-12 flex justify-between items-center pb-12">
            <div className="space-y-4">
                <h3 className="text-4xl font-bold text-[#2190ff]">Topxz</h3>
                <p>
                    Our vision is to make all people<br />
                    the best place to live for them.
                </p>
            </div>
            <div>
                <h2 className="text-4xl text-[#1f3e72] pb-2 font-bold">Information</h2>
                <p>
                    145 New York, FL 5467, Bangladesh
                </p>
                <div className="flex gap-5 pt-4 text-black font-semibold list-none">
                    <li>Property</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>About Us</li>
                </div>
            </div>
        </div>
    );
};

export default Footerpage;