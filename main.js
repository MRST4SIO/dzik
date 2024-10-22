var i = 0;
function myfunction() {
    i++;
    let str = "hello " + i;
    document.getElementById("text").innerHTML = str;

}
let myInterval = setInterval(myfunction, 1000);

let licznik = 0;

function stopInter() {
    if(i % 7 == 0 || toString(i).includes('7'))
    {   
        licznik++;    
        document.getElementById("i").innerHTML = licznik;
    }
}