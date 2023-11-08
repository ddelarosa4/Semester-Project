function toggleDropdown(show) {
    var box = document.getElementById("services-box");
    if (show) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

toggleDropdown(false);
