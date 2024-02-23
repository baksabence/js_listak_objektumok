

export function consolerair(szemelylista){
    /* a szemelylista adatait kiirja konzolra
    nev: "geza" tel: 06-.... */
    //console.log(szemelylista[1].tel)
    for(let index = 0; index < szemelylista.length; index++){
        console.log(`név: , ${szemelylista[index].nev} , ${szemelylista[index].tel}  `)
}
}

export function listaOszzeallit(lista){
    let txt="<ul>"
    for (let index = 0; index < lista.length; index++){
        txt+=`<li>név: ${lista[index].nev}, tel: ${lista[index].tel}</li>`
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}

export function kartyaTartalom(lista){
    let szoveg="<h1>"
    for (let index = 0; index < lista.length; index++){
        szoveg+=`<p>súly: ${lista[index].nev}, tel: ${lista[index].tel}</p>`
    }
    szoveg += "</h1>"
    console.log(szoveg)
    return szoveg
}
