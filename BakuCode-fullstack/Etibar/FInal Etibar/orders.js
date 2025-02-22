let ordersString = localStorage.getItem("computershopping-orders");

let orders = []

let currentSeller = localStorage.getItem("computershopping-currentSeller");

if(ordersString != null){
orders = JSON.parse(ordersString)
}


function loadOrders(){

let ordersTableContent = document.getElementById("orders-table-content")

ordersTableContent.innerHTML = "";

for(let i = 0; i < orders.length;i++){

let order = orders[i]

let customer = order.customer;

let details = order.details;

let tr = document.createElement("tr");

let idTd = document.createElement("td");

let customerTd = document.createElement("td");

let detailsTd = document.createElement("td");

let totalPriceTd = document.createElement("td");

let notesTd = document.createElement("td")

let customerUl =  document.createElement("ul");


let nameLi = document.createElement("li");

let surnameLi = document.createElement("li");

let phoneNumberLi = document.createElement("li");

let addressLi = document.createElement("li");



nameLi.innerText = "Ad:" + customer.name;
surnameLi.innerText = "Soyad:" + customer.surname;
phoneNumberLi.innerText = "Telefon nomresi:" + customer.phoneNumber;
addressLi.innerText = "Unvan:" + customer.address;

let detailUl = document.createElement("ul");
 for(let i = 0; i < details.length;i++){

    let computer =details.computer;

let computerLi = document.createElement("li");    


computerLi.innerHTML = `Masinin adi: ${computer.category + " " + computer.name }`

detailUl.appendChild(computerLi)

 }


customerUl.appendChild(nameLi);
customerUl.appendChild(surnameLi);
customerUl.appendChild(phoneNumberLi);
customerUl.appendChild(addressLi);
customerUl.appendChild(notesLi);


customerTd.appendChild(customerUl);




detailsTd  

tr.appendChild(idTd);
tr.appendChild(customerTd);
tr.appendChild(detailsTd);
tr.appendChild(totalPriceTd);
tr.appendChild(notesTd );

ordersTableContent.appendChild(tr);


}




}



loadOrders();