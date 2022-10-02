
<template>
  <div class="nav_menu" :class="{ scrolled: active, nothome: page }">
    <div class="content">


      <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </i>
            </label>



      
      <ul>
        <li v-for="(e, i) in links" :key="i">
          <nuxt-link :class="{ scrolled: active }" :to="e.href">
            {{ $tt(e.name_en, e.name_ru) }}
          </nuxt-link>
        </li>
      </ul>
      <div class="lang">
        <button class="dropbtn">{{ lang }}</button>
        <div class="lang-content">
          <div v-for="(e, i) in locales" :key="i">
            <button @click="$i18n.setLocale(e.code)" v-if="e.code != lang">
              {{ e.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
    },
  },

  data() {
    const links = [
      {
        id: 1,
        href: '/#home',
        name_en: 'About',
        name_ru: 'О себе',
        active: false,
      },
      {
        id: 2,
        href: '/#works',
        name_en: 'Works',
        name_ru: 'Работы',
        active: false,
      },
      {
        id: 3,
        href: '/#skills',
        name_en: 'Skills',
        name_ru: 'Навыки',
        active: false,
      },
      {
        id: 4,
        href: '/#contact',
        name_en: 'Contact',
        name_ru: 'Контакт',
        active: false,
      },
    ]
    return {
      links,
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    locales() {
      return this.$i18n.locales
    },
    page() {
      return this.$route.path != "/"
        },
  }
}
</script>

<style>
  

</style>