'use strict'


import {getContatos}  from "./contatos.js"

function criarCard(contato){
    const container = document.getElementById('container')
    const card =document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
    <img src="${contato.foto}" alt="avatar">
    <h2>Sofia Aurora</h2>
    <p>(11) 96547-9978</p>
    `
    container.appendChild(card)
}


async function exibirContatos(){
    const contatos =  await getContatos()
    contatos.forEach(criarCard)
    console.log(contatos)
}

exibirContatos()