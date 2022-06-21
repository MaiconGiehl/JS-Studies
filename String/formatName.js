function formatName (allName) {
    
    // allName = allName.trim();
    
    // let firstSpace = allName.indexOf(" ");
    
    // if (firstSpace < 0) {
    //     return allName;
    // }
    
    // let firstName = allName.slice(0, firstSpace);
    // let lastName = allName.slice(firstSpace + 1);
    // return lastName + ", " + firstName;

    let nameAsArray = allName.split(" ");

    if (nameAsArray == 1) {
        return allName;
    }

    let firstName = nameAsArray.shift();
    return nameAsArray.join(" ") + ", " + firstName;
}

let name = "Jack Stauber";
console.log(formatName(name));

name = "Leonardo da Vinci";
console.log(formatName(name));

name = "Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano [...] Gonzaga de Bragança e Bourbon";
console.log(formatName(name));