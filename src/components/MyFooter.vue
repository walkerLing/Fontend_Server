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
  padding: 6px;
  border-radius: 5px;
  width: 80%;
  height: 80px;
  margin: 20px auto;
  margin-top: 140px;
}

p {
  color: white;
  text-align: center;
  margin: 30px auto;
  font-size: 1.1em;
}
</style>


