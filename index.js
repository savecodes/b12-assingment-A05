// Call & history
const callButtons = document.getElementsByClassName("call-btn"); 
const historyList = document.getElementById("call-history-list");
const clearBtn = document.getElementById("clear-history");

// Top copy, heart & coin buttons
const topCopyBtn = document.getElementById("top-copy");
const topHeartBtn = document.getElementById("top-heart");
const topCoinBtn = document.querySelector("button:nth-child(2)");

let totalCopies = parseInt(topCopyBtn.innerText) || 0;
let totalHearts = parseInt(topHeartBtn.innerText) || 0;
let totalCoins = parseInt(topCoinBtn.innerText) || 100;

// Add call history
function addHistory(title, number) {
    const now = new Date();
    const time = now.toLocaleTimeString();

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "items-center", "py-4");

    const left = document.createElement("div");
    left.innerHTML = "<b>" + title + "</b><br><span class='text-gray-500'>" + number + "</span>";

    const right = document.createElement("div");
    right.innerText = time;
    right.classList.add("text-lg");

    div.appendChild(left);
    div.appendChild(right);

    historyList.appendChild(div);
}

// Call buttons
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].onclick = function () {
        if (totalCoins < 20) {
            alert("❌ Not enough coins! Need at least 20 coin to call.");
            return;
        }

        const title = this.getAttribute("data-title");
        const number = this.getAttribute("data-number");

        alert("📞 Calling " + title + " " + number);

        addHistory(title, number);

        totalCoins -= 20;
        if (totalCoins < 0) totalCoins = 0;

        topCoinBtn.innerHTML = totalCoins + " ";
        const img = document.createElement("img");
        img.src = "./assets/coin.png";
        img.alt = "Coin icon";
        img.className = "w-5 h-5";
        topCoinBtn.appendChild(img);
    }
}

// Copy buttons
const copyButtons = document.getElementsByClassName("copy-btn");
for (let j = 0; j < copyButtons.length; j++) {
    copyButtons[j].onclick = function () {
        const card = this.parentNode.parentNode;
        const number = card.querySelector(".data-number").innerText;

        const tempInput = document.createElement("input");
        tempInput.value = number;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy"); 
        document.body.removeChild(tempInput);

        totalCopies++;
        topCopyBtn.innerHTML = totalCopies + ' Copy';

        alert("Copied the number: " + number);
    }
}

// Heart buttons (bottom cards)
const heartButtons = document.querySelectorAll(".fa-heart");
for (let k = 0; k < heartButtons.length; k++) {
    heartButtons[k].onclick = function () {
        totalHearts++;
        topHeartBtn.innerHTML = totalHearts + ' <img src="./assets/heart.png" alt="Heart icon" class="w-5 h-5">';
    }
}

// Clear history
clearBtn.onclick = function () {
    historyList.innerHTML = "";
}
