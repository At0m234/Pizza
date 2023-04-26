<script setup lang="ts">

</script>

<template>
  <section class="about">
    <div class="about__content">
      <h2 class="about__title">О нас</h2>
      <p class="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis sem sed magna fringilla, eu congue massa consequat. Maecenas ut ornare velit. Donec vel quam mi. Sed tellus leo, pharetra in pulvinar eget, accumsan sed erat. Vestibulum dictum rhoncus nibh id blandit. Nulla posuere, dolor eu hendrerit laoreet, felis nisl ultrices lectus, ut tincidunt turpis odio ut dui. Ut tempor efficitur ligula mollis facilisis. Duis tempus semper enim in ornare. Phasellus blandit fringilla diam sed sollicitudin. Maecenas a eros eu augue tempor luctus ac sed magna. Donec rhoncus justo in pretium finibus. Etiam quis rhoncus nisi. Curabitur vehicula et orci nec accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis sem sed magna fringilla, eu congue massa consequat. Maecenas ut ornare velit. Donec vel quam mi. Sed tellus leo, pharetra in pulvinar eget, accumsan sed erat. Vestibulum dictum rhoncus nibh id blandit. </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  width: 100%;
  max-width: 1440px;
  &__content {
    display: flex;
    flex-direction: column;
    max-width: 920px;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: var(--color-text-gray);
    margin-bottom: 34px;
  }
  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-gray);
  }
}

@media (max-width: 1000px) {

}


</style>