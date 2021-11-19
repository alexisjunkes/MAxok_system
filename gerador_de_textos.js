




function carregar_divs(){
var addd = document.querySelector('.Div_mae')
for (let i = 0; i < 40; i++) {
    const newDiv = document.createElement("div")
    console.log("add")
    newDiv.classList.add("aaaddd")
    newDiv.innerHTML = `<h2 class='aaaddd'><a href="https://pixabay.com/pt/" target="_blank" rel="external">Pixabay</a></ha>`
    //document.body.appendChild(newDiv)
    addd.append(newDiv)
    
}   
}


var diretorio = ""








var addd = document.querySelector('.quadro_de_artgos')
for (let i = 0; i < 8; i++) {

    var minimo_largura = 2
    var maximo_largura = 7
    var minimo_altura = 2
    var maximo_altura = 5
    const newDiv = document.createElement("div")
    console.log("add")
    if(i == 0){
        newDiv.classList.add("artigo_primario")
        minimo_largura = 4
        minimo_altura = 5
    }
    else if ((i >= 1) && (i < 4)) {
        newDiv.classList.add("artigo_secundario")
        minimo_largura = 3.5
        minimo_altura = 3.5
    }
    else if (i >= 4){
        newDiv.classList.add("artigo_terceario")
        minimo_largura = 2
        minimo_altura = 2
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
        <iframe class="caixa_de_exibicao_de_html" src="Akai_niwaamostra.html" scrolling="no"  frameborder="0" ></iframe>
        </div>
        
        <div class="div_saber_mais_livro">
        <a class="saber_mais_livro" href="#">Livro</a> 
        </div>
        
        <div class="div_saber_mais">
            <a class="saber_mais" href="Akai_niwaleitura.html">Ler</a> 
        </div>

</div>
<!---->
`
    //document.body.appendChild(newDiv)
    addd.append(newDiv)
    
}  









