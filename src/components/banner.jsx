function Banner ({element, h2}) {
  return (
    <div className='imgSlogandiv'>
      <div className='imgSlogan'>
        <img src = {element}/>
          <div>
            <h2>{h2}</h2>
          </div>
      </div>
    </div>
  )
}

export default Banner;