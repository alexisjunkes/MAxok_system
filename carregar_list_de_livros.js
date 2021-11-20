import  {lista_de_livros}  from "./listas_de_conteudo.js"
import  {lista_de_livros_para_diretorio}  from "./listas_de_conteudo.js"



//console.log(Object.keys(lista_de_livros).length)
var numero_de_livro = Object.keys(lista_de_livros).length
//console.log(Object.keys(lista_de_livros_para_diretorio).length)



var addd = document.querySelector('.quadro_de_livros')

for (let i = 0; i < numero_de_livro; i++) {
    //console.log(`${i} ${lista_de_livros[i]}`)
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
                <img class='imagem_de_capa_lista_de_historias' src="capa_wattpado_maxok_system.jpg" alt=""></img>
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

