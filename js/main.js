$(document).ready(function() {
    $('#telefone').mask('+55(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            Email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cep:{
                required:true
            },
            cpf:{
                required:true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu número de telefone',
            Email: 'Insira um endereço de E-mail',
            cpf:'Insira o seu CPF válido',
            cep:'Por favor, insira um CEP válido'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    });
});