
import './App.css'
import Banner from './component/Banner/Banner'
import Navber from './component/Navber/Navber'
import Residencies from './component/ResidenciesCard/Residencies'
import CompanyLogo from './component/companyLogo/CompanyLogo'

function App() {
  

  return (
    <div className='bg-[#ffff]'>
      <Navber/>
      <Banner/>
     <div className='lg:px-24'>
       <CompanyLogo/>
       <Residencies/>
     </div>
    </div>
  )
}

export default App

