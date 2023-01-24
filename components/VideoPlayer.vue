<script lang="ts" setup>
  const props = defineProps({
    videoId:{
      type: Number,
      required: true
    }
  }) 
</script>

<template>
  <iframe 
  :src="`https://player.vimeo.com/video/${props.videoId}`"
  title="Video player"
  width="560"
  height="315"
  class="w-full"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
  allowfullscreen
  frameborder="0"></iframe>
</template>

<style scoped></style>
