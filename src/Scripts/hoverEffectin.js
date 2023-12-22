const hoverEffect=()=>{

const el = document.getElementById('in-icon')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt)=>{
    const {layerX, layerY} = evt

    const yRotation=(
        (layerX-width/2)/width)*30

    const xRotation=(
        (layerY-height/2)/width)*30

    const string =`
    perspective(200px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`

    el.style.transform = string
}) 

el.addEventListener('mouseout', ()=>{
    el.style.transform = `
    perspective (200px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})
}
export {hoverEffect}