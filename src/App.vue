<template>
  <div id="app">
    <keep-alive exclude="Detail"> 
      <router-view/>    
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.border-bottom{
  border-bottom:1px solid #eee
}
</style>
