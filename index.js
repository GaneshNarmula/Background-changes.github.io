const randomnumber = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }

    return color;
};
let intervalid;
const startchanges = function(){
    intervalid=setInterval(changebg,1000);

    function changebg(){
        document.body.style.backgroundColor = randomnumber();
    }

};

const stopchanges = function(){
    clearInterval(intervalid)
};

document.getElementById("start").addEventListener("click",startchanges);
document.getElementById("stop").addEventListener("click",stopchanges);


