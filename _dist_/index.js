import {registerImage, clearLoad, counterLoad} from './plugins/lazyLoad.js'
const API_URL = 'https://randomfox.ca/floof/'
const imagesBox = document.querySelector('div.images-box')
const imageButton = document.querySelector('button.general-button')
const cleanButton = document.querySelector('.general-botton--clear')

async function getUrlImage () {
    const info = await fetch(API_URL)
    const data = await info.json()
    return data.image
}
 
async function createImageNode () {
    const imageContainer = document.createElement('div')
    imageContainer.className = 'images__container'

    const image = document.createElement('img')
    image.className = 'images__image'
    image.dataset.src = await getUrlImage()

    imageContainer.appendChild(image)

    return imageContainer
}

const addImage = async () => {
    const newImage = await createImageNode()
    imagesBox.appendChild(newImage)
    registerImage(newImage)
    counterLoad()
}

imageButton.addEventListener('click', addImage)
cleanButton.addEventListener('click', clearLoad)