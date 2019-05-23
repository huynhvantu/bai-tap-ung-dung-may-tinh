function cong(){
	// lay du lieu
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var tong = parseInt(s1) + parseInt(s2);
	document.getElementById('ketqua').innerHTML = "tong la:" +tong;
}
function tru(){
	//lay du lieu
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var hieu = parseInt(s1) - parseInt(s2);
	document.getElementById('ketqua').innerHTML = " hieu la:" +hieu;
}