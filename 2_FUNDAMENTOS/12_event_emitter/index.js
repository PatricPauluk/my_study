// gatilhos de evento no codigo, como eventos do navegador
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => { // cria o evento chamado start
    console.log("Durante")
})

console.log("Antes")

eventEmitter.emit('start') // emite o evento start

console.log("Depois")