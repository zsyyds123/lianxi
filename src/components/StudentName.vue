<template>
   <div>
      <span @click="show">学校名称：{{name}}</span>
      <br>
      学校地址：{{age}}
  </div>
</template>

<script>
// 引入我们的mixin
import{mixin} from '../mixin'
export default {
    name:'StudentName',
    data(){
        return{
            name:'张三',
            age:18
        }
    },
    // 局部混入
    mixins:[mixin]
}
</script>

<style>

</style>