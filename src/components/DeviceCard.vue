<template>
  <div class="card">
    <h3>Some Device</h3>
    <a :href="`http://${ip}/`">details</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    ip: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  background-color: #2c3e50;
  padding: 1rem;
  border-radius: 1rem;
}

h3  {
  margin: 0.25rem 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
