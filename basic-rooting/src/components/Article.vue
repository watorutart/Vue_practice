<script>
export default {
  methods: {
    onclick: function () {
      this.$router.push('top')
    }
  },
  template: '<div><h3>記事情報</h3>' +
    '<button v-on:click="onclick">トップへ</button></div>'
}
</script>
