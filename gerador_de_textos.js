




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

    const newDiv = document.createElement("div")
    console.log("add")
    if(i == 0){
        newDiv.classList.add("artigo_primario")
    }
    else if ((i >= 1) && (i < 4)) {
        newDiv.classList.add("artigo_secundario")
    }
    else if (i >= 4){
        newDiv.classList.add("artigo_terceario")
    }

    
    newDiv.innerHTML = `                    
<!---->
<div class="moldura_do_artigo">
        <!--<h2 class="titulo_de_artigo">${i}Titulo artigo</h2>-->
        <div class="Filtro_de_capa_De_artigo">
        <iframe class="caixa_de_exibicao_de_html" src="Akai_niwa.html" scrolling="no"  frameborder="0" ></iframe>
        </div>
        
        <div class="div_saber_mais_livro">
        <a class="saber_mais_livro" href="#">Livro</a> 
        </div>
        
        <div class="div_saber_mais">
            <a class="saber_mais" href="#">Saber mais</a> 
        </div>

</div>
<!---->
`
    //document.body.appendChild(newDiv)
    addd.append(newDiv)
    
}  









