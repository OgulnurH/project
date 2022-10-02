<template>
   <div class="fashion_pg">
    <div class="title">
      <h1>UI/UX</h1>
     
    </div>
    <div class="dresses">
      <Fashion v-for="(e, i) in ui" :key="i" :info="e" />
    </div>
  </div>

</template>

<script>
    import Fashion from '@/components/pages/works/fashion/index.vue'
export default {

    components:{
    Fashion, 


  },
  data(){
    return{
      ui: [
        {
        id: 1,
        img:'4.png',
      },
        {
        id: 2,
        img:'5.png',
      },
        {
        id: 3,
        img:'6.png',
      },
                
      ]
    }
  }

}
</script>

<style>

</style>