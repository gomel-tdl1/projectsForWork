window.onload = () => {
    let control = document.querySelectorAll('.dot');
    let twitter = document.querySelectorAll('.slider');
    control.forEach((item, index) => {
        item.addEventListener('click', () => {
            twitter[0].className = 'slider none';
            twitter[1].className = 'slider none';
            twitter[2].className = 'slider none';

            control[0].className = 'dot';
            control[1].className = 'dot';
            control[2].className = 'dot';

            twitter[index].className='slider';
            control[index].className='dot active';
        });
    });
};

