const About=({photo1, photo2, photo3, photo4, photo5})=>{
    return(
        <div className='personal-profile'>
        <div className='about-me'>
          <div>
            <h3 className="about-me">About Me</h3>
          </div>
          <div>
          <ul className='personal-list'>My Hobbies
            <li className='personal'>Ride my lognboard across new roads</li>
            <li className='personal'>Immortalize places in photographs</li>
            <li className='personal'>Enjoy time discovering new music</li>
            <li className='personal'>Spend time with my loved ones</li>
            <li className='personal'>Play some Videogames</li>
            <li className='personal'>Explore untravelled roads driving my car</li>
            <li className='personal'>Meditate & Connect with nature</li>
            <li className='personal'>Learn & teach new things</li>
          </ul>
          </div>
        </div>
        <div className='photos'>
          <section className='photo-librarie'>
            <img loading="lazy" src={photo1} alt='my photos'/>
            <img loading="lazy" src={photo2} alt='my photos'/>
            <img loading="lazy" src={photo3} alt='my photos'/>
            <img loading="lazy" src={photo4} alt='my photos'/>
            <img loading="lazy" src={photo5} alt='my photos'/>
          </section>
          
        </div>
      </div>

    )
}

export {About}