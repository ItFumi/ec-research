<template>
  <div class="flex flex-col font-main min-h-screen relative list-none">
    <header class="animate-fadeInTop bg-amber shadow-sango rounded-b-2xl mb-3.5 py-3.5 px-7 text-left">
        <h1 class="font-bold text-3xl text-gray">EC Research</h1>
        <p class="text-sm">ECサイトのUI/UXを研究するサイト</p>
    </header>
    <div id="subContents" class="animate-contentsFadeIn flex flex-wrap px-5" v-show=isShow :style="{ 'animation-delay': `${this.showTime}s` }">
      <div class="w-full md:w-1/3 p-2">
        <div id="countDisp" class="bg-gray font-bold p-4 rounded-2xl text-2xl shadow-sango_box text-white">{{currentContents}} / {{siteItemsInit.length}}</div>
      </div>
      <div class="w-full md:w-1/3 p-2">
        <ul class="bg-gray flex font-bold p-4 rounded-2xl text-1xl shadow-sango_box text-center">
          <li :class="[ genreId == '' ? 'bg-amber border-amber' : 'bg-gray border-white text-white' ]" @click="genreId='';getSites(genreId)" class="border h-8 cursor-pointer leading-4 py-2 rounded-full text-xs w-8 hover:bg-amber hover:border-amber hover:text-gray transition duration-500 ease-in-out">ALL</li>
          <li :class="[ genreId == '1' ? 'bg-amber border-amber' : 'bg-gray border-white text-white' ]" @click="genreId='1';getSites(genreId)" class="border h-8 cursor-pointer leading-4 py-2 rounded-full ml-1 w-8 hover:bg-amber hover:border-amber hover:text-gray transition duration-500 ease-in-out">
            <fa :icon="['fas', 'running']" />
          </li>
          <li :class="[ genreId == '2' ? 'bg-amber border-amber' : 'bg-gray border-white text-white' ]" @click="genreId='2';getSites(genreId)" class="border h-8 cursor-pointer leading-4 py-2 rounded-full ml-1 w-8 hover:bg-amber hover:border-amber hover:text-gray transition duration-500 ease-in-out">
            <fa :icon="['fas', 'couch']" />
          </li>
          <li :class="[ genreId == '3' ? 'bg-amber border-amber' : 'bg-gray border-white text-white' ]" @click="genreId='3';getSites(genreId)" class="border h-8 cursor-pointer leading-4 py-2 rounded-full ml-1 w-8 hover:bg-amber hover:border-amber hover:text-gray transition duration-500 ease-in-out">
            <fa :icon="['fas', 'shopping-basket']" />
          </li>
          <li :class="[ genreId == '4' ? 'bg-amber border-amber' : 'bg-gray border-white text-white' ]" @click="genreId='4';getSites(genreId)" class="border h-8 cursor-pointer leading-4 py-2 rounded-full ml-1 w-8 hover:bg-amber hover:border-amber hover:text-gray transition duration-500 ease-in-out">
            <fa :icon="['fas', 'tv']" />
          </li>
          <li :class="[ genreId == '5' ? 'bg-amber border-amber' : 'bg-gray border-white text-white' ]" @click="genreId='5';getSites(genreId)" class="border h-8 cursor-pointer leading-4 py-2 rounded-full ml-1 w-8 hover:bg-amber hover:border-amber hover:text-gray transition duration-500 ease-in-out">
            <fa :icon="['fas', 'tshirt']" />
          </li>
        </ul>
      </div>
      <div class="hidden w-full md:w-1/3 md:block p-2">
        <t-pagination :current="getPageCount" :total-items="siteItemsInit.length" :per-page="perPage" prevLabel="◁" nextLabel="▷" firstLabel="◀︎" lastLabel="▶︎" v-model="currentPage" @click="clickCallback"></t-pagination>
      </div>
    </div>
    <div id="mainContents" class="flex flex-wrap px-5">
      <div class="animate-contentsFadeIn w-full md:w-1/3 p-2 relative" v-for="(e, i) in siteItems" :key="e.id+`${t}`" :style="{ 'animation-delay': `${showTimeContents(i)}s` }" @mouseover="isActive=e.id" @mouseleave="isActive=''">
        <a :href="e.url" class="bg-gray block p-4 rounded-2xl shadow-sango_box" target="_blank" rel="noopener noreferrer">
          <div class="overflow-hidden rounded-2xl">
            <img :class="[ isActive == e.id ? 'scale-125' : '' ]" class="w-full rounded-2xl transform transition duration-500" :src="e.image.url">
          </div>
          <span class="animate-fadeInLeft block mt-2.5 font-bold text-white text-2xl" :style="{ 'animation-delay': `${showTimeContents(i)}s` }">{{e.title}}</span>
          <category :type="e.genre" :isActive="isActive" :id="e.id" />
        </a>
      </div>
    </div>
    <div class="w-full md:hidden p-2 px-7">
      <t-pagination :current="getPageCount" :total-items="siteItemsInit.length" :per-page="perPage" prevLabel="◁" nextLabel="▷" firstLabel="◀︎" lastLabel="▶︎" v-model="currentPage" @change="clickCallback"></t-pagination>
    </div>
    <div class="py-7"></div>
    <footer class="animate-fadeInBottom bg-gray mt-auto p-7 relative rounded-t-2xl text-white" v-show=isShow :style="{ 'animation-delay': `${this.showTime}s` }">
      <small>Copyright &copy; 2021 ItFumi</small>
      <div class="flex float-right">
        <h6 class="mr-2.5">share</h6>
        <ul class="flex">
          <a href="https://twitter.com/share?url=https://ec-research.netlify.com//&hashtags=EC,通販,&text=EC Research - 気になるECサイトのまとめ -" target="_blank">
            <li class="cursor-pointer hover:text-amber transition duration-500 ease-in-out"><fa :icon="['fab', 'twitter']" /></li>
          </a>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'

export default {
  data() {
    return {
      // APIを叩いて返ってきたコンテンツを格納する用に空の配列を用意
      t: 0,
      a: 1,
      showTime: '',
      isShow: false,
      siteItemsInit: [],
      siteItems: [],
      perPage: 6,
      currentPage: 1,
      isActive: '',
      genreId: ''
    }
  },
  mounted() {
    // mount時にヘッダ一覧を取得する処理を実行
    this.getSites(this.genreId)
  },
  methods: {
    getSites(s) {
      // オプションとして、コンテンツの最大取得件数は100件と設定
      axios.get(`https://ec-research.microcms.io/api/v1/ecsite?${s==''?'':`filters=genre[equals]${this.genreId}`}`, {
          headers: { 'X-API-KEY': this.$config.apiKEY }
        })
        .then((res) => {
          this.t = this.t+1
          // ページネーションを1に設定
          this.currentPage = 1
          // 取得したコンテンツをコンポーネントのdata内に格納
          this.siteItemsInit = res.data.contents
          // 取得したコンテンツの並び順を変更
          for (let i = this.siteItemsInit.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const tmp = this.siteItemsInit[i]
            this.siteItemsInit[i] = this.siteItemsInit[j]
            this.siteItemsInit[j] = tmp
          }
          let current = this.currentPage * this.perPage
          let start = current - this.perPage
          this.siteItems = res.data.contents.slice(start, current)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum)
      let current = this.currentPage * this.perPage
      let start = current - this.perPage
      this.siteItems = this.siteItemsInit.slice(start, current)
      VueScrollTo.scrollTo("#main",1000)
    }
  },
  computed: {
    currentContents: function() {
      if(this.perPage * this.currentPage < this.siteItemsInit.length) {
        return this.perPage * this.currentPage
      } else {
        return this.siteItemsInit.length
      }
    },
    getPageCount: function() {
      return Math.ceil(this.siteItemsInit.length / this.perPage)
    },
    showTimeContents: function() {
      return function(i) {
        if(this.siteItems.length - 1 == i) {
          this.showTime = i * 0.2 + 0.5
          this.isShow = true
        }
        return i * 0.2
      }
    }
  }
}
</script>

<style>

</style>
