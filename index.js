import  {lista_de_livros}  from "./listas_de_conteudo.js"
import  {lista_de_livros_para_diretorio}  from "./listas_de_conteudo.js"
import  {lista_de_variaveis_de_dicionario}  from "./listas_de_conteudo.js"


var addd = document.querySelector('.quadro_de_artgos')
for (let i = 0; i < 20; i++) {

    var minimo_largura = 2
    var maximo_largura = 6.9
    var minimo_altura = 2
    var maximo_altura = 4.9

    var numero_de_historias = Object.keys(lista_de_livros).length
    var id_sorteio_historia = 4//Number.parseInt(Math.random() * (numero_de_historias - 0) + 0)
    var numero_de_capitulos = Object.keys(lista_de_variaveis_de_dicionario[id_sorteio_historia]).length

  
 
    
    
    
    
    
   


  
    

    
    
    var id_sorteio_capitulos = Number.parseInt(Math.random() * (numero_de_capitulos - 0) + 0)




  













    var diretorio = `livros/${lista_de_livros_para_diretorio[id_sorteio_historia]}/${lista_de_livros_para_diretorio[id_sorteio_historia]}_${id_sorteio_capitulos}_Amostra.html`




    const newDiv = document.createElement("div")
    if(i == 0){
        newDiv.classList.add("artigo_primario")
        minimo_largura = 3.8
        minimo_altura = 4.5
    }
    else if ((i >= 1) && (i < 4)) {
        newDiv.classList.add("artigo_secundario")
        minimo_largura = 3.5
        minimo_altura = 3.5
    }
    else if (i >= 4){
        newDiv.classList.add("artigo_terceario")
        minimo_largura = 1.8
        minimo_altura = 1.8
    }
    var largura = (Math.floor(Math.random() * (maximo_largura - minimo_largura + 1)) + minimo_largura)*10

    var altura = (Math.floor(Math.random() * (maximo_altura - minimo_altura + 1)) + minimo_altura)*100

    newDiv.style.width = `${largura}%`
    newDiv.style.height = `${altura}px`
    newDiv.innerHTML = `                    
<!---->
<div class="moldura_do_artigo";>
        <!--<h2 class="titulo_de_artigo">${i}Titulo artigo</h2>-->
        <div class="Filtro_de_capa_De_artigo">
            <iframe class="caixa_de_exibicao_de_html" src="/${diretorio}" scrolling="no"  frameborder="0" >
            </iframe>


        
        </div>
        
        <div class="div_saber_mais_livro">
            <a class="saber_mais_livro" href="livros/livro_${id_sorteio_historia}.html">${lista_de_livros[id_sorteio_historia]}</a> 
        </div>
        
        <div class="div_saber_mais">
            <a class="saber_mais" href="livros/${lista_de_livros_para_diretorio[id_sorteio_historia]}/${lista_de_livros_para_diretorio[id_sorteio_historia]}_${id_sorteio_capitulos}.html">Ler</a> 
        </div>

</div>
<!---->
`
    addd.append(newDiv)
    
}  









