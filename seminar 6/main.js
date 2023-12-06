const seznam = [];

function vypsat()
{
    let text = "";
    //document.getElementById("seznam_aut").innerHTML = seznam.join("<br>");
    for (let i = 0; i < seznam.length; i++)
    {
        //text += seznam[i].znacka + " " + seznam[i].model + " " + seznam[i].hmotnost + "<br>"
        text += `${seznam[i].znacka} ${seznam[i].model} ${seznam[i].hmotnost} <br>`;
    }
    document.getElementById("seznam_aut").innerHTML=text;
    return text; 
}

function pridat()
{
    const auto = {znacka, model, hmotnost};
    if(kontrola())
    {
        auto.znacka = document.getElementById("znacka").value;
        auto.model = document.getElementById("model").value;
        auto.hmotnost = Number(document.getElementById("hmotnost").value); 

        seznam.push(auto);
        vypsat();
    }
}

function hmotnost()
{
    let hmotnost=0;
    for(let i = 0; i < seznam.length; i++)
    {
        hmotnost += seznam[i].hmotnost;
    }
    document.getElementById("celkovaHmotnost").value=hmotnost;
    return hmotnost;
}

function kontrola()
{
    let vypis="";
    let vystup = true;
    const arr=[
        {id: "znacka", popisek: "Nezadali jste znacku! \n"},
        {id: "model", popisek: "Nezadali jste model! \n"},
        {id: "hmotnost", popisek: "Nezadali jste hmotnost! \n", isNumber: true, _NaN:"Nezadali jste v hmotnosti cislo! \n"}
    ];

    arr.forEach((arrItem)=>{
        if(document.getElementById(arrItem.id).value=="")
        {
            vypis += arrItem.popisek; 
            vystup = false;
        }
        else if (arrItem.isNumber)
        {
            if(isNaN(document.getElementById(arrItem.id).value))
            {
                vypis += arrItem._NaN;
                vystup = false;
            }
        }
    });

    if(!vystup)
    {
        alert(vypis);
    }

    return vystup;
}

function souhrn()
{
    alert(vypsat().replace(/<br>/ig, "\n") + "Celkova hmotnost je " + hmotnost() + " kg.");
}