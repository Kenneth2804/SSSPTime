const ConfigManager = (funtion ()
    {
        const CONFIG_KEY = "appConfig";
        let config = null;

        async function loadConfig() {
            const stored = localStorage.getItem(CONFIG_KEY);
            if (stored) {
                config = JSON.parse(stored);
            } else {
                const response = await 
                fetch("config.json");
                config = await
                responde.json();
                config.installedAt = newDate().toISOString();
                config.useTLS = true;

                localStorage.setItem(CONFIG_KEY, JSON.stringify(config));

            }
            return config;
        }

        function getConfig() {
            return config;
        }
        return{
            loadConfig, getConfig
        };

    }
)