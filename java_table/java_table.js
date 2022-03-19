function myfunction() {

    var data = [
        { id: 1, Name: "Binoy", Age: 21 },
        { id: 2, Name: "Asif", Age: 20 },
        { id: 3, Name: "Hari", Age: 22 },
        { id: 4, Name: "Muzzamil", Age: 20 },
        { id: 5, Name: "Jobin", Age: 21 },
        { id: 6, Name: "Mithun", Age: 19 },
        { id: 7, Name: "Abhilash", Age: 21 },
        { id: 8, Name: "Gokul", Age: 20 },
        { id: 9, Name: "Bharath", Age: 22 },
        { id: 10, Name: "Arun", Age: 20 },
        { id: 11, Name: "Sreelal", Age: 21 },
        { id: 12, Name: "Vishnu", Age: 19 }
    ];

    var result = "<table class='studentList' border = 5 width = 100% cellpadding = 7% > " + "<tr>" + "<th>" + "id" + "</th>" + "<th>" + "Name" + "</th>" + "<th>" + "Age" + "</th>" + "</tr>";

    for (var i = 0; i < data.length; i++) {

        result = result + "<tr>"+  "<td>"  + data[i].id + "</td>" + "<td>" + data[i].Name   + "</td>" + "<td>" + data[i].Age + "</td>" + "</tr>";
    }
    result = result + "</table>";
    document.getElementById("demo").innerHTML = result;
    document.getElementById("demo").style.backgroundColor = "grey"
    document.getElementById("demo").style.color = "white"

}