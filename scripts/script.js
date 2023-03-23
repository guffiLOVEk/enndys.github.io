
document.addEventListener('DOMContentLoaded', function () {
    document.body.onload = function () {
        setTimeout(() => {
            let loader = document.querySelector('.preloader__bg')
            let pre = document.querySelector('.preloader')
            let body = document.querySelector('.body').classList
            let prevLogoWrap = document.querySelector('.preloader__logo-wrapper')
            
            let borderBottom = document.querySelectorAll('.border__bottom')

            borderBottom.forEach(item => {
                setTimeout(() => {
                    item.classList.add('active')
                }, 2000);
            })


            loader.style.transition = "1s 1s"
            pre.style.transition = "0s 1s"

            if (!loader.classList.contains('done')) {
                loader.classList.add('done')
                pre.classList.add('done')  
                prevLogoWrap.classList.add('done')
            }
            if (loader.classList.contains('done')) {
                setTimeout(() => {
                    body.remove('overflow-hidden')
                }, 1399);
            }


            let mainTitleWrap = document.querySelectorAll('.main__title-wrap')
        
            mainTitleWrap.forEach(item => {
                item.style.overflow = "hidden"
                item.style.height = item.clientHeight + "px"
                item.querySelector('.animated-item').style.transform = "translateY(200%)";
                setTimeout(() => {
                    item.querySelector('.animated-item').style.transform = "translateX(0%)";
                }, 1000);
            })
        





        }, 0);
    }

    window.addEventListener('scroll', (e) => {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let pre = (windowScroll / windowHeight) * 100
        let scrollEl = document.querySelector('.scroll__bar-span')
        scrollEl.style.height = pre + "%"
    })
    
    let prevLogo = document.querySelector('.preloader__logo')
    let prevLogoWrap = document.querySelector('.preloader__logo-wrapper')
    prevLogoWrap.style.height = prevLogo.clientHeight + "px"




    let burger = document.querySelector('.header__burger')
    let headerUl = document.querySelector('.header__ul')

    
    burger.addEventListener('click', (event) => {
        event.preventDefault()
        burger.classList.toggle('active')
        headerUl.classList.toggle('active')
    })


    // let scrolling = document.querySelector('.scrolling')

    // window.onscroll = () => {
    //     let vertical_position = 0;
    //     if (pageYOffset)
    //       vertical_position = pageYOffset;
    //     else if (document.documentElement.clientHeight)
    //       vertical_position = document.documentElement.scrollTop;
    //     else if (document.body)
    //       vertical_position = document.body.scrollTop;
      
    //     let scrolling = document.querySelector('.scrolling');
    //     scrolling.style.left = (vertical_position + 10) + 'px';
    // }

    let mainTxt = document.querySelectorAll('.main__txt')
    mainTxt.forEach(item => {
        item.style.maxWidth = item.clientWidth + "px"
        item.style.minWidth = "100%"
    })

    // function appendHtml(el, str) {
    //     var div = document.createElement('div'); //container to append to
    //     div.innerHTML = str;
    //     while (div.children.length > 0) {
    //       el.appendChild(div.children[0]);
    //     }
    //   }
    // let www = ``
    // appendHtml(document.body, www)



    if($(window).width() >= 992) {    
        let header = document.querySelector('.header') ,
            menuUl = document.querySelectorAll('.menu__ul')

        menuUl.forEach(item => {
            item.style.height = header.clientHeight + "px"
        })        
    }

    let backArrow = document.querySelectorAll('.back__arrow'),
        l = document.querySelectorAll('.nav__item.nav__menu')

    backArrow.forEach(item => {
        item.addEventListener('click', (event) => {
            item.parentElement.classList.add('back')
            setTimeout(() => {
                item.parentElement.classList.remove('back')
            }, 500);
        })
    })

    let navMenu = document.querySelectorAll('.nav__menu')
    let navMenu1 = document.querySelector('.nav__menu.tab-1')
    let navMenu2 = document.querySelector('.nav__menu.tab-2')
    let navMenu3 = document.querySelector('.nav__menu.tab-3')

    navMenu.forEach(item => {
        item.addEventListener('click', (event) => {
            if(event.target !== item) {
                console.log('g')
            }

            if(item == navMenu1) {
                item.querySelector('.menu__ul.tab-1').classList.toggle('active')
                item.querySelector('.menu__ul.tab-2').classList.remove('active')
                item.querySelector('.menu__ul.tab-3').classList.remove('active')
            }
            if(item == navMenu2) {
                item.querySelector('.menu__ul.tab-2').classList.toggle('active')
                item.querySelector('.menu__ul.tab-1').classList.remove('active')
                item.querySelector('.menu__ul.tab-3').classList.remove('active')
            }    
            if(item == navMenu3) {
                item.querySelector('.menu__ul.tab-3').classList.toggle('active')
                item.querySelector('.menu__ul.tab-2').classList.remove('active')
                item.querySelector('.menu__ul.tab-1').classList.remove('active')
            }    
        })        
    })

    window.addEventListener('click', (event) => {
        let navMenu = document.querySelectorAll('.nav__menu')
        navMenu.forEach(item => {
            item.addEventListener('click', () => {
                if(event.target = item) {
                    let burger = document.querySelector('.header__burger')
                    document.querySelector('.header__burger').classList.toggle('d-none')
                    if(event.target = window) {
                        document.querySelector('.header__burger').classList.remove('d-none')
                    }
                }                
            })

        })
    })
});

