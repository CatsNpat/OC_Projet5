import logo from '../assets/imgHome/LOGOF.png';
import '../assets/my-sass.scss';

function Footer () {

    return (
        <div className='footer'>
          <div>
            <img src = {logo} alt = "Logo de Kasa"/>
          </div>
          <div className='footer_p'>
            <p>© 2020 Kasa. </p>
            <p>All rights reserved</p>
          </div>
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