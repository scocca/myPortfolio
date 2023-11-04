import { About } from '../Components/About'
import photo1 from '../assets/DSC3911.webp' 
import photo2 from '../assets/20220711_171031.webp'
import photo3 from '../assets/20230128_202758.webp'
import photo4 from '../assets/IMG_20210924_185053.webp'
import photo5 from '../assets/IMG_20211024_023329.webp'


const AboutMe=()=>{
    return(
        <>
        <About photo1={photo4} photo2={photo2} photo3={photo3} photo4={photo1} photo5={photo5}/>
        </>
    )
}

export {AboutMe}