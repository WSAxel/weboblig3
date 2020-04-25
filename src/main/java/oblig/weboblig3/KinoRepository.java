package oblig.weboblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinoRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreAlleFilmene(Kino innFilmer){
        String sql = "INSERT INTO Kino (film, antall, fornavn, etternavn, telefon, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql,innFilmer.getFilm(),innFilmer.getAntall(),innFilmer.getFornavn(),innFilmer.getEtternavn(),
        innFilmer.getTelefon(),innFilmer.getEpost());
    }

    public List<Kino> hentAlleKunder() {
        String sql = "SELECT * FROM Kino";
        return db.query(sql,new BeanPropertyRowMapper(Kino.class));
    }

    public void slettAlleKunder() {
        String sql = "DELETE FROM Kino";
        db.update(sql);
    }
}
