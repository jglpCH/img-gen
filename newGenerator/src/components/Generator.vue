<template>
    <div>
      <fabric-canvas globalCompositeOperation="destination-over" :height="this.template.y" :width="this.template.x" class="canvas-wrapper mt-2">
        <fabric-image-from-URL globalCompositeOperation="destination-over" :evented=false :angle="45" :hasControls=false :selectable=false :id="100" url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Limmat-Quaibr%C3%BCcke.jpg/1280px-Limmat-Quaibr%C3%BCcke.jpg"></fabric-image-from-URL>
        <!-- <fabric-image-from-URL :angle="0" :id="100" url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Limmat-Quaibr%C3%BCcke.jpg/1280px-Limmat-Quaibr%C3%BCcke.jpg"></fabric-image-from-URL> -->
        <fabric-Rectangle :index="1000" :width="500" :angle="-10" :skewX="-10" :id="'12'"></fabric-Rectangle>
        <fabric-Rectangle :index="100" fill="blue" :width="500" :angle="-10" :skewX="-10" :id="'100'"></fabric-Rectangle>
      </fabric-canvas>
    </div>
</template>

<script>
import vueFabricWrapper from "vue-fabric-wrapper";

export default {
  name: 'Generator',
  components: 
  {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricRectangle: vueFabricWrapper.FabricRectangle,
    FabricImageFromURL: vueFabricWrapper.FabricImageFromURL
  },
  props: 
  {
    name: String,
    plattform: String,
    template: Object
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
div > canvas
{
  border: 1px solid;
}
</style>
