<template>
  <div class="tree">Вывод древовидных данных
    <ul>
      <node v-for="child in treeData"
            :key="child.id"
            v-bind:node="child"></node>
    </ul>
  </div>
</template>

<script>
import node from './NodeTree/NodeTree.vue';
export default {
  name:"tree",
  props: {
    treeData: Array
  },
  components: {
    node
  }
};
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
img{
  margin-top: 4px;
}

.nodeItem{
  height: 39px;
}
.list-group-item{
  text-align:left;
  padding: 4px !important;
  margin-left: 20px;
  margin-bottom: 4px;
  background-color: antiquewhite !important;
}
.tree li {
  list-style-type:none;
  margin:0;
  padding:10px 5px 0 25px;
  position:relative;
  text-align: left;
}
.tree li::before, .tree li::after {
  content:'';
  left:-20px;
  position:absolute;
  right:auto
}
.tree li::before {
  border-left:1px solid #999;
  bottom:50px;
  height:100%;
  top:0;
  width:1px;
  margin-left:25px;
}
.tree li::after {
  border-top:1px solid #999;
  height:36px;
  top:34px;
  width:22px;
  left: 4px;
}
.tree li .label {
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  border:1px solid #999;
  border-radius:5px;
  display:inline-block;
  padding:3px 8px;
  text-decoration:none;
  cursor: pointer;
  min-width: 270px;
  background-color: silver;
}
.tree li.parent_li>.label {
  cursor:pointer
}
.tree>ul>li::before, .tree>ul>li::after {
  border:0
}
.tree li:last-child::before {
  height:34px
}
.tree li.parent_li>span:hover, .tree li.parent_li>span:hover+ul li span {
  background:#eee;
  border:1px solid #94a0b4;
  color:#000
}

.form-check-input {
  width: 22px;
  height: 22px;
  position: relative !important;
  margin-top: 0 !important;
  margin-left: 0 !important;
}


</style>