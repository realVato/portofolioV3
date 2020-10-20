const URL = 'https://picsum.photos/250/250'

const firstCol = document.getElementById('col-0')
const secondCol = document.getElementById('col-1')

// boostrap class for img-borders
const imgClass = 'img-thumbnail'


// First column
function loadImages(numImages = 10) {
    let i = 0
    while(i < numImages) {
        const newDiv = document.createElement('div')
        firstCol.appendChild(newDiv)
        const img = document.createElement('img')
        img.srcset = `${URL}?random=${getRandomNum()}`
        img.className = imgClass
        newDiv.appendChild(img)
        i++
    }
}


// Second column
function loadImages1(numImages = 10) {
    let i = 0
    while(i < numImages) {
        const newDiv = document.createElement('div')
        secondCol.appendChild(newDiv)
        const img = document.createElement('img')
        img.srcset = `${URL}?random=${getRandomNum()}`
        img.className = imgClass
        newDiv.appendChild(img)
        i++
    }
}

// infinite scroll
window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages()
        loadImages1()
    }
})

// random number generator
function getRandomNum() {
    return Math.floor(Math.random() * 1000)
}

loadImages()
loadImages1()


