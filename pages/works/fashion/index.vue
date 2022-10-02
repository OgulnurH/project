<template>
  <div class="fashion_pg">
    <div class="title">
      <h1 class="moda">{{ $t('moda') }}</h1>
     
    </div>
    <div class="dresses">
      <Fashion v-for="(e, i) in dresses" :key="i" :info="e" />
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
      dresses: [
        {
        id: 1,
        img:'1 (1).png',
      },
        {
        id: 2,
        img:'1 (2).png',
      },
        {
        id: 3,
        img:'1 (3).png',
      },
        {
        id: 4,
        img:'1 (4).png',
      },
        {
        id: 5,
        img:'1 (5).png',
      },
        {
        id: 6,
        img:'1 (6).png',
      },
        {
        id: 7,
        img:'1 (7).png',
      },
        {
        id: 8,
        img:'1 (8).png',
      },
        {
        id: 9,
        img:'1 (9).png',
      },
        {
        id: 10,
        img:'1 (10).png',
      },
        {
        id: 11,
        img:'1 (11).png',
      },
        {
        id: 12,
        img:'1 (12).png',
      },

      ]
    }
  }
  

}
</script>

<style>

</style>