<template>
    <div class="fashion_pg">
      <div class="title">
        <h1>Logos</h1>
       
      </div>
      <div class="dresses">
        <Fashion v-for="(e, i) in logo" :key="i" :info="e" />
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
        logo: [
               
        {
          id: 1,
          img:'15.png',
        },
        {
          id: 2,
          img:'16.png',
        },
        {
          id: 3,
          img:'17.png',
        },
        {
          id: 4,
          img:'18.png',
        },
        {
          id: 5,
          img:'19.png',
        },
        {
          id: 6,
          img:'20.png',
        },
        {
          id: 7,
          img:'21.png',
        },
        {
          id: 8,
          img:'22.png',
        },
        {
          id: 9,
          img:'23.png',
        },
        {
          id: 10,
          img:'24.png',
        },
          
        ]
      }
    }
    
  
  
  }
  </script>
  
  <style>
  
  </style>