<template>
  <nuxt-link :to="info.link">
    <div class="card">
      <img :src="require(`~/assets/images/${info.img}`)" alt="" />
      <div class="icons">
        <img
          class="icon"
          :src="require(`~/assets/images/${info.logo}`)"
          alt=""
        />
        <p class="title">{{ $tt(info.title_en, info.title_ru) }}</p>
      </div>
    </div>
  </nuxt-link>
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