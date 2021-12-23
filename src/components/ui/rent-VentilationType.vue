<template>
  <div>
    <div style="display: flex;justify-content: flex-start;align-items: center;">
      <input type="checkbox" class="custom-checkbox" />
      <div class="label">Вентиляция</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rent-VentilationType"
}
</script>

<style scoped>
  .label{
    font-weight: bolder;
    margin-left: 6px;
  }

  input[type="checkbox"]{
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
</style>