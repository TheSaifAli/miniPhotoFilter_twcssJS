const valueBox= document.querySelector('#valueBox')
const rangeEl= document.querySelector('#rangeEl')
const imageEl= document.querySelector('#imageEl')
const fileInput= document.querySelector('#fileInput')
const propertyContainer= document.querySelector('#propertyContainer')

const filters = ['brightness','contrast','grayscale','hue-rotate','blur','opacity'];

let brightness=50;
let contrast=50;
let grayscale=0;
let hueRotate=0
let blurEf=0;
let opacity=100;

filters.forEach(filter=>{
    const pEl = document.createElement('p');
    pEl.classList.add('pElStyle');
    pEl.textContent = filter
    const inputRangeEl= document.createElement('input');
    inputRangeEl.classList.add('inputRangeElStyle');
    inputRangeEl.setAttribute('type','range');
    inputRangeEl.setAttribute('min',0);
    inputRangeEl.setAttribute('max',100);
    const inputNumEl = document.createElement('input');
    inputNumEl.setAttribute('min',0);
    inputNumEl.setAttribute('max',100);

    inputNumEl.classList.add('inputNumElStyle')
    inputNumEl.setAttribute('type','number');
    if(filter ==='brightness')
    {
        inputRangeEl.addEventListener('change',(e)=>{
            brightness=e.target.value
            inputNumEl.value=brightness;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
        inputNumEl.addEventListener('keyup',(e)=>{
            brightness = e.target.value;
            inputRangeEl.value=brightness;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
    }
    else if(filter ==='contrast')
    {
        inputRangeEl.addEventListener('change',(e)=>{
            contrast=e.target.value
            inputNumEl.value=contrast
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
        inputNumEl.addEventListener('keyup',(e)=>{
            contrast = e.target.value;
            inputRangeEl.value=contrast;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
    }
    else if(filter ==='grayscale')
    {
        inputRangeEl.addEventListener('change',(e)=>{
            grayscale=e.target.value
            inputNumEl.value=grayscale;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
        inputNumEl.addEventListener('keyup',(e)=>{
            grayscale = e.target.value;
            inputRangeEl.value = grayscale;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
    }
    else if(filter ==='hue-rotate')
    {
        inputRangeEl.addEventListener('change',(e)=>{
            hueRotate=e.target.value
           inputNumEl.value=hueRotate;
           updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
        inputNumEl.addEventListener('keyup',(e)=>{
            hueRotate = e.target.value;
           inputRangeEl.value=hueRotate;
           updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
    }
    else if(filter ==='blur')
    {
        inputRangeEl.addEventListener('change',(e)=>{
            blurEf=e.target.value
            inputNumEl.value=blurEf;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
        inputNumEl.addEventListener('keyup',(e)=>{
            blurEf = e.target.value;
           inputRangeEl.value=blurEf;
           updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
    }
    else if(filter ==='opacity')
    {
        inputRangeEl.addEventListener('change',(e)=>{
            opacity=e.target.value
            inputNumEl.value=opacity;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
        inputNumEl.addEventListener('keyup',(e)=>{
            opacity = e.target.value;
            inputRangeEl.value=opacity;
            updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
        })
    }
    
    pEl.appendChild(inputRangeEl);
    pEl.appendChild(inputNumEl);
    propertyContainer.appendChild(pEl);
    
})

const resetBtn= document.createElement('button');
resetBtn.textContent='Reset';
resetBtn.classList.add('resetBtnStyle')
propertyContainer.appendChild(resetBtn);

resetBtn.addEventListener('click',()=>{
     location.href='/'
})

function updateImage(brightness,contrast,grayscale,hueRotate,blurEf,opacity)
{
    imageEl.style.filter=`brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) blur(${blurEf}px) opacity(${opacity}%)`;
    console.log(`brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) blur(${blurEf}px) opacity(${opacity}%)`)
}
fileInput.addEventListener('change',(e)=>{
    const file = e.target.files[0];
    console.log(file);
    let url= window.URL.createObjectURL(file);
    console.log(url);
    imageEl.src=url
})

