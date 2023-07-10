//Referencia de HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

//toda la comunicacion servidor-socket se alojará aqui...

const socket = io(); //socket es mi cliente del que usa la web

//estan escuchando cambio de eventos
socket.on('connect', () => {
    console.log('conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', ()=>{
    console.log('desconectado del servidor Ros');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
});

//quiero q cuando clic en el boton envie esa info al backend -> disparo callback q es la funcion
btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    };
    
    socket.emit('enviar-mensaje',payload, (id) =>{
        console.log('Desde el server',id);
    }); //no camel case no espacio no caracteres especiales
}) 