//Anonymus Functions
// ()=>{}

//Extensions
// prettear --it formats the code
// Turbo console log -- it show on console !

//const var let

// spread operators         ...

// it makes copy and the original will not disturb and you mayuse it later at anywhere

// see array documentation and wartch all functions of array!

const object = {
  name: "abc",

  adress: {
    city: "rwp",
    country: "paksitan",
  },
  getAddress() {
    console.log("the city of object is: ", `${this.adress.city}`);
    console.log("the country of object is: ", `${this.adress.country}`);
  },
};

object.getAddress();
