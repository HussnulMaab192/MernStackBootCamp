let employee={
    EmployeeID:"22-mern-emp",
    EmployeeName:"Arshad Ali",
    EmployeeCompany:"Bitsol Technology",
    EmployeeCompanyAddress:{
        city:"rawalpindi",
        country:"Pakistan"
    },
    EmployeeAddress:{
        city:"Islamabad",
        country:"Pakistan"
    },
    EmployeeSalary:35000
}

// to show the city of employee company as well as employee address
console.log(employee["EmployeeAddress"]["city"]);
console.log(employee["EmployeeCompanyAddress"]["city"]);
