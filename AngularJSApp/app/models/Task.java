package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Task extends Model{

    @Id
    public Long id;

    public String label;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public static Finder<Long, Task> find = new Finder(Long.class, Task.class);

    public static List<Task> all(){
        return find.all();
    }
}
