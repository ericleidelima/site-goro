
  function espelharDiv(divId){
    
    // Seleciona a div específica pelo ID
    const divToMirror = document.getElementById(divId);
    
    // Seleciona a div de destino (onde será espelhado o conteúdo)
    const container2 = document.getElementById('containerX');
    
    // Espelha o conteúdo da div selecionada para o container de destino
    container2.innerHTML = divToMirror.innerHTML;

    mostrarDiv();

  }
  
  function mostrarDiv(){
       const divInv = document.getElementById("divInvisivel")

       divInv.style.display = "block";
  };