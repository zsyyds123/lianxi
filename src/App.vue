<template>
  <div >
    <Student-name></Student-name>
    <hr>
    <School-name></School-name>
  </div>
</template>
<script>
import StudentName from './components/StudentName.vue';
import SchoolName from './components/SchoolName.vue';

export default {
  name: "app",
  data() {
    return {
      
    };
  },
  components:{
    StudentName,
    SchoolName
  }
};
</script>
