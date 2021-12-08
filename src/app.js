import './style.css'
const placedHolderPhoto = document.querySelector('.placedPhoto');
const paginationLeft = document.querySelector('#paginationLeft');
const paginationRight = document.querySelector('#paginationRight');
const URL = 'https://dog.ceo/api/breed/hound/images';
const paginationNumbers = document.querySelectorAll('.pagination_number');
window.addEventListener('DOMContentLoaded', getPhotos);
paginationLeft.addEventListener('click', spinPrev);
paginationRight.addEventListener('click', spinNext);
const photosArray = [];
let counter = 0;

paginationNumbers.forEach(paginationNumber => {
    paginationNumber.addEventListener('click', function () {
        deleteClass('active', paginationNumbers)
        paginationNumber.classList.add('active')
        const myPage = Number(paginationNumber.innerHTML)
        counter = myPage-1
        getArrayPhotos(counter)
    });
});

function deleteClass(className, domElement) {
        domElement.forEach(paginationNumber => {
        paginationNumber.classList.remove(className)
    })
}

function addClass(counter,domElement) {
   domElement[counter].classList.add('active')
}


function spinNext() {
    if (counter <11) {
        deleteClass('active', paginationNumbers)
        counter++;
        addClass(counter, paginationNumbers)
        return getArrayPhotos(counter);
    }
}

function spinPrev() {
    if (counter !== 0) {
        deleteClass('active', paginationNumbers)
        counter--;
        addClass(counter, paginationNumbers)
        return getArrayPhotos(counter);
    }
}

async function getPhotos() {
    try {
        await fetch(URL)
            .then(res => res.json())
            .then(data => data.message.forEach(element => photosArray.push(element)))
        addClass(counter, paginationNumbers)
        getArrayPhotos(counter)
    } catch (e) {
        console.log(e)
    }
}

const showPhotos = (array) => {
    if (placedHolderPhoto.children.length === 0) {
        createPlaceHolderForPhoto(array);
        initLightBox()
    } else {
        placedHolderPhoto.innerHTML = '';
        showPhotos(array);
    }
}

const getArrayPhotos = (firstPhoto) => {
    firstPhoto = firstPhoto * 8
    let lastPhoto = firstPhoto + 8;
    let slicedArrayNumbers = photosArray.slice(firstPhoto, lastPhoto);
    return showPhotos(slicedArrayNumbers);
}



function createPlaceHolderForPhoto(array) {
    for (const srcImg of array) {
        const span = document.createElement('span');
        const img = document.createElement('img');
        img.src = srcImg;
        img.className = 'lightbox-photo';
        placedHolderPhoto.append(span);
        span.append(img);
    }
}

function initLightBox() {
    const photos = Array.prototype.slice.call(document.querySelectorAll('.lightbox-photo'));
    photos.forEach(photo => {
        photo.addEventListener('click', function () {
            const currentPhoto = new bigPicture(photo.src);
            currentPhoto.open();
        });
    });
}

function bigPicture(sourceFile) {
    this.sourceFile = sourceFile;

    this.open = function () {
        this.lightboxWrapper = document.createElement('div');
        this.lightboxWrapper.className = 'lightbox-wrapper';
        this.lightbox = document.createElement('div');
        const columnWrapper = document.querySelector('#column-wrapper');
        const overlayDiv = document.createElement('div');
        const image = document.createElement('img');
        const captionDiv = document.createElement('div');
        const self = this;
        const lightBox = this.lightbox;
        let counter = 0;

        overlayDiv.className = 'overlay';
        image.className = 'expanded';
        image.src = this.sourceFile;
        this.lightbox.appendChild(overlayDiv);
        this.lightbox.appendChild(image);
        this.lightbox.appendChild(captionDiv);
        document.body.insertBefore(this.lightboxWrapper, columnWrapper);
        this.lightbox.style.opacity = 0;
        this.lightboxWrapper.appendChild(this.lightbox);
        
        const fadeInt = setInterval(function () {
            if (counter < 1.05) {
                lightBox.style.opacity = counter;
                counter += 0.05;
            } else {
                clearInterval(fadeInt);
            }
        }, 15);

        overlayDiv.addEventListener('click', function () {
            self.close();
        });

        this.close = function () {
            let counter = 1;
            const lightBox = this.lightbox;
            const lightWrap = this.lightboxWrapper;
            const fadeInt = setInterval(function () {
                if (counter > 0) {
                    lightBox.style.opacity = counter;
                    counter -= 0.05;
                } else {
                    clearInterval(fadeInt);
                    document.body.removeChild(lightWrap);
                }
            }, 15);
        };
    }
};



