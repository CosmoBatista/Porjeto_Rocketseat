function toggleMode() {
    const html= document.documentElement
    // ir na lista de clase do objeto html
    // se tiver Light remove se não adicionar
    html.classList.toggle('Light')

   //if(html.classList.contains('Light')){
   //     html.classList.remove('Light')
   // }else{
   //      html.classList.add('Light')
   //  }


        // ir no objeto img do header 
    const img = document.querySelector("header img")
      
        // se na lista de clase html conter Light
        if(html.classList.contains("Light")){
        //seleciona o atributo src de img e adicionar avatar light
            img.setAttribute("src", "../assets/cosmo.png" )
        }else{
        // se não tiver light, não alterar imagem
            img.setAttribute("src", "../assets/cosmo.png")
        }

}