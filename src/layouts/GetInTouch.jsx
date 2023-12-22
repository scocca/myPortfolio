
const GetInTouch = () =>{
    return(
    <div id="get-main-container">
    <h1 id="get-title">Get in touch!</h1>
        <div id="text-areas">
            <textarea id="name-contact" placeholder="Your Name"/>
            <textarea id="subject" placeholder="Subject"/>
            <textarea id="contact-body" placeholder="Write me in this area"/>
            <button id="send-button">Send</button>
        </div>
        <div className="responsive-contact">
            <a className='ws-container' id="github-icon"  href="https://github.com/scocca"></a>
            <a className='ws-container' id='in-icon' href="https://www.linkedin.com/in/santiago-cocca/"></a>
            {/* <a className='ws-container' id='ws-icon'  href="https://api.whatsapp.com/send?phone=56994658496"></a> */}
        </div>
    </div>
    )
}

export { GetInTouch}