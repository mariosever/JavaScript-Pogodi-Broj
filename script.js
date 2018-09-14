
// Uzmi nasumičan - random broj od 1 do 10
var broj = Math.ceil(Math.random() * 10);  

 
var izbor = prompt("Pogodi broj između 1 i 10");

if (izbor == broj) {

	alert("Bravo, ti si genije!");

}	
else
{
	
	alert("Netočno, traženi broj je: " + broj);
	
}