const userName ='Ana'//global
function greeting () {
    let userName = 'Ana';//seccion
    console.log(userName);

    if (userName === 'Ana') {
    console.log(`Hello ${userName}!`);//seccion
}

}

greeting();
console.log(userName);//global