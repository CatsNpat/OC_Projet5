import listeAPropos from '../data/apropos.json';
import Collapse from './collapse.jsx';

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