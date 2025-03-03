import logo from '../assets/imgHome/LOGOF.png';
import '../assets/my-sass.scss';

function Footer () {

    return (
        <div className='footer'>
            <div>
          <img src = {logo} alt = "Logo de Kasa"/>
            </div>
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
  }

  const FooterNav = () => {
    return (
      <>
        <Footer />
      </>
    )  
  };
  
  export default FooterNav;