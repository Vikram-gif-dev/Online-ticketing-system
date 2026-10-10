let ticketPrice = 0;
let chosenSeat = "";

function searchBus() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;

    if (from == "" || to == "" || date == "") {
        alert("Please enter all details.");
        return;
    }

    document.getElementById("results").innerHTML = `
        <div class="card">
            <h3>Express Rider</h3>
            <p>${from} → ${to}</p>
            <p>Departure: 9:30 AM | Arrival: 2:00 PM</p>
            <b>₹450</b>
            <button onclick="selectBus(450)">Choose</button>
        </div>

        <div class="card">
            <h3>City Voyager</h3>
            <p>${from} → ${to}</p>
            <p>Departure: 1:00 PM | Arrival: 5:30 PM</p>
            <b>₹550</b>
            <button onclick="selectBus(550)">Choose</button>
        </div>
    `;
}

function selectBus(price) {

    ticketPrice = price;

    document.getElementById("booking").classList.remove("hidden");

    let seatBox = document.getElementById("seats");
    seatBox.innerHTML = "";

    for (let i = 1; i <= 12; i++) {
        seatBox.innerHTML += `
            <div class="seat" onclick="chooseSeat(${i}, this)">
                ${i}
            </div>
        `;
    }

    document.getElementById("price").innerText = price;
}

function chooseSeat(number, seat) {

    document.querySelectorAll(".seat").forEach(s => {
        s.classList.remove("selected-seat");
    });

    seat.classList.add("selected-seat");

    chosenSeat = number;

    document.getElementById("selected").innerText = number;
}

function bookTicket() {

    if (chosenSeat == "") {
        alert("Please select a seat.");
        return;
    }

    document.getElementById("message").innerHTML =
        `<b>Booking Confirmed!</b><br>
        Your seat number is ${chosenSeat}.<br>
        Amount Paid: ₹${ticketPrice}`;
}