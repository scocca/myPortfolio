
import { hoverEffectGit } from "../Scripts/hoverEffectGit"
import { hoverEffectin } from "../Scripts/hoverEffect"

function WhatsApp(){
    return(
        <div id="pages-container">
            <a className='ws-container' id="github-icon" onMouseOver={hoverEffectGit} href="https://github.com/scocca"></a>
            <a className='ws-container' id='in-icon' onMouseOver={hoverEffectin}href="https://www.linkedin.com/in/santiago-cocca/"></a>
            {/* <a className='ws-container' id='ws-icon' onMouseOver={hoverEffect} href="https://api.whatsapp.com/send?phone=56994658496"></a> */}
        </div>
    )
}

export {WhatsApp}