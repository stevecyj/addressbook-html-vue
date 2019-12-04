const app = new Vue({
  el: '#app',
  data: {
    text: 'hahahahah',
    data: [],
    currentPage: 0 //預設目前頁數
  },
  computed: {
    filterData() {
      const vm = this;
      //有幾頁
      //每頁的資料內容
      const newData = [];
      vm.data.forEach((item, i) => {
        if (i % 5 === 0) {
          newData.push([]);
        }
        const page = parseInt(i / 5);
        newData[page].push(item);
      });
      console.log(newData);
      return newData;
    }
  },
  created() {
    const vm = this;
    axios
      .get('http://127.0.0.1:8000/api/contacts')
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
