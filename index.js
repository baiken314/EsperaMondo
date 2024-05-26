var img = document.getElementById('pejzagxo');
function sxangxiBildon() {
	if (window.innerWidth > 600) {
		img.src = "pejzagxo.png"
	}
	else {
		img.src = "pejzagxoMalgranda.png";
	}
}
setInterval(sxangxiBildon, 1);