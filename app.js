document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.getElementById("actionBtn");
    if (actionBtn) {
        actionBtn.addEventListener("click", () => {
            actionBtn.style.transform = "scale(0.95)";
            setTimeout(() => {
                actionBtn.style.transform = "none";
                alert("Sequence initialized successfully. Core systems nominal.");
            }, 150);
        });
    }

    const commsForm = document.getElementById("commsForm");
    if (commsForm) {
        commsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Signal transmitted across the network successfully.");
            commsForm.reset();
        });
    }
});
