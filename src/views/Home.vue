<template>
  <div class="home">
    <Configurator />
  </div>
</template>

<script>
// @ is an alias to /src
import Configurator from '@/components/Configurator.vue'

export default {
  name: 'home',
  components: {
    Configurator,
  }
}
</script>
