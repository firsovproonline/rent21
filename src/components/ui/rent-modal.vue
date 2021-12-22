<template>
  <transition name="slide-fade">
    <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div @click.stop class="dialog__content">
        <div class="infoSectionHeader"></div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: 'rentModal',
  mixins: [toggleMixin],
  mounted() {

  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog .content{
  padding: 20px;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.infoSectionHeader {
  background: url(img/htop.jpg) repeat-x;
  color: #ffffff;
  font-weight: bolder;
  min-height: 28px;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>