const hubby = document.getElementById("hubby");
const hubbyChat = document.getElementById("hubby-chat");
const closeHubby = document.getElementById("closeHubby");

hubby.addEventListener("click", () => {

    hubbyChat.style.display = "block";

    hubbyChat.innerHTML = `
        <h3>🤖 Hubby</h3>

        <p>👋 Welcome to ToolHub!</p>

        <p>I can help you find the right tool.</p>

        <button onclick="findTool()">
        🔍 Find a Tool
        </button>

        <button onclick="aboutHubby()">
        🤖 About Me
        </button>

        <button id="closeHubby">
        ❌ Close
        </button>
    `;

    document
    .getElementById("closeHubby")
    .addEventListener("click", () => {

        hubbyChat.style.display = "none";

    });

});

closeHubby.addEventListener("click", () => {
    hubbyChat.style.display = "none";
});
function findTool(){

    alert(
`🤖 I can help you find:

🔐 Password Generator

📱 QR Generator

📝 Word Counter

🎂 Age Calculator

📊 Percentage Calculator

🎲 Random Number Generator

🪙 Coin Flip

🎨 Colour Picker

📏 Unit Converter

⏱️ Stopwatch`
    );

}

function aboutHubby(){

    alert(
`🤖 Hi!

I'm Hubby.

I was created to help visitors use ToolHub quickly and easily.

More features are coming soon! 🚀`
    );

}
const search = document.getElementById("search");

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});
