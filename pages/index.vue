<template>
  <div class="font-main">
    <header class="animate-fadeInTop bg-amber rounded-b-2xl mb-3.5 mx-auto py-3.5 px-7 text-left">
      <h1 class="font-bold text-3xl text-gray">EC Research</h1>
      <p class="text-sm">ECサイトのUI/UXを研究するサイト</p>
    </header>
    <div id="mainContents" class="flex flex-wrap px-5 mx-auto">
      <div class="animate-contentsFadeIn md:w-1/3 p-2" v-for="(e, i) in siteItems"　v-bind:key="e.id" :style="{ 'animation-delay': `${i * 0.2}s` }">
        <a :href="e.url" class="bg-gray block p-4 rounded-2xl" target="_blank" rel="noopener noreferrer">
          <img class="rounded-2xl" :src="e.image.url">
          <span class="animate-fadeInLeft block mt-2.5 font-bold text-white text-2xl" :style="{ 'animation-delay': `${i * 0.2}s` }">{{e.title}}</span>
        </a>
      </div>
    </div>
    <t-pagination :current="getPageCount" :total-items="siteItemsInit.length" :per-page="perPage" v-model="currentPage" @change="clickCallback"></t-pagination>
    <footer class="bg-gray mt-3.5 p-7 relative rounded-t-2xl text-white">
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
          let current = this.currentPage * this.perPage
          let start = current - this.perPage
          this.siteItems = res.data.contents.slice(start, current)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    clickCallback: function (pageNum) {
      console.log("あs")
      this.currentPage = Number(pageNum)
      let current = this.currentPage * this.perPage
      let start = current - this.perPage
      this.siteItems = this.siteItemsInit.slice(start, current)
    }
  },
  computed: {
    getPageCount: function() {
      return Math.ceil(this.siteItemsInit.length / this.perPage)
    }
   }
}
</script>

<style>

</style>
