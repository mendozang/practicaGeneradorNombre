function generator() {
    var firstName = [
        "Liam",
        "Olivia",
        "Noah",
        "Emma",
        "Oliver",
        "Charlotte",
        "Mateo",
        "Amelia",
        "Henry",
        "Sophia",
        "Lucas",
        "Mia",
        "William",
        "Isabella",
        "Benjamin",
        "Ava",
        "Sebastian",
        "Evelyn",
        "Ezra",
        "Luna",
        "Daniel",
        "Camila",
        "Leo",
        "Elizabeth",
        "Owen",
        "Scarlett",
        "Samuel",
        "Emily",
        "Alexander",
        "Aurora"
    ];

    var lastName = [
        "Wang",
        "Smith",
        "Devi",
        "Ivanov",
        "Kim",
        "Ali",
        "García",
        "Muller",
        "Silva",
        "González",
        "Rodríguez",
        "Hansen",
        "Cruz",
        "Morales",
        "Torres",
        "Herrera",
        "Medina",
        "Rivera",
        "Vargas",
        "Castro",
        "Martin",
        "Roy",
        "Lee",
        "Wilson",
        "Rojas",
        "Villalobos",
        "Araya",
        "Madrigal",
        "Martinez",
        "Peña"
    ];

    var randomFirst = Math.floor(Math.random() * firstName.length);

    var randomLast = Math.floor(Math.random() * lastName.length);

    document.getElementById('result').innerHTML = "<h1 class='display-3 bg-light bg-gradient pb-2 rounded'>" + firstName[randomFirst] + ' ' + lastName[randomLast] + "</h1>";
}