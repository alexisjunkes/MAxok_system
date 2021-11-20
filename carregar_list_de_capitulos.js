import  {lista_de_livros}  from "./listas_de_conteudo.js"
import  {lista_de_livros_para_diretorio}  from "./listas_de_conteudo.js"
import  {lista_de_variaveis_de_dicionario}  from "./listas_de_conteudo.js"





    var id_do_livro = document.getElementById("contador").innerText
    console.log(id_do_livro)

//console.log(Object.keys(lista_de_livros).length)
var numero_de_capitulos = Object.keys(lista_de_variaveis_de_dicionario[id_do_livro]).length
//console.log(Object.keys(lista_de_livros_para_diretorio).length)

var dddd = 0
console.log(lista_de_variaveis_de_dicionario)

var addd = document.querySelector('.quadro_de_livros')

for (let i = 0; i < numero_de_capitulos; i++) {
    //console.log(`${i} ${lista_de_livros[i]}`)




    const newDiv = document.createElement("div")
 
    newDiv.classList.add("titulos_dos_livros")

    var caminho_arquivo = ""
    //console.log(lista_de_livros_para_diretorio[i])
    var largura = (Math.floor(Math.random() * (4 - 2 + 1)) + 2)*10
    newDiv.style.width = `${largura}%`
    newDiv.innerHTML = `                    
<!---->
<div id=${i} class="moldura_titulos_livros";>       
        <div class='linha_historia'>
            
            <a class="saber_mais_livro" href="${lista_de_livros_para_diretorio[id_do_livro]}/${lista_de_livros_para_diretorio[id_do_livro]}_${i}.html">
                <img class='imagem_de_capa_lista_de_historias' src="../capa_wattpado_maxok_system.jpg" alt=""></img>
                    <p class='nome_historia'>${lista_de_variaveis_de_dicionario[id_do_livro][i]}
                    </p>
            </a>
            
        </div>
</div>
<!---->

`
    addd.append(newDiv)
    
}  
//${lista_de_variaveis_de_dicionario[i]}
//marcador_de_id.innerHTML=marcador_de_id.innerHTML


