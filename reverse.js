function reverse(str){
    var reverse = "";
    for(var i=0;i<str.length;i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien bhai brothers"
var forAlien = reverse(statement);
console.log(forAlien);