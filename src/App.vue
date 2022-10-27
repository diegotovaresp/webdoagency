<template>
  <div id="app">
    <main class="py-4">
      <router-view></router-view>

    </main>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import { localize } from 'vee-validate';
import es from 'vee-validate/dist/locale/es';
import i18n from "@/i18n";


localize({es});

export default {
  name: 'App',
  components:{

  },
  data: () => ({
    //
  }),
  metaInfo() {
    return {
      titleTemplate: `%s | ${i18n.t("config.siteTitle")}`,
      htmlAttrs: {
        lang: i18n.t("config.lang")
      },
      meta: [
        {property: "og:type", content: "website"},
        {property: "og:site_name", content: "La Mision"},
        {property: "og:image:width", content: "699"},
        {property: "og:image:height", content: "366"},

        {
          property: "og:description",
          content: "La Mision."
        },
        {property: "og:url", content: "https://lamision.pe"},
        {property: "og:title", content: "lamision.pe"},
      ]
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  mounted: function () {
    this.resolveResolution();

  },
  methods:{
    ...mapActions([
      'updateResolution',
    ]),
    resolveResolution(){
      const size = window.innerWidth;
      this.isMobile = size <= 768;
      this.updateResolution(this.isMobile);
    }
  }
};
</script>
<style>
.loading {
  position: fixed;
  z-index: 100000;
  height: 2em;
  width: 2em;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.loading:before {
  content: '';
  display: block;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.45);
}
.cursor-pointer{
  cursor: pointer;
}
</style>
