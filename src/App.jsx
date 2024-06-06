
import './App.css'
import Banner from './component/Banner/Banner'
import Footerpage from './component/Footerpage/Footerpage'
import GetContact from './component/GetContact/GetContact'
import Navber from './component/Navber/Navber'
import OurContact from './component/OurContact/OurContact'
import Residencies from './component/ResidenciesCard/Residencies'
import ValueSection from './component/ValueSection/ValueSection'
import CompanyLogo from './component/companyLogo/CompanyLogo'

function App() {
  

  return (
    <div className='bg-[#ffffff]'>
      <Navber/>
      <Banner/>
     <div className='lg:px-24'>
       <CompanyLogo/>
       <Residencies/>
       <ValueSection/>
       <OurContact/>
       <GetContact/>
       <Footerpage/>
     </div>
    </div>
  )
}

export default App

