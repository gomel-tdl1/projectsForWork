function useBattery() {
    let power=document.getElementById('power');
    if(power.offsetWidth===0){
        alert("Вы не можете использовать батарею.\nОна разряжена!");
        return;
    }
    power.className='low';
    setTimeout(()=>power.style.width=0+'px',10000);
}

function charging() {
    let power=document.getElementById('power');
    if(power.offsetWidth===500){
        alert("Батарея уже заряжена на 100% !");
        return;
    }
    let area=document.getElementById('area');
    power.className='high';
    area.innerHTML='<div class="loader-container"></div>';
    let loaderContainer=document.getElementsByClassName('loader-container')[0];
    loaderContainer.innerHTML='<div class="loader">\n' +
        '    <span>0%</span>\n' +
        '    <span>10%</span>\n' +
        '    <span>20%</span>\n' +
        '    <span>30%</span>\n' +
        '    <span>40%</span>\n' +
        '    <span>50%</span>\n' +
        '    <span>60%</span>\n' +
        '    <span>70%</span>\n' +
        '    <span>80%</span>\n' +
        '    <span>90%</span>\n' +
        '    <span>100%</span>\n' +
        '  </div>';
    setTimeout(()=>power.style.width=500+'px',10000);
    setTimeout(()=>area.innerHTML='',16400);
}

