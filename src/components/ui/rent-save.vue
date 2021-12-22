<template>
  <div class="rent-save">
      <div class="bimg imgsave"  ></div>
      <div class="bimg imgcancel"  ></div>
  </div>
</template>

<script>
export default {
  name: "rent-save"
}
</script>

<style scoped>
  .rent-save{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
  }
  .bimg{
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin: 4px;
  }
  .imgsave{
    background-image: url("img/save.png");
    background-size: 100% 100%;
  }
  .imgcancel{
    background-image: url("img/undo.png");
    background-size: 100% 100%;
  }

</style>