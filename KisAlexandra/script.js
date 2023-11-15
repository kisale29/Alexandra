var buton=document.getElementById("button")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var email=document.getElementById("email")
var imagine=document.getElementById("imagine")
var paragraf=document.getElementById("paragraf")
var body=document.getElementById("body")
var an=document.getElementById("anNastere)
const d=new Date()
var anCurent=d.getFullYear()
buton.addEventListener("click",altaViata)
an.addEventListener("mouseover",displayAge)
function displayAge()
{
	an.innerHTML=anCurent-an.innerHTML
}
function altaViata()
{
	nume.innerHTML="Functie: Inginer"
	prenume.innerHTML=" Nume: Popescu Maria"
	email.innerHTML=" Email: mariapopescu@gmail.com"
	img.src="imagine.jpg"
	body.style.backgroundColor="orange"
	body.style.color="blue"
	img.style.opacity="80%"
	img.style.borderWidth="20px"
	paragraf.innerHTML="Asteptari: Un sef intelegator"
}