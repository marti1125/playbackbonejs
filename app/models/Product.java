package models;

import javax.persistence.Entity;

import controllers.CRUD.BackGridCellType;
import controllers.CRUD.Readonly;

import play.db.jpa.Model;

@Entity
public class Product extends Model {
	
	@Readonly
	@BackGridCellType(cell="string")
	public String description;
	
	@Readonly
	@BackGridCellType(cell="string")
	public int amount;
	
}
