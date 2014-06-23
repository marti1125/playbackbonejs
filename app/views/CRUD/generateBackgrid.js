var Product = Backbone.Model.extend({});

var Products = Backbone.Collection.extend({
  model: Product,
  //url: "/products/listProducts"
  
  #{if url != null}
  	url: "${url}", 
  #{/if}  
  #{else}  	   	
  	url: "@{list()}",
  #{/else}

});

var products = new Products();

var columns = [
               /*{
    name: "id", // The key of the model attribute
    label: "ID", // The name to display in the header
    editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
    // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
    cell: Backgrid.IntegerCell.extend({
      orderSeparator: ''
    })
  },
  {
    name: "description",
    label: "Description",
    cell: "string" 
  }, {
    name: "amount",
    label: "Amount",
    cell: "integer" 
  }*/
               
  #{list items:tableFields, as: 'field'}
  { 
		 name: "${field.name}", 
	     label: "&{field.name}",
	     #{if field.formatter !=null}
	     	formatter: "${field.formatter}",
	     #{/if} 
	     #{if field.readOnly}
		  	editable: ${false},
		 #{/if}
		 cell: ${field.cell}
   },
   #{/list}           
  
  ];

// Initialize a new Grid instance
var grid = new Backgrid.Grid({
  columns: columns,
  collection: products
});

$( document ).ready(function() {

// Render the grid and attach the root to your HTML document
$("#grid").append(grid.render().el);

// Fetch some countries from the url
products.fetch({reset: true});

});