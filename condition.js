// DesLauw

 if (document.querySelector(".connex")) {
	document.querySelector(".connex button").addEventListener("click", () => {
		
	var lname = document.querySelector(".nom").value
	var fname = document.querySelector(".prenom").value		
	var phone = document.querySelector(".tel").value
	var date = document.querySelector(".an").value
	var passw = document.querySelector(".mdp").value
	var passwc = document.querySelector(".mdpc").value


		if (lname.trim() != "") {

			 if (lname.length >= 4 && lname.length < 50) {

			 	if (fname.trim() != "") {

			 		if (fname.length >= 4 && fname.length < 50) {

			 			if (phone.length == 8 || phone.length == 11) {

			 				if (date.trim() != "") {

			 					if (passw.length >= 6 && passw.length < 20) {

			 						if (passw == passwc) {

			 							$.ajax({
			 								url : "config.php",
			 								method : "post",
			 								data : {
			 									lastname : lname.trim(),
			 									firstname : fname.trim(),
			 									telephone : phone.trim(),
			 									month : date.trim(),
			 									motdepasse : passw.trim(),
			 									motdepasseconf : passwc.trim()
			 								},

			 								success : function(dataTrue) {
			 									if (phone == dataTrue) {
			 										document.location.href = 'python.py?user=' + dataTrue;
			 										
			 									}else {
			 										alert(dataTrue)
			 									}
			 								},

			 								error : function(er) {
			 									alert(er)
			 								}
			 								
			 							})

			 						}else {
			 							verif("Les  mots de passe ne correspondent pas. Réessayez!")
			 						}

			 					}else {
			 						verif("Le mot de passe doit contenier entre 6 et 20 caractères", "e")
			 					}

			 				}else {
			 					verif("Ajoutez le jour et le mois de votre naissance", "e")
			 				}

			 			}else {
			 				verif("Entrez un numéro correct!", "e")
			 			}

			 		}else {
			 			verif("Entrez un prénom correct!", "e")
			 		}

			 	}else {
			 		verif("Veuillez entrez votre prénom", "")
			 	}

			}else {
				verif("Entrez un nom correct!", "e")
			}

		}else {
			verif("Veuillez entrez votre nom!")
		}
	})
}



if (document.querySelector(".pej1")) {	
	document.querySelector(".butt button").addEventListener("click", () => {
		var user_ = document.querySelector(".id").value
		var secretcode = document.querySelector(".pwd").value

		if (user_.length == 8) {

			if (secretcode.length >= 6 && secretcode.length <= 20) {

				$.ajax({
					url : "connex.php",
					method : "post",
					data : {
						user_id : user_.trim(),
						password : secretcode.trim()

					},

					success : function(dataTrue) {
						if (user_ == dataTrue) {
							document.location.href = '../quiz_project/QUIZ/index.html'
						}else {
							alert(dataTrue)
						}
					},

					error : function(er) {
						alert(er)
					}
				})

			}else {
				ver("Le mot de passe doit avoir entre 6 et 20 caractères.", "e")
			}
		
		}else {
			ver("Entrez un numéro correct!", "e")
		}
	})
}


