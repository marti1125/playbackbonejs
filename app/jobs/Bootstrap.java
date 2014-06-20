package jobs;

import models.Product;
import play.jobs.*;
import play.mvc.Before;
import play.test.Fixtures;

@OnApplicationStart
public class Bootstrap extends Job {
	
	public void doJob() {
        if(Product.count() == 0){
            Fixtures.loadModels("initial-data.yml");
        }
    }
	
}
