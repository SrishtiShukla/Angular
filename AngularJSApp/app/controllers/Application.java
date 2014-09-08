package controllers;

import models.Task;
import play.data.Form;
import play.mvc.*;

import views.html.*;

import static com.avaje.ebean.Ebean.save;

public class Application extends Controller {

    static Form<Task> taskForm = Form.form(Task.class);

    public static Result index() {
        return ok(views.html.index.render(Task.all()));
    }

    public static Result displayForm(){
        return ok(views.html.newForm.render(taskForm));
    }

    public static Result newTask() {
        Form<Task> filledForm = taskForm.bindFromRequest();
        if(filledForm.hasErrors()){
            return badRequest(newForm.render(filledForm));
        }else{
            save(filledForm.get());
            return redirect(routes.Application.index());
        }
    }

    public static Result hello() {
        return ok(hello.render());
    }

}
