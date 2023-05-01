var selectedRow = null;

//deleted function
function deleted(element) {
  selectedRow = element.parentElement.parentElement;
  let formName = document.querySelector("#name")
  let formAge = document.querySelector("#age")
  let formEmail = document.querySelector("#email")
  
  formName.value = "";
  formAge.value = "";
  formEmail.value = "";
  selectedRow.remove();
  alert("data di hapus")
}

//function edit
function edit(element) {
  selectedRow = element.parentElement.parentElement;
  let formName = document.querySelector("#name")
  let formAge = document.querySelector("#age")
  let formEmail = document.querySelector("#email")
  
  formName.value = selectedRow.cells[0].innerHTML;
  formAge.value = selectedRow.cells[1].innerHTML;
  formEmail.value = selectedRow.cells[2].innerHTML;
  document.querySelector("#submit").value = "edit"
}

//function add data
function add() {
  let formName = document.querySelector("#name")
  let formAge = document.querySelector("#age")
  let formEmail = document.querySelector("#email")
  if(selectedRow) {
    selectedRow.cells[0].innerHTML = formName.value
    selectedRow.cells[1].innerHTML = formAge.value
    selectedRow.cells[2].innerHTML = formEmail.value
    
    formName.value = "";
    formAge.value = "";
    formEmail.value = "";
    selectedRow = null
    document.querySelector("#submit").value = "submit"
    return
  }
  if(!formName.value || !formAge.value || !formEmail.value) {
    alert("tolong lengkapi data")
    return
  }
  let table = document.querySelector("#list")
  let newRow = table.insertRow(table.length)
  
  let cell1 = newRow.insertCell(0)
  cell1.innerHTML = formName.value;
  let cell2 = newRow.insertCell(1)
  cell2.innerHTML = formAge.value;
  let cell3 = newRow.insertCell(2)
  cell3.innerHTML = formEmail.value;
  let cell4 = newRow.insertCell(3)
  cell4.innerHTML = `<a class="btn btn-warning m-1" href="#" onclick="edit(this)">edit</a><a class="btn btn-danger m-1" href="#" onclick="deleted(this)">delete</a>`;
  formName.value = "";
  formAge.value = "";
  formEmail.value = "";
}