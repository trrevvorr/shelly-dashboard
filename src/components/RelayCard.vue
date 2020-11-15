<template>
  <div :class="{relay: true, on: relay.ison, off: !relay.ison}">
    <h4>
      <span>{{ relay.name ? relay.name : fallbackName }}</span>
      <span class="on-off">{{relay.ison ? "ON" : "OFF"}}</span>
    </h4>
    <div>
      <span>{{ relay.btn_type }} switch</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    relay: Object,
    fallbackName: String,
  },
};
</script>

<style scoped>
.relay {
  background-color: transparent;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 3px solid #151a1f;
}

.relay.off {
  background-color: #151a1f;
}

h4 {
  margin: 0.15rem 0;
  line-height: 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
}

.divider {
  padding: 0 5px;
}

.label {
  opacity: 75%;
  margin-right: 0.5rem;
}

.on-off {
  margin-left: 1rem;
}
</style>
