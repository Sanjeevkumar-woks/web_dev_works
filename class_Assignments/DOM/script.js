let container=document.getElementById("main");
let div_container= document.createElement("div");
div_container.innerHTML=`
<h1 id="title>FILL <i class="far fa-smile-beam"></i> FORM</h1>
    <div class="main-container col-row">
  <div class="container col p-5" >
        <label for="firstname"  class="m-2">Firstname: </label>
        <input type="text" id="firstname" class="clear">
        <label for="lastname"  class="m-2">Lastname: </label>
        <input type="text"id="lastname" class="clear" > <br>
        <label for="address"  class="m-2">Address: </label>
        <input type="text" id="address" class="ml-2 clear">
        <label for="pincode"  class="m-2">Pincode: </label>
        <input type="text" id="pincode" class="ml-3 clear"> <br>
        <label for="state"  class="m-2">State: </label>
        <input type="text" id="state" class="clear">
        <label for="country"  class="m-2">Country: </label>
        <input type="text"id="country" class="clear" > <br>
        <label for="gender" class="m-2">Gender: </label>
        <label for="Mail" class="m-2">Mail: </label><input type="radio" class="m-2 clear" value="Mail" id="mail" name="gender">
        <label for="Femail" class="m-2">Femail: </label><input type="radio" class=" m-2 clear" value="Femail" id="femail" name="gender"><br>
        <label for="Food-choice" class="m-2">Food-Choice:</label>
        <label for="Cake" class="m-2">Cake: </label><input type="radio" class="m-2" id="cake">
        <label for="icecream" class="m-2">IceCream: </label><input type="radio" class="m-2" id="icecream">
        <label for="Cool-Drinks" class="m-2">Cool-Drinks: </label><input type="radio" class="m-2" id="cooldrink">
        <label for="Choclate" class="m-2">Choclate: </label><input type="radio" class="m-2" id="choclate">
        <label for="Biscutes" class="m-2">Biscutes: </label><input type="radio" class="m-2" id="biscute"><br>
        <button class="btn btn-lg btn-warning m-2" onclick="add_details()"><b> SUBMIT </b> </button>
        <p> <span>*</span> Mandatory to fill all fields before submittion</p>
    </div>
    <div class="table-container col p-5" id="details-table">
        <table id="myTable" class="Display-table" cellpadding="5" border="3">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>State</th>
              <th>Country</th>
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
    //Targeting elements
    var table = document.getElementById("myTable");
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var address=document.getElementById("address").value;
    var pincode=document.getElementById("pincode").value;
    var state=document.getElementById("state").value;
    var country=document.getElementById("country").value;
    var gender="gender"
    var foodchoice=[];

     // Checking Radio Choicess
 if(document.getElementById("mail").checked){
    gender="Mail"
    document.getElementById("mail").checked=false;
}
if(document.getElementById("femail").checked){
    gender="Femail"
    document.getElementById("femail").checked=false;
}
if(document.getElementById("cake").checked){
    foodchoice.push("Cake")
    document.getElementById("cake").checked=false;
}
if(document.getElementById("icecream").checked){
    foodchoice.push("Ice-Cream")
    document.getElementById("icecream").checked=false;
}
if(document.getElementById("cooldrink").checked){
    foodchoice.push("Cool-Drinks")
    document.getElementById("cooldrink").checked=false;
}
if(document.getElementById("choclate").checked){
    foodchoice.push("Choclate")
    document.getElementById("choclate").checked=false;
}
if(document.getElementById("biscute").checked){
    foodchoice.push("Biscute")
    document.getElementById("biscute").checked=false;
}
   
    // Checking all fields are filled or not
    if(firstname&& lastname && address && pincode && state && country &&(gender!=="gender")&& foodchoice[0]){
    // Inserting Rows and collumns
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
// Assigning Data to the collumns
    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML=address;
    cell4.innerHTML=pincode;
    cell5.innerHTML=state;
    cell6.innerHTML=country;
    cell7.innerHTML=gender;
    cell8.innerHTML=foodchoice;
    var cl=document.getElementsByClassName("clear");
    // Clearing all the input fields values
    for(let i=0; i<cl.length;i++){
        cl[i].value="";
    }

    }
    else{
        //alert to fill all the fields
        alert("Plese fill all the fiels")
    }
  }
 