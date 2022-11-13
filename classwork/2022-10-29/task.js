const employees = [
  {
    EmployeeID: "22-mern-emp",
    EmployeeName: "Arshad Ali",
    EmployeeCompany: "Bitsol Technology",
    EmployeeCompanyAddress: {
      city: "rawalpindi",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "Islamabad",
      country: "Pakistan",
    },
    EmployeeSalary: 35000,
    islam: true,
  },
  {
    EmployeeID: "22-mern-emp",
    EmployeeName: "Abdullah Ali",
    EmployeeCompany: "Bitsol Technology",
    EmployeeCompanyAddress: {
      city: "rawalpindi",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "Islamabad",
      country: "Pakistan",
    },
    EmployeeSalary: 35000,
    islam: false,
  },
  {
    EmployeeID: "21-mern-emp",
    EmployeeName: "Ayesha Ali",
    EmployeeCompany: "Contour Technology",
    EmployeeCompanyAddress: {
      city: "Islamabad",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "faisalabad",
      country: "Pakistan",
    },
    EmployeeSalary: 55000,
    islam: false,
  },
  {
    EmployeeID: "20-mern-emp",
    EmployeeName: "Alia shahzad",
    EmployeeCompany: "Bitsol Technology",
    EmployeeCompanyAddress: {
      city: "rawalpindi",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "Islamabad",
      country: "Pakistan",
    },
    EmployeeSalary: 75000,
    islam: true,
  },
  {
    EmployeeID: "18-mern-emp",
    EmployeeName: "Abdul Rehman",
    EmployeeCompany: "Contour Technology",
    EmployeeCompanyAddress: {
      city: "Islamabad",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "Islamabad",
      country: "Pakistan",
    },
    EmployeeSalary: 95000,
    islam: true,
  },
  {
    EmployeeID: "21-mern-emp",
    EmployeeName: "hamza qamar",
    EmployeeCompany: "MTBC",
    EmployeeCompanyAddress: {
      city: "rawalpindi",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "Faisalabad",
      country: "Pakistan",
    },
    EmployeeSalary: 55000,
    islam: false,
  },
  {
    EmployeeID: "22-mern-emp",
    EmployeeName: "M Ali",
    EmployeeCompany: "Contour Technologies",
    EmployeeCompanyAddress: {
      city: "Islamabad",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "Rawalpindi",
      country: "Pakistan",
    },
    EmployeeSalary: 45000,
    islam: false,
  },
  {
    EmployeeID: "18-mern-emp",
    EmployeeName: "Ali Kamal",
    EmployeeCompany: "MTBC",
    EmployeeCompanyAddress: {
      city: "rawalpindi",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "haiderabad",
      country: "Pakistan",
    },
    EmployeeSalary: 65000,
    islam: true,
  },
  {
    EmployeeID: "18-mern-emp",
    EmployeeName: "Aliya qamar",
    EmployeeCompany: "Bitsol Technology",
    EmployeeCompanyAddress: {
      city: "rawalpindi",
      country: "Pakistan",
    },
    EmployeeAddress: {
      city: "Lahore",
      country: "Pakistan",
    },
    EmployeeSalary: 65000,
    islam: true,
  },
];
//to find value and return from where it got
// console.log(employees.find((as)=>(as.islam==true)))
//to find value and return from where it exists in array
// console.log(employees.filter((as)=>(as.islam==true)))
//show data
// console.log(employees.filter((as) => as.EmployeeSalary < 40000));
// forEach
let Empobj={};
employees.forEach(nm=>{
    // EmployeeName: "Aliya qamar",
    if(nm.EmployeeName=="Aliya qamar")
    {
        Empobj=nm;
        return Empobj;
    }
})
console.log(Empobj);