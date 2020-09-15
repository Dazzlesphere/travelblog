(function() {

    let heroImages = ['hero1.jpg', 'hero2.jpg']
    let heroEl = document.querySelector('.hero > .slide')
    let index = Math.floor(Math.random() * heroImages.length)

    heroEl.style.backgroundImage = 'url(assets/images/' + heroImages[index] + ')'

})()