let container=document.getElementById("main");
let div_container= document.createElement("div");
div_container.innerHTML=`
<h1>FILL <i class="far fa-smile-beam"></i> FORM</h1>
    <div class="main-container col-row">
  <div class="container col p-5" >
        <label for="firstname"  class="m-2">Firstname: </label>
        <input type="text" id="firstname">
        <label for="lastname"  class="m-2">Lastname: </label>
        <input type="text"id="lastname" > <br>
        <label for="address"  class="m-2">Address: </label>
        <input type="text" id="address" class="ml-2">
        <label for="pincode"  class="m-2">Pincode: </label>
        <input type="text" id="pincode" class="ml-3"> <br>
        <label for="gender" class="m-2">Gender: </label>
        <label for="Mail" class="m-2">Mail: </label><input type="radio" class="m-2" value="Mail" id="mail" name="gender">
        <label for="Femail" class="m-2">Femail: </label><input type="radio" class=" m-2" value="Femail" id="femail" name="gender"><br>
        <label for="Food-choice" class="m-2">Food-Choice:</label>
        <label for="Cake" class="m-2">Cake: </label><input type="radio" class="m-2" id="cake">
        <label for="icecream" class="m-2">IceCream: </label><input type="radio" class="m-2" id="icecream">
        <label for="Cool-Drinks" class="m-2">Cool-Drinks: </label><input type="radio" class="m-2" id="cooldrink">
        <label for="Choclate" class="m-2">Choclate: </label><input type="radio" class="m-2" id="choclate">
        <label for="Biscutes" class="m-2">Biscutes: </label><input type="radio" class="m-2" id="biscute"><br>
        <button class="btn btn-lg btn-warning m-2" onclick="add_details()"><b> SUBMIT </b> </button>
    </div>
    <div class="table-container col p-5" id="details-table">
        <table id="myTable" class="Display-table" cellpadding="5" border="3">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>Gender</th>
              <th>Food-Choices</th>
            </tr>
        </table>
    </div>
    <div class="col" id="result"></div>
</div>
`;
container.append(div_container);

function add_details() {
    var table = document.getElementById("myTable");
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var address=document.getElementById("address").value;
    var pincode=document.getElementById("pincode").value;
    var gender="gender"
    var foodchoice=[];
    if(document.getElementById("mail").checked){
        gender="Mail"
    }
    if(document.getElementById("femail").checked){
        gender="Femail"
    }
    if(document.getElementById("cake").checked){
        foodchoice.push("Cake")
    }
    if(document.getElementById("icecream").checked){
        foodchoice.push("Ice-Cream")
    }
    if(document.getElementById("cooldrink").checked){
        foodchoice.push("Cool-Drinks")
    }
    if(document.getElementById("choclate").checked){
        foodchoice.push("Choclate")
    }
    if(document.getElementById("biscute").checked){
        foodchoice.push("Biscute")
    }
    
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML=address;
    cell4.innerHTML=pincode;
    cell5.innerHTML=gender;
    cell6.innerHTML=foodchoice;

  }
 