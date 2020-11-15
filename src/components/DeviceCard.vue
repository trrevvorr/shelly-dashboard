<template>
  <div class="card">
    <div class="device-details">
    <h3>
      <span>{{ name ? name : fallbackName }}</span>
      <span class="reload-icon" @click="getDeviceInfo">
        <svg
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
          ></path>
        </svg>
      </span>
    </h3>
    <div class="ip_address">{{ ip }}</div>
    <div class="type">
      <span>{{ deviceTypeName }}</span>
      <span class="divider">|</span>
      <a :href="`http://${ip}/`">manage</a>
    </div>
    </div>
    <Spinner v-if="loading" />
    <RelayCard
      v-else
      v-for="(relay, index) in relays"
      :key="`${ip}-relay-${index}`"
      :relay="relay"
      :fallbackName="`${fallbackName} - Relay ${index}`"
    />
  </div>
</template>

<script>
import RelayCard from "@/components/RelayCard.vue";
import Spinner from "@/components/Spinner.vue";

const deviceTypes = {
  "SHSW-25": {
    name: "Shelly 2.5",
  },
  "SHSW-1": {
    name: "Shelly 1",
  },
};

export default {
  components: {
    RelayCard,
    Spinner,
  },
  props: {
    ip: String,
    fallbackName: String,
  },
  data: function() {
    return {
      loading: true,
      type: null,
      name: null,
      relays: [],
    };
  },
  computed: {
    deviceTypeName: function() {
      const fallback = this.loading ? "loading" : "disconnected";
      return this.type ? deviceTypes[this.type].name : fallback;
    },
  },
  created: function() {
    this.getDeviceInfo();
  },
  methods: {
    getDeviceInfo() {
      this.loading = true;
      this.axios
        .get(`http://${this.ip}/settings`)
        .then((response) => {
          this.type = response.data.device.type;
          this.name = response.data.name;
          this.relays = response.data.relays;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log("error");
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: #2c3e50;
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 1fr auto;
}

h3 {
  margin: 0.25rem 0;
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.divider {
  padding: 0 7px;
  opacity: 20%;
}

.reload-icon {
  margin-left: 0.5rem;
  vertical-align: middle;
  color: #42b983;
  cursor: pointer;
}

.reload-icon svg {
  height: 1rem;
}
</style>
