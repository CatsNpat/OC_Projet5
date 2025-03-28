import listeAPropos from '../../public/apropos.json';
import Collapse from '../components/collapse.jsx';

function Liste () {

  return (
    <main className='aPropos'>
      <div className='mainApropos'>
        {listeAPropos.map((element) => (
          <div className='boutonApropos' key = {element.id}>
          <Collapse title = {element.title} text = {element.text} />
          </div>
        ))}
      </div>  
    </main>
  )
}

export default Liste;