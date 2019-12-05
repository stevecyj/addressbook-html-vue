const app = new Vue({
  el: "#app",
  data: {
    Fname: "",
    Lname: "",
    Email: "",
    Phone: "",
    Address: "",
    Id: ""
  },
  created() {
    this.Fname = sessionStorage.getItem("Fname");
    this.Lname = sessionStorage.getItem("Lname");
    this.Email = sessionStorage.getItem("Email");
    this.Phone = sessionStorage.getItem("Phone");
    this.Address = sessionStorage.getItem("Address");
    this.Id = sessionStorage.getItem("Id");
  },
  methods: {
    edit(id) {
      let formData = new FormData();
      formData.append("Fname", this.Fname);
      formData.append("Lname", this.Lname);
      formData.append("Email", this.Email);
      formData.append("Phone", this.Phone);
      formData.append("Address", this.Address);
      const config = {
        header: { "Content-Type": "multipart/form-data" }
      };
      axios
        .put(`http://localhost:8001/public/api/contactsmodify/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
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
