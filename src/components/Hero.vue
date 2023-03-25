<script setup>
</script>
<template>
  <div class="hero-img h-[500px]">
    <div class="hero-layer">
      <div class="hero-title text-4xl font-bold">Tripper Press</div>
      <div class="hero-subtitle color-white opacity-80 pt-3">拿起相机 认真思考</div>
    </div>
  </div>
</template>

<style>
.hero-img {
  background-image: url('https://imgur.lzmun.com/picgo/after2022/6DD1FBC3-AD8A-4340-842D-6ACF531F8291_1_105_c.jpeg_itp');
  background-position: center;
  background-size: cover;
  display: block;
  position: relative;
}

.hero-layer {
  background: linear-gradient(rgba(32, 32, 32, 0) 14%, rgba(32, 32, 32, 0.56) 100%);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hero-title,.hero-subtitle {
  color: #fff;
}

</style>