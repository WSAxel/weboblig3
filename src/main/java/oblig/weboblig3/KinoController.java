package oblig.weboblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController


public class KinoController {

    @Autowired
    private KinoRepository rep;

    @PostMapping("/lagre")
    public void LagreFilmene(Kino innFilmer) {rep.lagreAlleFilmene(innFilmer);}

    @GetMapping("/hentAlle")
    public List<Kino> hentAlle() {return rep.hentAlleKunder();}

    @GetMapping("/slettAlle")
    public void slettAlle() {rep.slettAlleKunder();}

}