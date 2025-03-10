import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faDisplay, fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Collapse ({title, text}) {
  const[open, setOpen] = useState(false);

  return (
    <>
      <div className='collapseTout'>
        <h3>{title}</h3>
        <button onClick = {()=> setOpen(!open)}>
          {!open ? <FontAwesomeIcon icon={['fas', 'chevron-up']} /> : <FontAwesomeIcon icon={['fas', 'chevron-down']} />}
        </button>
      </div>      
      <div className= "collapseApropos" style = {{ display: open ? "flex" : "none"}}>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Collapse;