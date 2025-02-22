let ordersString = localStorage.getItem("computershopping-orders");
let basketString = localStorage.getItem("computershopping-baskets");



let orders = []
let basket = []


if(ordersString != null){


    orders = JSON.parse(ordersString);


}




if(basketString != null){

    
    basket = JSON.parse(basketString);


}else{
    alert("Melumatlar duzgun deyil")
}


function createOrder(){


    let customer = {}; 

let name = document.getElementById("name");
let surname = document.getElementById("surname");
let phone = document.getElementById("phone-number");
let address = document.getElementById("address");
let notes = document.getElementById("notes");


customer.name = name;
customer.surname = surname;
customer.phoneNumber = phoneNumber;
customer.adress = address;
customer.notes = notes;

console.log(customer);

let order = {};

order.customer = customer;

order.details = basket;

order.push(order);

localStorage.setItem("computershopping-orders",JSON.stringify(orders));


document.getElementById("order-comfirm-message").style.display = "block";

setTimeout(()=>{

window.location.href = "index.html";

localStorage.removeItem("computershopping-basket");

},1000)



}




