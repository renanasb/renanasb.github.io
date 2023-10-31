const formNewUser ={
    build :()=>{
    const conteudo = document.getElementById('conteudo')
    const formTemplate = document.createElement('form')
    formTemplate.className ="form-control"
    formTemplate.innerHTML = ` 
    <label for="nome" class="form-label"><b>Nome:</b></label> 
    <input class="form-control" type="text" id="nome">

    <label for="idade" class="form-label"><b>idade:</b></label>
    <input class="form-control" type="number" id="idade">

    <label for="login" class="form-label"><b>login:</b></label>
    <input class="form-control" type="text" id="login">

    <label for="senha" class="form-label"><b>senha</b>:</label>
    <input class="form-control" type="password" id="senha">`
    conteudo.append(formTemplate);
},
 toUpdate :()=>{

 }
}
export{formNewUser}