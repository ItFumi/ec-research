<template>
  <div class="">
    <header class="bg-amber mb-3.5 mx-auto py-3.5 px-0 text-center">
      <h1 class="font-normal text-3xl text-gray">ECサイト研究所</h1>
      <p class="text-sm">ECサイトのUI/UXを研究するサイト</p>
    </header>
    <div class="font-main px-5" v-for="e in siteItems">
      <a class="bg-gray block rounded-2xl md:w-1/3 p-4">
        <img class="rounded-2xl" :src="e.image.url">
        <span class="block mt-2.5 text-white text-2xl">{{e.title}}</span>
      </a>
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
