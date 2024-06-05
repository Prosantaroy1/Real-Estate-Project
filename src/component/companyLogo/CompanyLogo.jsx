import logoimg from '../../assets/img/equinix.png'
import logoimg2 from '../../assets/img/prologis.png'
import logoimg3 from '../../assets/img/tower.png'
import logoimg4 from '../../assets/img/realty.png'

const CompanyLogo = () => {
    return (
        <div className='pt-16 flex justify-between items-start'>
            <img src={logoimg} alt="company-logo" className='w-30 h-20'  />
            <img src={logoimg2} alt="company-logo" className='w-30 h-20'  />
            <img src={logoimg3} alt="company-logo" className='w-30 h-20'  />
            <img src={logoimg4} alt="company-logo" className='w-30 h-20'  />
        </div>
    );
};

export default CompanyLogo;