let countLoad = 0
let countAdd = 0

const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = async (entry) => {
    const container = entry.target
    const image = container.firstChild
    image.src = image.dataset.src
    countLoad++
    counterLoad()
    observer.unobserve(container)
}
const observer = new IntersectionObserver((entries) => {
entries
    .filter(isIntersecting)
    .forEach(loadImage)
})

export const registerImage =(image) => {
    observer.observe(image)
    countAdd++
}

export function clearLoad () {
    const nodeChild = document.querySelectorAll('.images__container');
    nodeChild.forEach((node) => node.remove())
    countLoad = 0
    countAdd = 0
}

export const counterLoad = () => {
    const mesage = `😮 Las imagenes agregadas son:${countAdd} 
😁 Las imagenes cargadas son:${countLoad}
---------------------------------------------`
    console.log(mesage)
}


