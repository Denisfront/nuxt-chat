<template>
  <v-row justify="center" align="center">
    <v-btn @click="handler">Привет</v-btn>
    <p>{{ message }}</p>
  </v-row>
</template>

<script>
import { socket } from '@/services/socket'

export default {
  name: 'IndexPage',
  data() {
    return {
      message: '',
    }
  },
  mounted() {
    socket.on('connect', () => {
      console.log(socket.connected)
    })

    socket.on('response', ({ text }) => {
      this.message = text
    })
  },
  methods: {
    handler() {
      socket.emit('new_message', { text: 'Привет, сервер' })
    },
  },
}
</script>
