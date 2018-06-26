var message = function(message, cb){
    console.log(message)
    cb(message);
    
}

// function mafonction(chiffre){
//     var result = chiffre * chiffre
//     console.log(result)
// }

// function main(){
//     message('bonjour',function(chiffre){
//         var result = chiffre*chiffre
//         console.log(result)
//     })
//     // mafonction(2)
// }

// message("bonjour", function (message) { 
//     console.log(message + "je suis le callback")
// })


function main (cb){
    message("bonjour", function (message) { 
        console.log(message + " je suis le callback");
        cb(message)
     })
}

main(function(message){
    console.log("main function " + message);
})