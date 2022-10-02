<template>
<div class="card">
  <img :src="require(`~/assets/images/${info.img}`)" alt="" />
  <div class="icons">
    <img
      class="icon"
      :src="require(`~/assets/images/${info.logo}`)"
      alt=""
    />
    <p class="title"><nuxt-link :to="'/card/'+info.id">{{ $tt(info.title_en, info.title_ru) }}</nuxt-link></p>
  </div>
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