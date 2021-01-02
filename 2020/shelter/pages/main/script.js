'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //Появление меню-бургер

    const body = document.querySelector('body');
    const burger = document.querySelector('.header__burger');
    const navigation = document.querySelector('.navigation');
    burger.addEventListener('click', (event) => {
        burger.classList.toggle('header__burger__active');
        navigation.classList.toggle('navigation__active');
        body.classList.toggle('hide');
    });

    //установка количества слайдов в зависимости от ширины экрана


    //обработка кликов на слайдер

    const controlLeft = [document.querySelector('.slider__left'), document.querySelector('.control__left')];
    const controlRight = [document.querySelector('.slider__right'), document.querySelector('.control__right')];
    const cardsContainer = document.querySelector('.slider__content');
    const cards = cardsContainer.querySelectorAll('.slider__content__card');

    if (cardsContainer.clientWidth === 990) {
        for (let i = 0; i < 3; i++) {
            cards[i].className = 'slider__content__card show';
        }
    } else if (cardsContainer.clientWidth === 580) {
        for (let i = 0; i < 2; i++) {
            cards[i].className = 'slider__content__card show';
        }
    } else if (cardsContainer.clientWidth === 270) {
        cards[0].className = 'slider__content__card show';
    }

    let showedCards = [];
    cards.forEach((item, index) => {
        if (getComputedStyle(item).display !== 'none') showedCards.push(index);
    });

    cards.forEach((item, index) => {
        if (getComputedStyle(item).display !== 'none' && index === 0) {
            controlLeft.forEach(left => {
                left.classList.add('inactive');
            });
        } else if (getComputedStyle(item).display !== 'none' && index === cards.length - 1) {
            controlRight.forEach(right => {
                right.classList.add('inactive');
            });
        }
    });

    controlLeft.forEach(item => {
        item.addEventListener('click', () => {
            movingSlider('left', showedCards);
            controlRight.forEach(right => {
                right.classList.remove('inactive');
            });
            if (showedCards.includes(0)) {
                controlLeft.forEach(left => {
                    left.classList.add('inactive');
                });
            }
        });
    });
    controlRight.forEach(item => {
        item.addEventListener('click', () => {
            movingSlider('right', showedCards);
            controlLeft.forEach(left => {
                left.classList.remove('inactive');
            });
            if (showedCards.includes(cards.length - 1)) {
                controlRight.forEach(right => {
                    right.classList.add('inactive');
                });
            }
        })
    });

    function movingSlider(direction) {
        if (direction === 'left') {

            if (showedCards.includes(0)) {
                return;
            } else {
                showedCards = showedCards.map(item => --item);
                cards.forEach((item, index) => {
                    if (showedCards.includes(index)) {
                        item.className = 'slider__content__card show';
                    } else {
                        item.className = 'none';
                    }
                });
            }

        } else if (direction === 'right') {

            if (showedCards.includes(cards.length - 1)) {
                return;
            } else {
                showedCards = showedCards.map(item => ++item);
                cards.forEach((item, index) => {
                    if (showedCards.includes(index)) {
                        item.className = 'slider__content__card show';
                    } else {
                        item.className = 'none';
                    }
                });
            }

        }
    }

//  Библиотека с данными животных

const library = [
    {
        "name": "Katrine",
        "img": "../../assets/main-page/pets/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/main-page/pets/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/main-page/pets/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/main-page/pets/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/main-page/pets/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/main-page/pets/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/main-page/pets/scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/main-page/pets/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    }
];

//  Создание окна с полной информацией о питомце
const petsContainer = document.querySelector('.animal');
const close=petsContainer.querySelector('.close__button');
const image = petsContainer.querySelector('.animal__image');
const name = petsContainer.querySelector('.name');
const typeBreed = petsContainer.querySelector('.type');
const description = petsContainer.querySelector('.description');
const item = petsContainer.querySelectorAll('.item');


cards.forEach((pet, index) => {

    const buttonPet = pet.querySelector('.card__button');
    const lib=library[index];

    buttonPet.addEventListener('click', () => {
        let img=document.createElement('img');
        img.src=lib.img;
        img.alt='';
        image.append(img);

        name.innerHTML=lib.name;

        typeBreed.innerHTML=lib.type+' - '+lib.breed;

        description.innerHTML=lib.description;

        item[0].innerHTML=`<span>Age: </span><span>${lib.age}</span>`;
        item[1].innerHTML=`<span>Inoculation: </span><span>${lib.inoculations.join(', ')}</span>`;
        item[2].innerHTML=`<span>Diseases: </span><span>${lib.diseases.join(', ')}</span>`;
        item[3].innerHTML=`<span>Parasites: </span><span>${lib.parasites.join(', ')}</span>`;
        petsContainer.className='animal show';
        body.classList.add('hide');
    });
    close.addEventListener('click',()=>{
        petsContainer.className='animal none';
        body.classList.remove('hide');
        image.innerHTML='';
    });

});

});