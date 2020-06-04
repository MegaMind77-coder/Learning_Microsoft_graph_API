function greeter(person) {
    return "Hello " + person.firstName + " " + person.secondName;
}
var user = { firstName: "Ishan", secondName: "Shanware"
};
document.body.textContent = greeter(user);
