<template>
    <div class="fashion_pg">
      <div class="title">
        <h1>Animals</h1>
       
      </div>
      <div class="dresses">
        <Fashion v-for="(e, i) in animal" :key="i" :info="e" />
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
        animal: [
               
        {
          id: 1,
          img:'12.png',
        },
        // {
        //   id: 2,
        //   img:'27.png',
        // },
        // {
        //   id: 3,
        //   img:'28.png',
        // },
        
        ]
      }
    }
    
  
  
  }
  </script>
  
  <style>
  
  </style>