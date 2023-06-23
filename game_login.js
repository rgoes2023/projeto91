function adduser() {
player1Name = document.getElementById("box1").value;
player2Name = document.getElementById("box2").value;

localStorage.setItem("player1Name", player1Name);
localStorage.setItem("player2Name", player2Name);

window.location = "game_page.html";
}
