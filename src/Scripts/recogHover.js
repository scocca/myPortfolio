const recogHover=()=>{

    const ele = document.getElementById('recog-hover')
    const height = ele.clientHeight
    const width = ele.clientWidth
    
    ele.addEventListener('mousemove', (evt)=>{
        const {layerX, layerY} = evt
    
        const yRotation=(
            (layerX-width/2)/width)*2
    
        const xRotation=(
            (layerY-height/2)/width)*2
    
        const string =`
        perspective(200px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`
    
        ele.style.transform = string
    }) 
    
    ele.addEventListener('mouseout', ()=>{
        ele.style.transform = `
        perspective (200px)
        scale(1)
        rotateX(0)
        rotateY(0)`
    })
    }
    export {recogHover}