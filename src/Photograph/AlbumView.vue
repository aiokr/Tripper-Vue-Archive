<!--相册内页-->
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'
import moment from 'moment'

let route = useRoute()
let id = ref(null)
let article = ref(null)
let author = ref(null)
let category = ref(null)
let text = ref(null)
let cover = ref(null)
let tags = ref(null)
let pubDate = ref(null)
let title = ref(null)
</script>
<template>

</template>
<style>
</style>