let button = document.querySelector("button");
let result = document.querySelector(".result");
let howmany = document.querySelector(".howmany");
let partiesorhome = document.querySelector(".partiesorhome");

//
button.onclick = function() {
         console.log();
        let question1Input = document.querySelector(".question1answer").value;
        let question2Input = document.querySelector(".question2answer").value;
        ///
        if (question1Input < 10 && question2Input === "parties") {
            result.innerHTML = "Since you talk about losing your ex " + question1Input + " times and you like to go to " + question2Input + " , then your song is Borro Cassette!";
        } else if (question1Input > 10 && question2Input === "parties" ) {
        result.innerHTML = "Since you talk about losing your ex " + question1Input+" times and you like to go to "+ question2Input+" , then your song is El Perdedor!";
        } else if (question1Input < 10 && question2Input === "home") {
        result.innerHTML = "Since you talk about losing your ex "+ question1Input+" times and you like to stay "+ question2Input+" , then your song is Felizes los 4!";
        } else if (question1Input > 10 && question2Input === "home") {
             result.innerHTML = "Since you talk about losing your ex "+ question1Input+" times and you like to stay "+ question2Input+" , then your song is Hawaii!";
        }



        };