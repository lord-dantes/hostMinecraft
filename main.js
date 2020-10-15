// libs noUiSlider in google
// .set() - change value
// .get() - give/check value
// .on('change') - if range-slider be changed
//

const rangeSSD = document.getElementById('rangeSSD'); // initialization rangeSSD
let rangeSSDresult = document.getElementById('rangeSSD-result'); // initialization rangeSSDresult
noUiSlider.create(rangeSSD, {
    start: 0,
    snap: true,
    format: wNumb({
        decimals: 0,
        thousand: ',',
        suffix: ''
    }),
    range: {
        'min':5,
        '15%':10,
        '35%':15,
        '50%':25,
        '65%':30,
        '80%':35,
        'max':45
    }
}); // create SSD range
const ramRange = {
    'min': 1.1,
    '3%': 1.2,
    '6%': 1.3,
    '9%': 1.5,
    '12%': 1.8,
    '15%': 2.0,
    '18%': 2.4,
    '21%': 3.0,
    '24%': 3.5,
    '27%': 4.0,
    '30%': 4.5,
    '33%': 5.0,
    '36%': 5.5,
    '39%': 6.0,
    '42%': 6.5,
    '45%': 7.0,
    '48%': 7.5,
    '51%': 8.0,
    '54%': 8.3,
    '57%': 8.9,
    '60%': 9.4,
    '63%': 9.8,
    '66%': 10.3,
    '69%': 10.7,
    '72%': 11.2,
    '75%': 11.7,
    '78%': 12.2,
    '81%': 13.2,
    '84%': 13.7,
    '87%': 14.2,
    '90%': 14.6,
    '95%': 15.1,
    'max': 15.6,
} // array RAM variations

const rangeRAM = document.getElementById('rangeRAM'); // init rangeRAM
let rangeRAMresult = document.getElementById('rangeRAM-result'); // init rangeRAMresult
noUiSlider.create(rangeRAM, {
    start: 1.8,
    snap: true,
    format: wNumb({
        decimals: 1,
        thousand: ',',
        suffix: ''
    }),
    range: ramRange
}); // create RAM range
rangeSSD.noUiSlider.on('change', function () { // on change range SSD
    rangeSSDresult.textContent = rangeSSD.noUiSlider.get(); // give value from rangeSSD and take rangeSSDresult
    //
    actualSSDRangeTest = Number(rangeSSD.noUiSlider.get()); // give string with rangeSSD we need transform to Number
    if (actualSSDRangeTest == 5){
        rangeRamSet('1.1');
        rangeRAMresult.textContent = rangeRAM.noUiSlider.get();
    }
    if (actualSSDRangeTest == 10){
        rangeRamSet('3.0');
        rangeRAMresult.textContent = rangeRAM.noUiSlider.get();
    }
    if (actualSSDRangeTest == 15){
        rangeRamSet('5.0');
        rangeRAMresult.textContent = rangeRAM.noUiSlider.get();
    }
    if (actualSSDRangeTest == 25){
        rangeRamSet('7.5');
        rangeRAMresult.textContent = rangeRAM.noUiSlider.get();
    }
    if (actualSSDRangeTest == 30){
        rangeRamSet('9.8');
        rangeRAMresult.textContent = rangeRAM.noUiSlider.get();
    }
    if (actualSSDRangeTest == 35){
        rangeRamSet('13.2');
        rangeRAMresult.textContent = rangeRAM.noUiSlider.get();
    }
    if (actualSSDRangeTest == 45){
        rangeRamSet('15.1');
        rangeRAMresult.textContent = rangeRAM.noUiSlider.get();
    }
    function rangeRamSet(count) {
        rangeRAM.noUiSlider.set(count);
    }
});
rangeRAM.noUiSlider.on('update', function () { // on change rangeRAM

    actualRAMRangeTest = Number(rangeRAM.noUiSlider.get()); // give and transform rangeRAM value
    actualSSDRangeTest = Number(rangeSSD.noUiSlider.get()); // give and transform rangeSSD value
    if (actualRAMRangeTest <= 2.4){
        rangeSSD.noUiSlider.set('5');
        rangeSSDresult.textContent = rangeSSD.noUiSlider.get();
    } else if (actualRAMRangeTest <= 4.5){
        rangeSSD.noUiSlider.set('10');
        rangeSSDresult.textContent = rangeSSD.noUiSlider.get();
    } else if (actualRAMRangeTest <= 7.0){
        rangeSSD.noUiSlider.set('15');
        rangeSSDresult.textContent = rangeSSD.noUiSlider.get();
    } else if (actualRAMRangeTest <= 9.4){
        rangeSSD.noUiSlider.set('25');
        rangeSSDresult.textContent = rangeSSD.noUiSlider.get();
    }
    else if (actualRAMRangeTest <= 12.2){
        rangeSSD.noUiSlider.set('30');
        rangeSSDresult.textContent = rangeSSD.noUiSlider.get();
    }
    else if (actualRAMRangeTest <= 14.6){
        rangeSSD.noUiSlider.set('35');
        rangeSSDresult.textContent = rangeSSD.noUiSlider.get();
    }
    else if (actualRAMRangeTest <= 15.6){
        rangeSSD.noUiSlider.set('45');
        rangeSSDresult.textContent = rangeSSD.noUiSlider.get();
    }
    rangeRAMresult.textContent = rangeRAM.noUiSlider.get(); // give value rangeRAM and take rangeRAMresult
    PriceRange(); // change price with need RAM
});

function PriceRange(){
    const priceRange = [
        100,
        110,
        120,
        140,
        150,
        190,
        230,
        280,
        310,
        350,
        390,
        430,
        470,
        510,
        550,
        590,
        630,
        670,
        710,
        750,
        790,
        830,
        890,
        950,
        1000,
        1050,
        1100,
        1150,
        1200,
        1260,
        1320,
        1370,
        1420
    ]; // all price from this slider
    const priceBlock = document.getElementById('rangePrice-result'); // price block
    const ArrayRamRange = Object.values(ramRange); // take object ramRange and create array values
    const actualRamRange = Number(rangeRAM.noUiSlider.get()); // take value rangeRAM

    const array = ArrayRamRange; // create array for while
    const element = actualRamRange; // create element for while
    let idx = array.indexOf(element); // create idx-index for while
    while (idx != -1) {
        const newidx = idx; // create newidx because next string repeat him
        idx = array.indexOf(element, idx + 1); // idk
        priceBlock.textContent = priceRange[newidx]; // take with index, need count
    }
}
function LinkRange(){
   const priceRange = [
        100,
        110,
        120,
        140,
        150,
        190,
        230,
        280,
        310,
        350,
        390,
        430,
        470,
        510,
        550,
        590,
        630,
        670,
        710,
        750,
        790,
        830,
        890,
        950,
        1000,
        1050,
        1100,
        1150,
        1200,1260,1320,1370,1420
    ];
   const actualPrice = document.getElementById('rangePrice-result').textContent;
 
   const linkRange = [
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D1%26project%3D1',
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D21%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D26%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D31%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D6%26project%3D1',                          
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D36%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D41%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D11%26project%3D1',
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D46%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D51%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D56%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D16%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D61%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D66%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D71%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D76%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D81%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D86%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D101%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D111%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D116%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D126%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D136%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D141%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D151%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D161%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D156%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D146%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D131%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D121%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D106%26project%3D1',                                    
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D96%26project%3D1',                                 
    'https://hosting.globalhost.top/billmgr?func=register&redirect=startpage%3Dminecraft%26startform%3Dminecraft%252Eorder%26pricelist%3D91%26project%3D1'                      
  ];
   const linkBlock = document.getElementById('linkText');
    
   const idxLink = priceRange.indexOf(parseInt(actualPrice));
   const actualLink = linkRange[idxLink];

   const configValue = document.getElementById('config-value');
   configValue.setAttribute("href", actualLink);
}
// 
function configLink(id){
   const el = document.getElementById(id);
   const configHref = el.getAttribute("data-href");
   
   const configValue = document.getElementById('config-value');
   configValue.setAttribute("href", configHref);
}
//
function addStyle(className){
    let testClass = document.getElementsByClassName(className);
    let body = document.getElementsByTagName('body');
    for (let i = 0; i < testClass.length; i++){
        body[i].setAttribute("class", "active-body");
        testClass[i].setAttribute("style", "display:flex;");
    }
}
function refreshModal(element){
    let testElement = document.getElementById(element);
    testElement.setAttribute("style", "opacity:1;z-index:1;display:flex;");
}
function removeStyle(className){
    let testClass = document.getElementsByClassName(className);
    let body = document.getElementsByTagName('body');
    for (let i = 0; i < testClass.length; i++){
        body[i].setAttribute("class", "");
        testClass[i].setAttribute("style", "display: none;");
    }
    $('#config-result,#support-result,#number-result,#contact-result').hide();
    $('#config-number').css({"filter": "unset"});
    $('.config-modal__box > img').css({"filter": "unset"});
    $('#config-number').val('');
    $('#support-key').val('');
    $('#support-message').val('');
    $('#number-name').val('');
    $('#number-phone').val('');
    // 
    const configValue = document.getElementById('config-value');
    configValue.setAttribute("href", 'https://hosting.globalhost.top/billmgr');
}
function refreshForm(){
    $('#contact-form').css({"position":"static","opacity":"1","z-index":"1"});
    $('#contact-form input#email').val('');
    $('#contact-form textarea').val('');
    $('#contact-result').hide();
}
// if need help for this bad script, can write me telegram - @callbackme_bot
// good luck!
