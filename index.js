var app = new Vue({
  el: '#app',
  data() {
    return {
      images: ['src/images/promo-02.png', 'src/images/promo-01.png'],
      currentIndex: 0,
    }
  },
  methods: {
    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    },
  },
  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    },
  },
})
