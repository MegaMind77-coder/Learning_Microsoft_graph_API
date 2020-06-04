interface Person {
  firstName: string,
  secondName: string
}

function greeter(person: Person) {
  return "Hello " + person.firstName + " " + person.secondName;
}

let user = {firstName: "Ishan", secondName: "Shanware"
};

document.body.textContent = greeter(user);
