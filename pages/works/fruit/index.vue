<template>
  <div class="fashion_pg">
    <div class="title">
      <h1>Fruits</h1>
     
    </div>
    <div class="dresses">
      <Fashion v-for="(e, i) in fruits" :key="i" :info="e" />
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
      fruits: [
             
      {
        id: 1,
        img:'1.png',
      },
      {
        id: 2,
        img:'3.png',
      },
        
      ]
    }
  }
  


}
</script>

<style>

</style>