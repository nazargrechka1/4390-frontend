const slides = [
  `<article class="popular-menu__item">
      <div class="popular-menu__img-wrapper">
        <img
          class="popular-menu__image"
          src="img/popular-menu/popular-menu-espresso.png"
        />
      </div>

      <div class="popular-menu__content">
        <h3 class="popular-menu__subtitle">Classic Espresso</h3>
        <p class="popular-menu__description">Rich and bold espresso shot</p>
        <p class="popular-menu__price">$3.50</p>
      </div>
    </article>`,

    `<article class="popular-menu__item">
      <div class="popular-menu__img-wrapper">
        <img
          class="popular-menu__image"
          src="img/popular-menu/popular-menu-cappuccino.png"
        />
      </div>

      <div class="popular-menu__content">
        <h3 class="popular-menu__subtitle">Cappuccino</h3>
        <p class="popular-menu__description">
          Perfect blend of espresso and milk
        </p>
        <p class="popular-menu__price">$4.25</p>
      </div>
    </article>`,

    `<article class="popular-menu__item">
      <div class="popular-menu__img-wrapper">
        <img
          class="popular-menu__image"
          src="img/popular-menu/popular-menu-sandwich.png"
        />
      </div>

      <div class="popular-menu__content">
        <h3 class="popular-menu__subtitle">Sandwich</h3>
        <p class="popular-menu__description">
          Fresh ingredients on artisan bread
        </p>
        <p class="popular-menu__price">$8.95</p>
      </div>
    </article>`,
    
    `<article class="popular-menu__item">
      <div class="popular-menu__img-wrapper">
        <img
          class="popular-menu__image"
          src="img/popular-menu/popular-menu-burger.png"
        />
      </div>

      <div class="popular-menu__content">
        <h3 class="popular-menu__subtitle">Burger</h3>
        <p class="popular-menu__description">
          Fresh ingredients on artisan bread
        </p>
        <p class="popular-menu__price">$10.00</p>
      </div>
    </article>`,
];

const carousel = document.querySelector('.popular-menu__list');
let currentIndex = 0;

function showSlides()
{
    carousel.innerHTML = slides[currentIndex];
    if ( window.matchMedia('(min-width: 700px)').matches ) {
        const secondSlideIndex = (currentIndex + 1) % slides.length;
        carousel.innerHTML += slides[secondSlideIndex];
        if ( window.matchMedia('(min-width: 1024px)').matches ) {
            const thirdSlideIndex = (currentIndex + 2) % slides.length;
            carousel.innerHTML += slides[thirdSlideIndex];
        }
    }
}

function nextSlide()
{
  currentIndex = (currentIndex + 1) % slides.length;
  showSlides();
}
setInterval(nextSlide, 3000);
showSlides();

/*function prevSlide()
{
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlides();
}

const nextBtn = document.querySelector('.popular-menu__btn-next');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.popular-menu__btn-prev');
prevBtn.addEventListener('click', prevSlide);*/