new JustValidate('.js-form', {
    rules: {
        name: {
            required: true
        },
        email: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cidade: {
            required: true
        },
        estado: {
            required: true
        },
        moradia: {
            required: true
        },
        resumo: {
            required: true
        },
        cargo: {
            required: true
        },
        descricao: {
            required: true
        },
        data: {
            required: true
        },

    }
});
let state = document.getElementById('estados');
let uf = [' ','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
let siglas = [' ','AC', 'AL', 'AP', 'AM', 'BH', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
for (let i = 0; i < uf.length; i++) {
    let estado = document.createElement('option');
    estado.value = siglas[i];
    estado.innerText = uf[i];
    state.appendChild(estado);
}
function mostrarDados() {
    let nome = document.querySelector('.name').value;
    let div = document.getElementById('show-data');
    
    div.innerHTML = nome;

}
let btnShow = document.getElementById('dados');
btnShow.addEventListener('click', mostrarDados);
document.getElementById('data').DatePickerX.init();