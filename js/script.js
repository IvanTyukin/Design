

window.addEventListener('load', function () {
    let h3Text = 'Здравствуйте!';
    let h2Text = 'Меня зовут Иван Тюкин,';
    let pText = 'И я учусь на Фронтенд Разработчика.';
    
    let delay = 40;
    let elemH3 = document.querySelector('.welcome h3');
    let elemH2 = document.querySelector('.welcome h2');
    let elemP = document.querySelector('.welcome p');
    

    const print_text = (h3Text,h2Text,pText, delay) => {
        if (h3Text.length > 0 ) {
            elemH3.innerHTML += h3Text[0];
            setTimeout(function() {
                print_text(h3Text.slice(1), h2Text, pText, delay)
            }, delay);
        } else if (h2Text.length > 0 )  {
            elemH2.innerHTML += h2Text[0];
            setTimeout(function() {
                print_text(h3Text, h2Text.slice(1), pText, delay)
            }, delay);
        }
        else if (pText.length > 0 )  {
            elemP.innerHTML += pText[0];
            setTimeout(function() {
                print_text(h3Text, h2Text, pText.slice(1), delay)
            }, delay);
        }
    }
    
    print_text(h3Text,h2Text,pText,delay);

    
})

console.log('hello');


$(window).bind('load', function() {
    
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        fitWidth: true
    })
});


window.addEventListener('load', function() {
    let navBar = this.document.querySelector('.navigation-bar');
    let navBarElem = this.document.querySelectorAll('.navigation-bar li');

    navBarElem.forEach(elem => elem.addEventListener('click', function (e) {
        if (e.target.innerText.trim() === 'О Себе')  { 
            document.querySelector('.about').classList.add('changeBg');
            setTimeout(function() {
                document.querySelector('.about').classList.remove('changeBg');
            }, 1000)
            let id  = document.querySelector('.about');
            let top = $(id).offset().top; // получаем координаты блока
            $('body, html').animate({scrollTop: top}, 600); // плавно переходим к блоку
        }
        if (e.target.innerText.trim() === 'Навыки')  { 
            document.querySelector('.skills').classList.add('changeBg');
            setTimeout(function() {
                document.querySelector('.skills').classList.remove('changeBg');
            }, 1000)
            let id  = document.querySelector('.skills');
            let top = $(id).offset().top; // получаем координаты блока
            $('body, html').animate({scrollTop: top}, 600);
        }
        if (e.target.innerText.trim() === 'Проекты')  { 
            document.querySelector('.projects').classList.add('changeBg');
            setTimeout(function() {
                document.querySelector('.projects').classList.remove('changeBg');
            }, 1000)
            let id  = document.querySelector('.projects');
            let top = $(id).offset().top; // получаем координаты блока
            $('body, html').animate({scrollTop: top}, 600);
        }
        if (e.target.innerText.trim() === 'Контакты')  { 
            document.querySelector('.social').classList.add('changeBg');
            setTimeout(function() {
                document.querySelector('.social').classList.remove('changeBg');
            }, 1000)
            
            // document.querySelector('.social').style.backgroundColor = '#A65353';
            // setTimeout(function() {
            //     document.querySelector('.social').style.backgroundColor = 'inherit';
            // },1000)
            let id  = document.querySelector('.social');
            let top = $(id).offset().top; // получаем координаты блока
            $('body, html').animate({scrollTop: top}, 600);
        }
    }))
})



