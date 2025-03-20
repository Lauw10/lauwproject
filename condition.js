// DL

document.querySelector(".dl button").addEventListener("click", () => {
    var pass = document.querySelector(".pwd").value
  
       if (pass.trim() = "" && pass.length >= 6 && pass.length <= 20) {
         alert("Bienvenue")
       }else {
         alert("Le mot de passe ne doit pas être vide")
       }
})
