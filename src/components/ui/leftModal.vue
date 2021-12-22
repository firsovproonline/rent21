<template>
  <transition name="slide-fade">
    <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div @click.stop class="dialog__content">
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
  name: "leftModal",
  props:{
    items:Array
  },
  mixins: [toggleMixin],
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
  align-items: flex-end;
  align-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 0 20px rgb(0 0 0 / 80%);
}

.dialog__content {
  margin: 0;
  margin-right: auto;
  background: white;
  border-radius: unset;
  height: 100%;
  min-width: 280px;
}
.content{
  overflow-y: scroll;
  height: inherit;
  overflow-x: hidden;
}
</style>