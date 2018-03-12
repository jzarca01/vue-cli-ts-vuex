<template>
  <div class="error">
    <h1>This is not the page you're looking for</h1>
    <img :v-if="isGifDownloaded" :src="gif.image_url" class="errorImage"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const giphy = require('giphy-api')();

@Component
export default class Error404 extends Vue {

    private isGifDownloaded: boolean = false;
    private gif: any = {};

    public async mounted() {
        try {
            const results = await giphy.random('error');
            this.gif = results.data;
            this.isGifDownloaded = true;
            console.log(results);
        } catch (err) {
            console.log(err);
        }
    }
}
</script>

<style scoped>
.errorImage {
    width: auto;
    max-height: 350px;
}
</style>