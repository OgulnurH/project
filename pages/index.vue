<template>
  <div class="portfolio">
    <section class="home" id="home">
      <div class="section_one">
        <div class="img">
          <img class="ogulnur" src="~/assets/images/section_one/2.png" alt="" />
        </div>
        <div class="text">
          <p class="info">
            {{ $t('info') }}
          </p>
          <p class="portfolio_title">{{ $t('portfolio_title') }}</p>

          <p class="short_text">{{ $t('short_text') }}</p>
          <button><a href="#inputs">{{ $t('button') }}</a></button>
        </div>
      </div>
      <div class="hooper">
        <hooper :settings="hooperSettings">
          <slide>
            <div class="slider1">
              <p class="qoute" v-html=" $t('hooper.slider1')"></p>
            </div>
          </slide>
          <slide>
            <div class="slider1 slider2">
              <p class="qoute" v-html=" $t('hooper.slider2')"></p>
            </div>
          </slide>
          <slide>
            <div class="slider1 slider3">
              <p class="qoute" v-html=" $t('hooper.slider3')" ></p>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
          <hooper-progress slot="hooper-addons"></hooper-progress>
        </hooper>
      </div>
    </section>

    <section class="works" id="works">
      <div class="content">
        <div class="cards">
          
            <Card v-for="(e, i) in design" :key="i" :info="e" />
         

        </div>
      </div>
    </section>

    <section class="skills" id="skills">
      <div class="box">
        <div class="tool">
          <h1 class="tol">{{ $t('tol') }}</h1>
          <p>Adobe Illustrator</p>
          <p>Adobe Photoshop</p>
          <p>Figma</p>
        </div>
        <div class="skills">
          <h1 class="skill"> {{ $t('skill') }}</h1>
          <p>Graphic Design</p>
          <p>UI/ UX Design</p>
          <p>Frontend Developer</p>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="contacts">
        <div class="text_gen">
          <div class="top_text">
            <h1 class="title">{{ $t('title') }}</h1>
            <br />
            <p class="text">
              {{ $t('text') }}
            </p>
          </div>
          <div class="smm">
          <div class="tweeter">
            <img :src="require(`~/assets/images/8.png`)" alt="" />
            <span>hommaliyevaolya@gmail.com</span>
          </div>
          <div class="facebook">
            <img :src="require(`~/assets/images/9.png`)" alt="" />
            <p>+993 63 329134</p>
          </div>
          <div class="instagram">
            <img :src="require(`~/assets/images/10.png`)" alt="" />
            <span>@oh_la_la_h</span>
          </div>
          </div>
        </div>
        <div class="inputs" id="inputs">
          <form>
          <div class="name_email">
            <div>
              <p>{{ $t('name') }}</p>
              <input type="name" id="name" name="name" placeholder="Your Name" />
            </div>

            <div>
              <p>Email</p>
                <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Your Email"/>
            </div>
          </div>

          <div class="message">
            <textarea 
            name="message" 
            id="messsage"  
            rows="10" 
            placeholder="Message"></textarea>
          </div>   

          <div class="button">
          <input  type="submit" value="Send Message" />
          </div>
          
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  // Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'

import Card from '@/components/card/index.vue'

export default {
  components: {
    Card,
    Hooper,
    Slide,
    HooperProgress,
    // HooperPagination,
    HooperNavigation,
  },
  data() {
   
    return {
      design: [
        {
          id: 1,
          img: 'card1.png',
          logo: 'icon1.svg',
          title_en: 'Fashion',
          title_ru: 'Мода',
          link: 'works/fashion',
        },
        {
          id: 2,
          img: 'card2.png',
          logo: 'icon2.svg',
          title_en: 'Fruit',
          title_ru: 'Фрукты',
          link: 'works/fruit',
        },
        {
          id: 3,
          img: 'card3.png',
          logo: 'icon3.svg',
          title_en: 'UI/UX',
          title_ru: 'UI/UX',
          link: 'works/ui',
        },
        {
          id: 4,
          img: 'card4.png',
          logo: 'icon4.svg',
          title_en: 'Others',
          title_ru: 'Другие',
          link: 'works/other',
        },
        {
          id: 5,
          img: 'card5.png',
          logo: 'icon5.svg',
          title_en: 'Animal',
          title_ru: 'Животное',
          link: 'works/animal',
        },
        {
          id: 6,
          img: 'card6.png',
          logo: 'icon6.svg',
          title_en: 'Logo',
          title_ru: 'Логотип',
          link: 'works/logo',
        },
      ],
    }
  },

  computed: {
    hooperSettings() {
      const settings = {
        itemToShow: 1,
        centerMode: false,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1100,
        hoverPause: false,
        infiniteScroll: true,
        wheelControl: false
      }
      return {
        settings,
      }
    },
  },
}
</script>

<style>
</style>
