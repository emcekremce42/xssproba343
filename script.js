function otvoriMeni() {
    let meni = document.getElementById("navLinks");
    meni.classList.toggle("active");
}
let linkovi = document.querySelectorAll(".nav-links a");
linkovi.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});
let forma = document.getElementById("kontaktForma");
forma.addEventListener("submit", function(event) {
    event.preventDefault();
    let ime = document.getElementById("ime").value;
    let email = document.getElementById("email").value;
    let poruka = document.getElementById("poruka").value;
    if (ime === "" || email === "" || poruka === "") {
        alert("Molimo vas da popunite sva polja.");
        return;
    }
    alert("Hvala, " + ime + "! Vaša poruka je uspešno poslata.");
    forma.reset();
});