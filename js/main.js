document.addEventListener("DOMContentLoaded", function () {
    checkAndFixTime();

    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) {
            checkAndFixTime();
        }
    });
});

function checkAndFixTime() {
    const currentTime = new Date();
    fetch("https://el server aqui joab /api/getTime")
        .then(response => response.json())
        .then(data => {
            const serverTime = new Date(data.currentTime);
            const difference = Math.abs(serverTime - currentTime);

            if (difference > 60000) {
                try {
                    tizen.time.setCurrentDateTime(serverTime);
                    console.log("Hora ajustada con éxito.");
                } catch (e) {
                    console.error("Error al ajustar la hora:", e);
                }
            } else {
                console.log("La hora está correcta.");
            }
        })
        .catch(err => console.error("Error al consultar hora:", err));
}
