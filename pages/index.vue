<template>
  <div class="flex flex-col font-main min-h-screen relative">
    <header class="animate-fadeInTop bg-amber shadow-sango rounded-b-2xl mb-3.5 py-3.5 px-7 text-left">
      <h1 class="font-bold text-3xl text-gray">EC Research</h1>
      <p class="text-sm">ECサイトのUI/UXを研究するサイト</p>
    </header>
    <div id="subContents" class="animate-contentsFadeIn flex flex-wrap px-5" :style="{ 'animation-delay': `2s` }">
      <div class="md:w-1/3 p-2">
        <div id="countDisp" class="bg-gray font-bold p-4 rounded-2xl text-2xl shadow-sango_box text-white">{{currentContents}} / {{siteItemsInit.length}}</div>
      </div>
      <div class="md:w-1/3 p-2">
        <t-pagination :current="getPageCount" :total-items="siteItemsInit.length" :per-page="perPage" prevLabel="◁" nextLabel="▷" firstLabel="◀︎" lastLabel="▶︎" v-model="currentPage" @change="clickCallback"></t-pagination>
      </div>
      <div class="md:w-1/3 p-2">
      </div>
    </div>
    <div id="mainContents" class="flex flex-wrap px-5">
      <div class="animate-contentsFadeIn md:w-1/3 p-2" v-for="(e, i) in siteItems"　v-bind:key="e.id" :style="{ 'animation-delay': `${i * 0.2}s` }">
        <a :href="e.url" class="bg-gray block p-4 rounded-2xl shadow-sango_box" target="_blank" rel="noopener noreferrer">
          <div class="overflow-hidden rounded-2xl">
            <img class="rounded-2xl transform transition duration-500 hover:scale-125" :src="e.image.url">
          </div>
          <span class="animate-fadeInLeft block mt-2.5 font-bold text-white text-2xl" :style="{ 'animation-delay': `${i * 0.2}s` }">{{e.title}}</span>
        </a>
      </div>
    </div>
    <div class="py-7"></div>
    <footer class="animate-fadeInBottom bg-gray mt-auto p-7 relative rounded-t-2xl text-white">
      <small>Copyright &copy; 2021 ItFumi</small>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      // APIを叩いて返ってきたコンテンツを格納する用に空の配列を用意
      siteItemsInit: [],
      siteItems: [],
      perPage: 6,
      currentPage: 1,
    }
  },
  mounted() {
    // mount時にヘッダ一覧を取得する処理を実行
    this.getSites()
  },
  methods: {
    getSites() {
      // オプションとして、コンテンツの最大取得件数は100件と設定
      axios.get('https://ec-research.microcms.io/api/v1/ecsite?', {
          headers: { 'X-API-KEY': this.$config.apiKEY }
        })
        .then((res) => {
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
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum)
      let current = this.currentPage * this.perPage
      let start = current - this.perPage
      this.siteItems = this.siteItemsInit.slice(start, current)
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
    }
   }
}
</script>

<style>

</style>
