<template>
  <div class="about">
    <tree v-bind:treeData="_treeData"></tree>
  </div>
</template>
<script>
// @ is an alias to /src
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'about',
  data() {
    return {
    }
  },
  components: {
  },
  computed:{
    /**
     * Импортируем гетеры из хранилища и назначаем им короткие имена для возможности вызова
     **/

    ...mapGetters({
      _treeData:'tree/get_items',
    })
  },
  mounted() {
    //console.log(this.$store)
    //@import "~materialize-css/dist/css/materialize.min.css";
  }

}
</script>
<style scoped>

</style>