document.querySelector(".meubotao").addEventListener("click",()=>console.log(toJSON()))
function validaNome(id){
    \\console.log("ta rodando")
    nome=document.querySelector(id).value
    console.log(nome)
    if(nome.length>=10 && nome.length<80){
        return true
    }
    else{
        return false
    }
}
function validaApelido(id){
    apelido=document.querySelector(id).value
    console.log(apelido)
    console.log(apelido.length)
    if(apelido.length>=2 && apelido.length<21){
        return true
    }
    else{
        return false
    }
}
function validaDiaNascimento(id){

    diaNascimento=document.querySelector(id).value
    console.log(diaNascimento)
    if((diaNascimento.length>0 && diaNascimento.length<3)&&(Number(diaNascimento)>0 && Number(diaNascimento)<32)){
        return true
    }else{
        return false
    }
}

function validaMesNascimento(id){
    mesNascimento=document.querySelector(id).value
    console.log(mesNascimento)
    if((mesNascimento.length>0 && mesNascimento.length<3)&&(Number(mesNascimento)>0 && Number(mesNascimento)<13)){
        return true
    }else{
        return false
    }
}
function validaAnoNascimento(id){
    anoNascimento=document.querySelector(id).value
    console.log(anoNascimento)
    console.log(typeof Number(anoNascimento))
    anoAtual=new Date().getFullYear()
    if((anoNascimento.length>0 && anoNascimento.length<5)&&(Number(anoNascimento)>1899 && Number(anoNascimento)<=anoAtual)){
        return true
    }else{
        
        return false
    }
}

function validaFormulario(){
    if(validaNome("#name") && 
    validaApelido("#nickname") && 
    validaDiaNascimento("#day") && 
    validaMesNascimento("#month") && 
    validaAnoNascimento("#year")&&
    validaCPF("#cpf")&&
    validaTime("#team_id")&&
    validaEsportes("input[name='sport']")){
            console.log("PASSOU")
            return true
    }
    else{
        console.log("NAO PASSOU")
        return false
    }
}
function validando(){
let valores=[validaNome("#name"), 
validaApelido("#nickname"), 
validaDiaNascimento("#day"), 
validaMesNascimento("#month"),
validaAnoNascimento("#year"),
validaCPF("#cpf"),
validaTime("#team_id"),
validaEsportes("input[name='sport']")]
console.log(valores)
for(let x=0;x<valores.length;x++){
    if (valores[x]==false){
    console.log("O VALOR NAO PASSOU!!!!");
    }else{
        console.log("O VALOR PASSOU!!!!");
    }
}
}
function validaCPF(id){
    cpf=document.querySelector(id).value
    if(cpf.length==14){
        verificador= "NNN.NNN.NNN-NN"
        for(let x=0;x<verificador.length;x++){
            if (verificador[x]=="N"){
               for(y=0;y<10;y++){ 
                    if(cpf[x]==y){/*se for igual pode acabar o loop*/
                        break;
                    }else if(y==9){/*se for diferente e for o ultimo item e nao for igual a nada pode acabar a execucao da funcao*/
                       return false 
                    }
                }
            }
            else if ((verificador[x]=="." ||verificador[x]=="-")&&(verificador[x]==cpf[x])){
                    continue
            }
            else{
                return false
            }
        }
        return true
    }
    else{
    return false
}
}
function validaTime(id){
    time=document.querySelector(id).value
    console.log(time)
    if(time!=null){
        return true
    }
    else{
        return false
    }
}

function validaEsportes(query){
    esportes=document.querySelectorAll(query)
    //console.log(esportes)
    selecionados=0
    for(x=0;x<esportes.length;x++){
        if(esportes[x].checked){
            /*verifica se os valores estao marcados e se estiverem incrementa selecionados*/
            selecionados+=1
            //console.log(selecionados)
        }
        //console.log(esportes[x].checked)
    }
    if(selecionados>0){    
        return true;
    }
    else{
        return false;
    }
}


 
//----------------------------SEGUNDA PARTE-----------------------------------------




function toJSON(){
    if(validaFormulario()){
        let name=document.querySelector("#name").value
        let nickname=document.querySelector("#nickname").value
        let day=document.querySelector("#day").value
        let month=document.querySelector("#month").value
        let year=document.querySelector("#year").value
        let cpf=document.querySelector("#cpf").value
        let team_id=document.querySelector("#team_id").value
        let sports=document.querySelectorAll("input[name='sport']")
        let sports_ids=[]
        //console.log(sports)
        for(let x=0;x<sports.length;x++){
            if(sports[x].checked==true){
                sports_ids.push(sports[x].id)
            }
        }
        
        return {"name":name,
        "nickname":nickname,
        "birth_date":`${day}/${month}/${year}`,
        "cpf":cpf,
        "team_id":team_id,
        "sports":sports_ids
        }
    }
    else{
        console.log("Verifique as Entradas de Dados")
        return "Algum dado está faltando ou está incorreto" 
    }
    }

