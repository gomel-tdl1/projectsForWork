window.onload=()=>{
    let control=document.querySelectorAll('.dot');
    let twitter=document.querySelectorAll('.slider');
    control.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            if(index===0){
                twitter[0].className='slider';
                twitter[1].className='slider none';
                twitter[2].className='slider none';

                control[0].className='dot active';
                control[1].className='dot';
                control[2].className='dot';
            }else if(index===1){
                twitter[0].className='slider none';
                twitter[1].className='slider';
                twitter[2].className='slider none';

                control[0].className='dot';
                control[1].className='dot active';
                control[2].className='dot';
            }else if(index===2){
                twitter[0].className='slider none';
                twitter[1].className='slider none';
                twitter[2].className='slider';

                control[0].className='dot';
                control[1].className='dot';
                control[2].className='dot active';
            }
        });
    });
};

