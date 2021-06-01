var speech = "I am a good boy. I don't smoke";

var count = 0;
for(var i = 0; i <speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count ++;
    }
}
count++;
console.log(count);