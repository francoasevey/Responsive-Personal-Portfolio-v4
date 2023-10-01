const servicesButtons = document.querySelectorAll('.service_item');
const servicesDetails = document.querySelector('.services_right');

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    servicesDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
    `
}

const removeActiveClass = () =>{
    servicesButtons.forEach(button => {
        button.classList.remove('active')
    })
}

servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass()
        const serviceClass = item.classList[1];
        getService(serviceClass)
        item.classList.add('active')
    })
})

getService('frontend')

const containerEl = document.querySelector('.projects_container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');

const swiper = new Swiper('.swiper', {
    
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
})