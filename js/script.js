// INPUT
// Bottone "Genera"
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click",

    function() {

        // Chiedo all'utente nome e cognome del passeggero
        const fullNameInput = document.getElementById("user-name");
        const fullName = fullNameInput.value;
        console.log(fullName);

        // Chiedo all'utente il numero di chilometri che vuole percorrere
        const distanceInput = document.getElementById("distance");
        const distance = distanceInput.value;
        console.log(distance);

        // Chiedo all'utente l'età del passeggero
        const ageInput = document.getElementById("age");
        const age = ageInput.value;
        console.log(age);

        //  LOGICA
        //  Calcolo il prezzo base
        const priceKm = 0.21;
        let basePrice = (distance * priceKm);
        console.log(basePrice);

        let discountedPrice = "";
        let offer ="";

        // Se il passeggero è minorenne
        //      Applico uno sconto del 20%
        // Altrimenti se il passeggero è over 65
        //      Applico uno sconto del 40%
        // Altrimenti
        //      Il prezzo di base rimane invariato
        if (age === "under18") {
            const discount20 = basePrice * 20 / 100;
            discountedPrice = basePrice - discount20;
            offer = "Biglietto Under 18";
        } else if (age === "over65") {
            const discount40 = basePrice * 40 / 100;
            discountedPrice = basePrice - discount40;
            offer = "Biglietto Over 65";
        } else {
            discountedPrice = basePrice;
            offer = "Biglietto Standard";
        }

        // Arrotondiamo il prezzo ad un massimo di due decimali
        let finalPrice = discountedPrice.toFixed(2);
        console.log(finalPrice);
        
        // Genero il numero della carrozza da 1 a 9
        const carriage = Math.floor(Math.random() * 9) + 1;
        
        // Genero un codice CP tra 10000 e 99999
        const code = Math.floor(Math.random() * 99999 - 10000 + 1) + 10000;
        
        // OUTPUT
        // Stampo i dati del biglietto
        const ticket = document.getElementById("ticket");
        document.getElementById("output-title").classList.remove("hidden")
        ticket.classList.remove("hidden");
        
        document.getElementById("passenger-name").innerHTML = fullName;
        document.getElementById("offer").innerHTML = offer;
        document.getElementById("carriage").innerHTML = carriage;
        document.getElementById("cp-code").innerHTML = code;
        document.getElementById("ticket-price").innerHTML = finalPrice + ' €';

        // Ripulisco gli input
        fullNameInput.value = "";
        distanceInput.value = "";
        ageInput.value = "";
        
    }
);

// Bottone "Annulla"
const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click",

    function() {
        document.getElementById("output-title").classList.add("hidden")
        document.getElementById("ticket").classList.add("hidden");

        // Ripulisco gli input
        fullNameInput.value = "";
        distanceInput.value = "";
        ageInput.value = "";
    }

);