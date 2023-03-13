// INPUT
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
    }

);