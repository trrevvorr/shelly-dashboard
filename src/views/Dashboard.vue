<template>
  <div>
    <h1>Shelly Dashboard</h1>
    <div class="devices">
      <DeviceCard ip="192.168.86.227" />
      <DeviceCard ip="192.168.86.77" />
      <DeviceCard ip="192.168.86.999" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DeviceCard from '@/components/DeviceCard.vue'

export default {
  name: 'Home',
  components: {
    DeviceCard
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
}

@media (min-width: 600px) {
  .devices { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .devices { grid-template-columns: repeat(3, 1fr); }
}

</style>
