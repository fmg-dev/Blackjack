let player = {
    name : "Fatih",
    chips : 150
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');
playerEl.textContent ="Player: " + player.name + " $" + player.chips;

//random card number
function getRandomCard() {
    //if randomNumber 1 -> 11
    //if randomNumber 11-13 -> 10
   let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}

//start button
function startGame() {
    //cards arrayim ilk başta bilindik geldiği için içini boşalttık. toplamı 0 yaptık. daha sonra start buttonuna tıklandığında çalışacak hale getirdik.
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

// firstcard and secondcardın forunu döndürdük daha sonra cardsa yazdırdık.
function renderGame() {
    sumEl.innerHTML ="Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    //if sum 20ye eşit veya 20den küçükse kart ister misin yazdırdık. 21e eşitse blackjack yazdırdık. diğer durumda elendin yazdırdık.
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    //! Message
    messageEl.innerHTML = message;
}

//newCard button. yeni kart istedik. push ile arraye yeni bir kart ekledik. array = cards. 33. satır.
function newCard() {
    //ilk başta çalışmaması için if ekledik. eğer hala yanmadıysa ve blackjack olmadıysa burayı çalıştır dedik. onun dışında çalıştırma dedik. yandıysa da duruyor. 
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        // console.log(cards);
        renderGame()
    }
}
