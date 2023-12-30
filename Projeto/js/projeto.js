const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

function obterCEP()
{
     return cep.value;
}

function apresentarDadosCEP(obj)
{
    return (!obj.erro)?
    `${obj.logradouro}, ${obj.complemento}
    ${obj.bairro}
    ${obj.localidade}/${obj.uf}` :
    "CEP inexistente.";
}

async function buscarDadosCEP()
{
    try 
    {
        let urlCEP= `https://viacep.com.br/ws/${obterCEP()}/json/`;

        const trazerCEP = fetch(urlCEP);

        const resposta = await trazerCEP;

        const dadosJSON = await resposta.json();

        saida.innerText = apresentarDadosCEP(dadosJSON);
    } catch (e)
    {
        saida.textContent = `Erro: ${e}`;
    }
}



btnPesquisar.addEventListener("click", buscarDadosCEP);