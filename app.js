const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector ('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  //toggle nav

  burger.addEventListener('click',()=>{
    nav.classlist.toggle('nav-active');
  });
  //animate links
  navLinks.forEach((link, index) => {
    console.log(index);
  });

}

navSlide();
