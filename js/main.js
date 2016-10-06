var i=1;
function counter(){
  //  debugger;
    i++;
}
function addNewItem() {
    var text = i + '. ' + document.getElementById('date').value + ' - ' + document.getElementById('mydo').value,
        list = document.createElement('li'),
        listText = document.createTextNode(text);
        list.appendChild(listText);
        document.getElementById("routine-list").appendChild(list);
}


