

function Registrer() {
    if($("#Antall").val() === ""){
        $("#ant").html("Må skrive noe inn i Antall");
    }
    if($("#Fornavn").val() === ""){
        $("#for").html("Må skrive noe inn i fornavn");
    }
    if($("#Etternavn").val() === ""){
        $("#etter").html("Må skrive noe inn i Etternavn");
    }
    if($("#Telefon").val() === ""){
        $("#tel").html("Må skrive noe inn i Telefon");
    }
    if($("#Epost").val() === ""){
        $("#epo").html("Må skrive noe inn i Epost");
    }
    else{
        RegistrerIgjen();
    }
}

function RegistrerIgjen() {
    const Bilett = {
        Film: $("#filmSelect").val(),
        Antall: $("#Antall").val(),
        Fornavn: $("#Fornavn").val(),
        Etternavn: $("#Etternavn").val(),
        Telefon: $("#Telefon").val(),
        Epost: $("#Epost").val()
    };
    
    $.post("/lagre", Bilett, function () {
        hentAlle()
    });
    $("#Antall").val("");
    $("#Fornavn").val("");
    $("#Etternavn").val("");
    $("#Telefon").val("");
    $("#Epost").val("");
}

function hentAlle() {
    $.get("/hentAlle", function (filmer) {
        formaterData(filmer);
    });

    function formaterData(filmer) {
        let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
            "<th>Telefon</th><th>Epost</th></tr>";
        for (const film of filmer) {
            ut += "<tr><td>" + film.film + "</td><td>" + film.antall+"</td><td>"+ film.fornavn + "</td><td>"
                + film.etternavn + "</td><td>" + film.telefon + "</td><td>"
                + film.epost + "</td></tr>";
        }

        ut += "<table>";
        $("#utigjen").html(ut);
    }
}

function Slette() {
    $.get("/slettAlle", function () {
        hentAlle();
    })
}