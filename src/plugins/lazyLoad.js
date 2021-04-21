const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = async (entry) => {
    const container = entry.target
    const image = container.firstChild
    image.src = image.dataset.src
    console.log('holis')
     //se le debe indicar que deje de observar una vez que ejecutó la acción
     observer.unobserve(container)
}
const observer = new IntersectionObserver((entries) => {
    //crear la función que indica lo que se debe hacer con cada imagen
entries
//se filtran solo aquellos elementos intersectados en el viewport
    .filter(isIntersecting)
    .forEach(loadImage)
})

export const registerImage =(image) => {
    //el objetivo es que el observador registre las imagenes
    observer.observe(image)
}

