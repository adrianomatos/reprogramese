try {
    var cpfValido = true;

    if (!cpfValido) {
        throw new Error('O CPF digitado não é válido');
    }

    console.log('CPF válido, apto para prosseguir...');

} catch (ocorrencia) {
    console.log(ocorrencia.message);
} 