
const appButton = () => {
    const gameobj=document.getElementById("game")
    gameobj.style.height="300px";
    document.getElementById("start").style.display="none";
    gameobj.style.justifyContent="flex-start";
    gameobj.style.alignItems="center";
    document.getElementById("igapear").style.display="block";
    const catobj = document.getElementById("cato")
    const y = Math.floor(Math.random() * 100);
    const x = Math.floor(Math.random() * 100);
    catobj.style.display="block";
    catobj.style.top= `${y}%`;
    catobj.style.left= `${x}%`;
}

const catoaplast = () =>{
    const texto = document.getElementById("igapear");
    const catobj = document.getElementById("cato");
    catobj.style.backgroundImage="url('./resources/images/catodeath.png')";
    texto.innerHTML= "YOU WON!!";
    const catoend = document.getElementById("end");
    catoend.style.display="block";
}


const restart =()=>{
    const texto = document.getElementById("igapear");
    const gameobj=document.getElementById("game")
    gameobj.style.height="auto";
    document.getElementById("start").style.display="block";
    texto.style.display="none";
    const catobj = document.getElementById("cato")
    catobj.style.display="none";
    document.getElementById("end").style.display="none";
    catobj.style.backgroundImage="url('./resources/images/cato.jpg')";
    texto.innerHTML= "SEARCH FOR THE CAT!!!!!";
}