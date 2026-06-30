const curtidas = document.getElementById("curtidas") // Pega o botão de curtida pelo
curtidas.addEventListener("click", aumetarCurtidas)

//função de aumetar curtidas 
function aumetarCurtidas(){
    let quantidade = document.querySelector("span")
    quantidade.textContent++;
}