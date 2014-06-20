package controllers;

import java.util.List;

import models.Product;

import org.codehaus.jackson.map.ObjectMapper;

import play.mvc.Http.Header;

public class Products extends CRUD {
	
	public static void index(){
		render();
	}
	
	public static void listProducts() throws Exception {
		response.headers.put("Access-Control-Allow-Origin", new Header("Access-Control-Allow-Origin", "*"));
		List<Product> products = Product.findAll();
		org.codehaus.jackson.map.ObjectMapper mapper = new ObjectMapper();		
		renderJSON(mapper.writeValueAsString(products));		
	}
	
}
