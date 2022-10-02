<template>
  <div class="fashion_pg">
    <div class="title">
      <h1>Others</h1>
     
    </div>
    <div class="dresses">
      <Fashion v-for="(e, i) in other" :key="i" :info="e" />
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
      other: [
      {
        id: 1,
        img:'7.png',
      },
        {
        id: 2,
        img:'8.png',
      },
        {
        id: 3,
        img:'9.png',
      },
        {
        id: 4,
        img:'10.png',
      },
        {
        id: 5,
        img:'11.png',
      },
        {
        id: 6,
        img:'26.png',
      },
        {
        id: 7,
        img:'13.png',
      },
        {
        id: 8,
        img:'14.png',
      },
             
        
      ]
    }
  }

}
</script>

<style>

</style>