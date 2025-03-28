function Banner ({element, alt, title, h2}) {
  return (
    <div className='imgSlogandiv'>
      <div className='imgSlogan'>
        <img src = {element} alt = {alt} title = {title}/>
          <div>
            <h2>{h2}</h2>
          </div>
      </div>
    </div>
  )
}

export default Banner;