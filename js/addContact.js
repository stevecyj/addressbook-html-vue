const app = new Vue({
  el: '#app',
  data: {
    first: '',
    last: '',
    email: '',
    phone: '',
    address: ''
  },

  created() {
    const vm = this;
    axios
      .get('http://127.0.0.1/addressbook-laravel/public/api/contacts')
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
  },
  methods: {
    click() {
      let formData = new FormData();
      formData.append('Fname', this.first);
      formData.append('Lname', this.last);
      formData.append('Email', this.email);
      formData.append('Phone', this.phone);
      formData.append('Address', this.address);
      const config = {
        header: { 'Content-Type': 'multipart/form-data' }
      };
      axios
        .post('http://localhost:8001/public/api/contactsadd', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
