function toggleTheme() {
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");

    if (dark.disabled) {
        dark.disabled = false;
        light.disabled = true;
    } else {
        dark.disabled = true;
        light.disabled = false;
    }
}