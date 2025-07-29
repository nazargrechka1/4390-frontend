
  const burger = document.getElementById('burger-menu');
  const linksBlock = document.querySelector('.header__links-block');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    linksBlock.classList.toggle('open');
  });


  
