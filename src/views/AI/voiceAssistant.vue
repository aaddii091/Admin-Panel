<template>
  <DefaultLayout>
    <div class="p-4 space-y-4">
      <h2 class="text-xl font-bold">🎤 Voice Assistant Demo</h2>

      <button @click="toggleAgent" class="px-4 py-2 rounded bg-blue-600 text-white">
        {{ connected ? 'Stop Assistant' : 'Start Assistant' }}
      </button>

      <p>
        Status:
        <span :class="connected ? 'text-green-600' : 'text-red-600'">
          {{ connected ? 'Connected' : 'Disconnected' }}
        </span>
      </p>

      <audio id="assistantAudio" ref="audioEl" autoplay controls></audio>
    </div>
  </DefaultLayout>

  <!-- Circular visualizer -->
  <av-circle
    v-if="connected"
    :outline-width="0"
    :progress-width="5"
    :outline-meter-space="5"
    :playtime="false"
    media="#assistantAudio"
  />
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

const connected = ref(false)
const audioEl = ref(null)

let pc = null
let dc = null

async function toggleAgent() {
  if (!connected.value) {
    await initAgent()
  } else {
    stopAgent()
  }
}

async function initAgent() {
  try {
    pc = new RTCPeerConnection()

    // Remote audio -> convert MediaStream to object URL for <audio>
    pc.ontrack = (event) => {
      const remoteStream = event.streams[0]
      if ('srcObject' in audioEl.value) {
        audioEl.value.srcObject = remoteStream
      } else {
        audioEl.value.src = window.URL.createObjectURL(remoteStream)
      }
    }

    // Mic input
    const localStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream))

    // Data channel
    dc = pc.createDataChannel('oai-events')
    dc.onmessage = (e) => console.log('From assistant:', e.data)

    // Offer/Answer
    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)

    const resp = await fetch(
      'https://api.openai.com/v1/realtime?model=gpt-4o-mini-realtime-preview',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
          'Content-Type': 'application/sdp'
        },
        body: offer.sdp
      }
    )

    const answerSDP = await resp.text()
    await pc.setRemoteDescription({ type: 'answer', sdp: answerSDP })

    connected.value = true
    console.log('✅ Connected to OpenAI Realtime API')
  } catch (err) {
    console.error('Agent init failed:', err)
  }
}

function stopAgent() {
  if (pc) {
    pc.close()
    pc = null
  }
  connected.value = false
}
</script>
