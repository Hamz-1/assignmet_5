function greetUser(name) {
    let greeting = `Hello, ${name}! Welcome to MY webpage.`;
    alert(greeting);
}

let userName = prompt("Enter your name:");
greetUser(userName);
