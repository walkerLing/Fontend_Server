<template>
  <div id="Footer" >
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  data() {
    return {
      msg: "Design by Yiming Ling/Copyright 2023.1.23",
    };
  },
};
</script>
<style scoped>
#Footer {
  /*background:#F2F6FC;*/
  border-radius: 5px;
  width: 80%;
  height: 1%;
  padding: 5%;
  margin-left: 10%;
}

p {
  color: white;
  text-align: center;
  font-size: 1.1em;
}
</style>


