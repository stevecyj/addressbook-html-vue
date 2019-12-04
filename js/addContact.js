const app = new Vue({
  el: "#app",
  data: {
    data: []
  },

  created() {
    const vm = this;
    axios
      .get("http://127.0.0.1/addressbook-laravel/public/api/contacts")
      .then(function(response) {
        // handle success
        console.log(response);
        vm.data = response.data;
        console.log(vm.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
});
