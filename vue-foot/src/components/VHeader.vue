<template>
<div class="Header"> 
  <div class="title_container">
    <div>
      <img class="mx-auto" :src="image" >
    </div>
  </div>
</div>
</template>

<script>

export default {
 data () {
  return {
    image: require('@/assets/logo.png')
  }
}
}

</script>

<style scoped>

</style>