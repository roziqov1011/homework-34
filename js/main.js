var elFormQosh = document.getElementById('formqosh');
var elFormTeksh = document.getElementById('formteksh');
var elList = document.getElementById('list');
var elQoshish = document.getElementById('qoshish');
var elQoshishBtn = document.getElementById('qoshishbtn');
var elSpan = document.getElementById('span');


var elTekshirbtn = document.getElementById('tekshirbtn');
List = [];
elFormQosh.addEventListener("submit", function (evt){
    evt.preventDefault();

    List.push(elQoshish.value.trim());
    elQoshish.value = null;
    console.log(List);


    for(var pruduct of List){
        var newPruduct = document.createElement('li');
        newPruduct.textContent = pruduct;
    }
    elList.appendChild(newPruduct);
    console.log(newPruduct);
    
});


elFormTeksh.addEventListener("submit", function (ev){
    ev.preventDefault();
    var elTekshir = document.getElementById('tekshir');

    if (List.includes(elTekshir.value)){
        elSpan.innerHTML = 'Maxsulotlar ichida BOR';

    }
    else{

        elQoshish.value = elTekshir.value;
        elQoshish.focus();
        elSpan.innerHTML = 'YO\'Q, maxsulotlarga qo\'shing';

    }
    elTekshir.value = null;
});

