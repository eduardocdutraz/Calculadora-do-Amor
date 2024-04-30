let result = document.querySelector( '#result' );
let btn = document.querySelector('#btn');
let a = btn.addEventListener('click',()=> {
    let randomNumber = parseInt( Math.random() * 100);
    console.log(randomNumber);
    let yourName = document.querySelector("#your-name").value;
    let partnerName = document.querySelector("#partner-name").value;

    if(yourName === ""){
        alert("Insira o seu nome")
    }
    else if(partnerName === ""){
        alert("Insira o nome do seu parceiro")
    }
    else{
        result.innerHTML = yourName + " e " +partnerName +" possuem "+ randomNumber + "% de correspondencia";
    }
} );
