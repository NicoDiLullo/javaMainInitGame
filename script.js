const targetText = "public static void main(String[] args)";
let startTime = null;

document.getElementById("typing-input").addEventListener("input", function(e) {
    if (startTime === null) {
        startTime = performance.now();
    }
    if (e.target.value === targetText) {
        const elapsedTime = (performance.now() - startTime) / 1000;
        document.getElementById("result").textContent = `Completed in: ${elapsedTime.toFixed(2)} seconds`;
        e.target.disabled = true;
    }
});

function resetGame() {
    document.getElementById("typing-input").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("typing-input").disabled = false;
    startTime = null;
}
