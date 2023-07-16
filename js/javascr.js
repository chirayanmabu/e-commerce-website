//creating validation() function
function validation() 
{
	var name = document.forms["nice_form"]["name"].value; //gets the value of the name from the form "nice_form"
	var email = document.forms["nice_form"]["email"].value; //gets the value of the email from the form "nice_form"
	var gender = document.forms["nice_form"]["gender"].value; //gets the value of the gender from the form "nice_form"
	var message = document.forms["nice_form"]["message"].value; //gets the value of the message from the form "nice_form"
	
	if (name == "" || email == "" || message == "") 
	{
		alert("Please complete the form."); //if name, email and message are empty then alert the given message
	}
	else 
	{
		alert("Thank you for the feedback."); //Else, alert the given message.
	}
}

var count = 1; //set count value as 0
function addToCart()
{	
	var update_cart = document.getElementById("update_cart") //gets all elements having id as update_cart
	alert("Added to your cart!"); //alert the given message when using the add to cart button.
	update_cart.innerText = count ++; //change the value of update_cart
}


function addToWish()
{
	alert("Added to your wish list!"); //alert the given message when using the add to wishlist button
}