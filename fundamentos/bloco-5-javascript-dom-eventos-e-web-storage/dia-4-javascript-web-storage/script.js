window.onload = function () {  //garantir q a pagina esteja carregada quando começar a executar o js.
    
    
    let select = document.querySelector('#background');
    
    // Cor de fundo da tela;
    select.addEventListener('change',  function() {
        let corSelecionada = select.selectedOptions[0];
        document.body.style.backgroundColor = corSelecionada.value;

        //Storage - Criar
        localStorage.setItem('backgroundUser', corSelecionada.value);
    })
    
    // Cor da fonte
    let fontColorButtons = document.querySelectorAll(".fontColor>button")
    // console.log(fontColorButtons);

    for (let index = 0; index < fontColorButtons.length; index += 1) { 
        fontColorButtons[index].addEventListener("click", function(event) {
            let color = event.target.innerHTML;
            // console.log(color);
            let paragraph = document.getElementsByTagName('p')[0];
            paragraph.style.color = color;

            //Storage - Criar
            localStorage.setItem("fontColorUser", color)

        })
    }   

    // Tamanho da fonte;
    let inputFontSize = document.querySelector('#fontSize');
    
    inputFontSize.addEventListener('change', function() {
        let paragraph = document.getElementsByTagName('p')[0];
        let finalSize = inputFontSize.value + 'px';
        paragraph.style.fontSize = finalSize;

        //Storage - Criar
        localStorage.setItem('fontSizeUser', finalSize);
    })
    

    // Espaçamento entre as linhas do texto;
    let inputLineHeight = document.querySelector('#lineHeight');
    
    inputLineHeight.addEventListener('change', function() {
        let paragraph = document.getElementsByTagName('p')[0];
        let finalLineHeight = inputLineHeight.value + 'px';
        paragraph.style.lineHeight = finalLineHeight;

        //Storage - Criar
        localStorage.setItem('lineHeightUser', finalLineHeight);
    })
    

   // Tipo da fonte ( Font family ).

   let fontFamilyButtons = document.querySelectorAll(".familyFont>button");
   console.log(fontFamilyButtons);

    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
        fontFamilyButtons[index].addEventListener("click", function(event) {
            let family = event.target.innerHTML;
            // console.log(family);
            let paragraph = document.getElementsByTagName('p')[0];
            paragraph.style.fontFamily = family;

            //Storage - Criar
            localStorage.setItem("fontFamilyUser", family)
        })
    }

   
    // Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

    //Storage backgroundColor - Pegar e aplicar;
     let savedBackground = localStorage.getItem('backgroundUser');
     document.body.style.backgroundColor = savedBackground;

     //Storage Font Size - Pegar e aplicar;
     let savedFontSize = localStorage.getItem('fontSizeUser');
     let paragraph = document.getElementsByTagName('p')[0];
     paragraph.style.fontSize = savedFontSize;

     //Storage Font Size - Pegar e aplicar;
     let savedLineHeigth = localStorage.getItem('lineHeightUser');
     paragraph.style.lineHeight = savedLineHeigth;

     //Storage Font Color - Pegar e aplicar;
     let savedFontColor = localStorage.getItem('fontColorUser');
     paragraph.style.color = savedFontColor;

     //Storage Font Family - Pegar e aplicar;
     let savedFontFamily = localStorage.getItem('fontFamilyUser');
     paragraph.style.fontFamily = savedFontFamily;

     



}