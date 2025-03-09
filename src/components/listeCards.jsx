import { Outlet, Link } from "react-router-dom";


function ListeCards ({logement}) {
  
  return (
    <main className='mainMain'>
      <div className='main'>
        {logement.map((element) => (
          <Link to={`/LogementDetail/${element.id}`} className='logement' key = {element.id}>
            <img src = {element.cover} title = {element.title} alt = {element.title}/>
            <h3>{element.title}</h3>
          </Link>
        ))}
      </div>
      <Outlet />
    </main>
  )
}

export default ListeCards;