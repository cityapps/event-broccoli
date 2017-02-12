<template>
  <div>
    <h1>Landing page</h1>
    <hello first-name="User"></hello>
  </div>
</template>
<script>
  import Hello from 'components/helloCmp/Hello';
  export default {
    name: 'LandingPage',
    components: {
      hello: Hello
    }
  };
</script>
