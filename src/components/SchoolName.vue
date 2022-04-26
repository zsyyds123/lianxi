<template>
  <div>
      <span @click="show">学校名称：{{name}}</span>
      <br>
      学校地址：{{address}}
  </div>
</template>

<script>
// 引入mixin
import {mixin} from '../mixin'
export default {
    name:'SchoolName',
    data(){
        return{
            name:'北京大学',
            address:'北京'
        }
    },
    // 局部混入
    mixins:[mixin]
}
</script>

<style>

</style>