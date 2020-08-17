window.onload=()=>{
    let nav=document.querySelector('.menu__points')
                                    .querySelectorAll('.menu__item');
    let elem=['.slider','.slider','.service','.join','.costumer','.work'];
    nav.forEach((item,index)=>{
        item.addEventListener('click',()=>{
           document.querySelector(elem[index]).scrollIntoView();
        });
    });

    //-----------------------------------------------------

    let textSlider1=document.querySelector('.slider-text1');
    let textSlider2=document.querySelector('.slider-text2');

    let actionSlider=document.querySelectorAll('.slider__action');
    actionSlider.forEach(item=>{
        item.addEventListener('click',()=>{
            if(textSlider1.className.includes('none')){
                textSlider1.className='slider-text1';
                textSlider2.className='slider-text2 none';
            }else{
                textSlider1.className='slider-text1 none';
                textSlider2.className='slider-text2';
            }
        });
    });

    //---------------------------------------------------

    let serviceMenu = document.querySelectorAll('.service__item');
    serviceMenu.forEach(item => {
        let img = item.querySelectorAll('img');
        item.addEventListener('mouseover', () => {
            img[0].className='none';
            img[1].className='';
        });
        item.addEventListener('mouseout', () => {
            img[0].className='';
            img[1].className='none';
        });
    });

    //-----------------------------------------------------------------------

    let team=document.querySelectorAll('.team__column');
    team.forEach(item=>{
        let info=item.querySelector('.team__column__info');
        item.addEventListener('mouseover', () => {
            info.className='team__column__info';
        });
        item.addEventListener('mouseout', () => {
            info.className='team__column__info none';
        });
    });
};





