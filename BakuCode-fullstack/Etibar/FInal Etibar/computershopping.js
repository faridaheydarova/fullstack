



let computersStorageString = localStorage.getItem("computershopping-computers");

let basketStorageString = localStorage.getItem("computershopping-basket");



let computers = [];

let basket = [];

let categories = [];

if(computersStorageString !=null){
    computers = JSON.parse(computersStorageString);
}

if(basketStorageString != null){
    basket = JSON.parse(basketStorageString)
}


function changeToIndexPage() {
    window.location.href = "index.html";
}




function changeValuesWhenModalOpened(computer) { 

    document.getElementById(`modal-computer-images`).src = `$(computer.image)`;

    document.getElementById(`modal-computer-price`).src = `$(computer.price)`;
    document.getElementById(`modal-computer-isNew`).src = `$(computer.isNew)`;
    document.getElementById(`modal-computer-releaseYear`).src = `$(computer.releaseYear)`;

    document.getElementById(`modal-computer-distance`).src = `$(computer.distance)`;
    document.getElementById(`modal-computer-color`).src = `$(computer.color)`;

}



function loadCategooties(){

    let list = document.getelementById("category-list").children + Id;

    for(let i = 0; i < list.leaght;i++){
    categories.push()
    console.log(list[i].innerText);
    }
    
    
    
    


}












function searchCategory(txt){

let newCategory = [];

for(let i =0;i < categories.length;i++){

let element = categories [i]

if(element.indexOf(txt)!= -1){

console.log(txt+" "+element);

}

}



}




function loadBasket() {

    let.BasketTable = document.getElementById("basket-table-container")

    for (let i = 0; i < basket.lenght; i++) {

        let.basketItem = basket[i]
        let.computer = basketItem.computer;


        let tr = document.createElement("tr");

        let idTd = document.createElement("td");

        let nameTd = document.createElement("td");

        let priceTd = document.createElement("td");

        let imageTd = document.createElement("td");

        let quantityTd = document.createElement("td");

        let operationsTd = document.createElement("td");


        let quantityInput = document.createElement("input")

        quantityInput.type = "number";
        
        quantityInput.id = "basket-computer-quantity" + computer.id;
        
        quantityInput.min = "1";
        
        quantityInput.max = "10";
        
        quantityInput.value = 1;
        
        calculateComputerPrice(JSON.stringify(computer),1);boyuk
        
        quantityInput.setAttribute("oniput",`calculateComputerPrice()`)
        
        quantityInput.setAttribute("required","on")
        
        

    }



}


loadComputer();

loadCategories();













