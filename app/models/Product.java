package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Product extends Model {
	
	public String description;
	public int amount;
	
}
