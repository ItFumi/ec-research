<template>
  <div class="font-main">
    <header class="bg-amber rounded-b-2xl mb-3.5 mx-auto py-3.5 px-7 text-left">
      <h1 class="font-bold text-3xl text-gray">EC Research</h1>
      <p class="text-sm">ECサイトのUI/UXを研究するサイト</p>
    </header>
    <div class="flex flex-wrap px-5 mx-auto">
      <div class="animate-contentsFadeIn md:w-1/3 p-2" v-for="(e, i) in siteItems" :style="{ 'animation-delay': `${i * 0.2}s` }">
        <a :href="e.url" class="bg-gray block p-4 rounded-2xl">
          <img class="rounded-2xl" :src="e.image.url">
          <span class="animate-fadeInLeft block mt-2.5 font-bold text-white text-2xl" :style="{ 'animation-delay': `${i * 0.2}s` }">{{e.title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      // APIを叩いて返ってきたコンテンツを格納する用に空の配列を用意
      siteItems: [],
    }
  },
  mounted() {
    // mount時にヘッダ一覧を取得する処理を実行
    this.getSites()
  },
  methods: {
    getSites() {
      // Git管理しないAPIキーは、.envファイル内にて別途定義する
      // オプションとして、コンテンツの最大取得件数は100件と設定
      axios.get('https://ec-research.microcms.io/api/v1/ecsite', {
          headers: { 'X-API-KEY': this.$config.apiKEY }
        })
        .then((res) => {
          // 取得したコンテンツをコンポーネントのdata内に格納
          this.siteItems = res.data.contents
          // 取得したアイテムをシャッフル
          for (let i = this.siteItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const tmp = this.siteItems[i]
            this.siteItems[i] = this.siteItems[j]
            this.siteItems[j] = tmp
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
