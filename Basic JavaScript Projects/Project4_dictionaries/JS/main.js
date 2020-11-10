function mydictionary() {
    var vehcicle = {
        Make: "Mclaren",
        Color: "white",
        Version:"725LT",
        Year: 2020,
        Speed:212,
    };
    delete vehcicle.Make;
    document.getElementById("Dictionary").innerHTML = vehcicle.Make;
} //created dictionary using function along with the document. get element by id to display the make of the var vehcicle//