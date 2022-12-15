function navHeroJs() {
  
    const menu = document.querySelector('.menu-list')
    
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');
    
    menuBtn.addEventListener('click', () => {
      menu.style.display = 'flex';
      menu.style.height = '90vh'
      closeBtn.style.display = 'inline-block';
      menuBtn.style.display = 'none';
    });
    
    //close menu nav
    const closeNav = () => {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    };
    closeBtn.addEventListener('click', closeNav);
  
    return
  }
  
  export { navHeroJs }

