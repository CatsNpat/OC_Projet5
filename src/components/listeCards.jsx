import { Link } from "react-router-dom";


function ListeCards ({logement}) {
  
  return (
    <main className='mainMain'>
      <div className='main'>
        {logement.map((element) => (
          <div className="logement" key = {element.id}>
          <Link to={`/LogementDetail/${element.id}`}>
            <img src = {element.cover} title = {element.title} alt = {element.title}/>
            <h4>{element.title}</h4>
          </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ListeCards;