var app = new Vue({
    el: '#app',
    data: {
      vehicles: [
        {type: 'Car', brand: 'Toyota',color:'Metalic'},
        {type: 'Motorcycle', brand: 'Honda',color:'Red'},
        {type: 'Bike', brand: 'BMX',color:'Black'},
      ],
      object:{
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  })