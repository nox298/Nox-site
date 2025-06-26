function handleKey(event) {
    if (event.key === "Enter") {
        const cmd = document.getElementById("command").value.trim();
        const output = document.getElementById("output");

        if (cmd === "noxdark1") {
            output.innerHTML += "<br><span class='dark'>Karanlık mod aktif. Derin protokol başlatılıyor...</span>";
        } else {
            output.innerHTML += "<br>NOX: " + cmd;
        }

        document.getElementById("command").value = "";
    }
}
