
  function espelharDiv(divId){
      
    const divToMirror = document.getElementById(divId);
    
    const container2 = document.getElementById('containerX');

    container2.innerHTML = divToMirror.innerHTML;

    esconderImagem2()
  };


  function mostrarDiv() {
            const div1 = window.document.getElementById("divInvisivel");
            
            if (div1.style.display === "none" ) {
        
                div1.style.display = "block"; 
            } else {
                div1.style.display = "none";
            }
           
        };


function esconderImagem2() {
            var imagem2 = document.getElementById("divInvisivel");
            imagem2.style.display = "none"; // Esconde a imagem2
        };
