const timeSync = {
    init: function (config, onStatus) {
        function checkAndFixTime() {
            const currentTime = new
        
        Date();

        fetch(config.serverURL = "/api/getTime")

        .then(response => response.json())
        .then(data => {
            const serverTime = new Date(data.currentTime);
            const difference = Math.abs(serverTime - currentTime);
        
            if (difference > 15000)

                try {
                 
                    tizen.time.setCurrentDateTime(serverTime);
                    
                    console.log("time set successfully");
                    if (onStatus)
                    
                        onStatus ("Time set successfully");

                
                } catch(e){
                    console.error("error to set the time", e);

                    if (onStatus)
                        onStatus("error to set the time");
                } else {
                    console.log("Time already set up");
                    if (onStatus) onStatus("Time already set up");
                }
        })
        .catch(err => {
            console.erro("consult time error", err);
            if (onStatus)
                onStatus("consult time error");
        });

        }
        checkAndFixTime();
    }
};