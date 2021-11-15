const lblOnline = document.getElementById('lblOnline');
const lblOffline = document.getElementById('lblOffline');
const usersList = document.getElementById('users');







const socket = io();

socket.on('connect', () => {
    console.log('conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect', () => {
    console.log('desconectado');
    lblOffline.style.display = ''
    lblOnline.style.display = 'none';
    
    
})

socket.emit('joinRoom', { email:'Administrador', room:'sala' });

socket.on('roomUsers', ({ room, users }) => {
    console.log(room);
    console.log(users);
   
   
  });










  
