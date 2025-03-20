
function verif(er, v) {

	if (v == "r") {
		document.querySelector(".result").style.color = "green";

	}else {
		document.querySelector(".result").style.color = "red";
	}



	if (document.querySelector(".result")) {
		document.querySelector(".result").innerHTML = er.trim();
	}


	function temps() {
		document.querySelector(".result").innerHTML = "";
	}

	setTimeout(temps, 2000);
}



// Connexion

function ver(er, v) {

	if (v == "r") {
		document.querySelector(".receive").style.color = "green";

	}else {
		document.querySelector(".receive").style.color = "red";
	}



	if (document.querySelector(".receive")) {
		document.querySelector(".receive").innerHTML = er.trim();
	}


	function temps() {
		document.querySelector(".receive").innerHTML = "";
	}

	setTimeout(temps, 2000);
}



function gender() {
		const select_gender = document.querySelector('input[name="gender"]:checked').value;
	
		switch (select_gender) {
			case 'masculin':
				alert("Masculin");
				break;

			case 'féminin':
				alert("Féminin");
				break;

			case 'nonprécisé':
				alert("Non précisé");
				break;
			default:
				alert("Selection")
		}
	}
