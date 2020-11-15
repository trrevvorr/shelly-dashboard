<template>
  <div>
    <h1>Shelly Dashboard</h1>
    <div class="devices">
      <DeviceCard v-for="device in devices" :key="device.ip" :ip="device.ip" :fallbackName="device.name" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DeviceCard from '@/components/DeviceCard.vue'
import {devices} from '@/config'

export default {
  components: {
    DeviceCard
  },
  data: function() {
    return {
      devices
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.devices {
  display: grid;
  grid-gap: 1rem;
  max-width: 1200px;
  margin: 0 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 600px) {
  .devices { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .devices { grid-template-columns: repeat(3, 1fr); }
}

</style>
