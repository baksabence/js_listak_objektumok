import { szemelylista } from "./adat.js";
import { consolerair, kartyaTartalom, listaOszzeallit } from "./fuggvenyek.js";


const lista = ["Géza", "Jenő"]

//console.log(lista[1])

//lista[10]="Béla"

//lista.pop()/* Leveszi a lista utolso elemet */
//lista.push("Jakab") /* lista végére helyez egy elemet */

console.log(lista)
//console.log(lista[5])

/* Ismerőseim nyilvántartása */

/* objektum osszetett adatszerkezet */


const felselem = document.querySelector(`#felsorolas`)
const kontTart = document.querySelector(`#kartyaKontener`)
consolerair(szemelylista)
console.log(felselem)
console.log(kontTart)
console.log(listaOszzeallit)
console.log(kartyaTartalom)
felselem.innerHTML="<h1>Ügyesek vagyunk</h1>"
felselem.innerHTML+= listaOszzeallit(szemelylista)