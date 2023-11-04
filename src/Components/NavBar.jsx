

function NavBar(){
    return(
        <navbar className="nav-main">
        <div className='navbar'>
          <div className='navbar-right'>
            <ul className='right-list'>
              <li className='list-name'><a href="/">Santiago Cocca</a></li>
            </ul>
          </div>
          <div className='navbar-left'>
            <ul className='left-list'>
              <li className='list'><a href="/About">About Me</a></li>
              <li className='list'><a href="/skills">Skills</a></li>
              <li className='list'><a href="/works">Working Experience</a></li>
              <li className='list'><a href="/recog">Recognitions</a></li>
              <li className='getInTouch'><a href="/getintouch">Get in Touch</a></li>
            </ul>
          </div>
        </div>
      </navbar>
    )
}

export {NavBar}