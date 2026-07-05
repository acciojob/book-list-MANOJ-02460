//your JS code here. If required.

const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const isbnElement = document.getElementById("isbn");
const buttonElement=document.getElementById("submit");
const tableElement = document.getElementById("book-list");


buttonElement.addEventListener("click",function(e){

	e.preventDefault()
	
	let row = document.createElement("tr");
	let newCell1 = document.createElement("td");
	let newCell2 = document.createElement("td");
	let newCell3 = document.createElement("td");
	let deleteCell = document.createElement("td");
	let deleteBtn = document.createElement("button");
	
	
	newCell1.textContent = titleElement.value;
	newCell2.textContent = authorElement.value;
	newCell3.textContent = isbnElement.value;

	deleteBtn.textContent = "X";
	deleteBtn.classList.add("delete")
	

	row.appendChild(newCell1);
	row.appendChild(newCell2);
	row.appendChild(newCell3);
	row.appendChild(deleteCell);
	deleteCell.appendChild(deleteBtn)
	tableElement.appendChild(row);


	deleteBtn.addEventListener("click",function(){
		row.remove();
	})

})
