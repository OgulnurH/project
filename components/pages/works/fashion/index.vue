<template>
  <div class="fashion_component">
   <a :href="`/images/${info.img}`" target="_blank">
    <img :src="`/images/${info.img}`" alt="" />
    </a>
  </div>
</template>

<script>

export default {
    props: {
         info: {
         type: Object,
         required: true,
    },
  }, 
}
</script>

<style>

</style>