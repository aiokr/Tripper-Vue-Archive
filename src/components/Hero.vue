<script setup>
</script>
<template>
  <div class="hero-area lg:container lg:max-w-7xl lg:px-8">
    <div class="hero-img h-[300px] lg:h-[500px] ">
      <div class="hero-layer">
        <div class="hero-title text-4xl font-bold">前行有风</div>
        <div class="hero-subtitle color-white opacity-80 pt-3">Tripper Press</div>
      </div>
    </div>
  </div>
</template>

<style>
.hero-img {
  background-image: url('https://imgur.lzmun.com/picgo/after2022/202209112241772.png_itp');
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

.hero-title,
.hero-subtitle {
  color: #fff;
}

@media (min-width: 1024px) {
  .hero-img,
  .hero-layer {
    border-radius: var(--radius);
  }
}

@media (max-width: 1022px) {
  .hero-img,
  .hero-layer {
    border-bottom-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
}

</style>