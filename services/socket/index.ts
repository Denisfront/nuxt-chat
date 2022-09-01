import { io } from 'socket.io-client'

export const socket = io('http://localhost:4004', { transports: ['websocket', 'polling', 'flashsocket'] })

socket.on('connect', () => {
  console.log(socket.connected) // true
})
