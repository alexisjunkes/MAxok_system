import  {lista_de_livros}  from "./listas_de_conteudo.js"
import  {lista_de_livros_para_diretorio}  from "./listas_de_conteudo.js"

import  {lista_de_id_adicionadis_matriz}  from "./listas_de_conteudo.js"

var lista_de_id_adicionadis = [0,1,2,3,4,5,6,7,8,9,10,11,12]

//console.log(Object.keys(lista_de_livros).length)
var numero_de_livro = Object.keys(lista_de_livros).length
//console.log(Object.keys(lista_de_livros_para_diretorio).length)

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}
shuffleArray(lista_de_id_adicionadis);
console.log(lista_de_id_adicionadis);





var addd = document.querySelector('.quadro_de_livros')

for (let ii = 0; ii < numero_de_livro; ii++) {
    //console.log(`${i} ${lista_de_livros[i]}`)

    var i = lista_de_id_adicionadis[ii]



    var minimo_largura = 2
    var maximo_largura = 6.9
    var minimo_altura = 2
    var maximo_altura = 4.9
    const newDiv = document.createElement("div")
 
    newDiv.classList.add("titulos_dos_livros")

    var caminho_arquivo = ""
    //console.log(lista_de_livros_para_diretorio[i])
    var largura = (Math.floor(Math.random() * (4 - 2 + 1)) + 2)*10
    newDiv.style.width = `${largura}%`
    newDiv.innerHTML = `                    
<!---->
<div id=${i} class="moldura_titulos_livros";>       
        

        <div class='linha_historia' class="favorite styled" >
            
            <a class="saber_mais_livro" href="livros/livro_${i}.html" '>
                <img class='imagem_de_capa_lista_de_historias' src="Capa_Livro_${i}.png" alt=""></img>
                    <p class='nome_historia'>${lista_de_livros[i]}
                    </p>
            </a>
            
        </div>
</div>
<!---->

`
    
    addd.append(newDiv)

}  



//lista_capitulos.html

