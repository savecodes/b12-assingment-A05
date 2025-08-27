// Call & history
const callButtons = document.getElementsByClassName("call-btn"); 
const historyList = document.getElementById("call-history-list");
const clearBtn = document.getElementById("clear-history");

// Top copy & heart buttons
const topCopyBtn = document.getElementById("top-copy");
const topHeartBtn = document.getElementById("top-heart");
let totalCopies = parseInt(topCopyBtn.innerText) || 0;
let totalHearts = parseInt(topHeartBtn.innerText) || 0;

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
        const title = this.getAttribute("data-title");
        const number = this.getAttribute("data-number");

        alert("📞Calling " + title + " " + number);

        addHistory(title, number);
    }
}
// Copy buttons
const copyButtons = document.getElementsByClassName("copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].onclick = function () {
        totalCopies++;
        topCopyBtn.innerHTML = totalCopies + ' Copy';
    }
}
// Heart buttons (bottom cards)
const heartButtons = document.querySelectorAll(".fa-heart");
heartButtons.forEach(function(heart){
    heart.onclick = function () {
        totalHearts++;
        topHeartBtn.innerHTML = totalHearts + ' <img src="./assets/heart.png" alt="Heart icon" class="w-5 h-5">';
    }
});

// Clear history
clearBtn.onclick = function () {
    historyList.innerHTML = "";
}