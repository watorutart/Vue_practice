<script>
export default {
  methods: {
    onclick: function () {
      this.$router.push('top')
    }
  },
  template: '<span>id: {{ $route.params.id }}</span>'
}
</script>
