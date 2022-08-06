function saludar(nombre: string, mensajeAdicional?: string) {
    console.log(`Hola ${nombre!}`);
    if (mensajeAdicional) {
        console.log(mensajeAdicional);
    }
}

saludar('Juan', 'cuidate');
saludar('Jorge');