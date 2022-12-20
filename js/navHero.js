function navHeroJs() {
  
    const menu = document.querySelector('.menu-list')
    
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');

    const list1 = document.querySelector('.list1')
    const list2 = document.querySelector('.list2')
    const list3 = document.querySelector('.list3')
    const list4 = document.querySelector('.list4')

    list1.addEventListener('click', () => {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    })

    list2.addEventListener('click', () => {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    })

    list3.addEventListener('click', () => {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    })

    list4.addEventListener('click', () => {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    })
    
    menuBtn.addEventListener('click', () => {
      menu.style.display = 'flex';
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

  }
  
  export { navHeroJs }

