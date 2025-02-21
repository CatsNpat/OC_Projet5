import logo from '../assets/imgHome/LOGO.png';
import imgFondSlogan from '../assets/imgHome/imgFondSlogan.png';
import  logementData from '../../public/logements.json';
import { useState, useEffect } from 'react';
// import `../assets/my-sass.scss`

function Banner () {
  return (
    <header>
      <img src = {logo} alt = "Logo de Kasa"/>    
      <ul>
        <li>
          <a href ='../pages/Home.jsx'>Accueil</a>
        </li>
        <li>
          <a href ='../pages/Blogs.jsx'>À propos</a>
        </li>
      </ul>
      <>
      <img src = {imgFondSlogan} alt ="photo d'une falaise"/>
      <p>Chez vous, partout et ailleurs</p>
      </>
    </header>  
  )
}

function Liste ({logement}) {
  
  return (
    <div>
      {logement.map((element) => (
        <div key = {element.id}>
          <img src = {element.cover} />
        </div>
      ))}
    </div>
  )
}

const Home = () => {
    return (
      <>
        <Banner />
        <Liste logement = {logementData} />
      </>
    )  
  };
  
  export default Home;
  