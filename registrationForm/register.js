function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    var registernumber = document.forms['myForm']["fregister number"].value;
    if (registernumber.length == 0){
        seterror("register number", "*register number cannot be zero!");
        returnval = false;
    }
    var gender = document.forms['myForm']["fgender"].value;
    if(gender.male == 0){
        seterror("gender","*gender detail cannot be empty");
        returnval = false;
    }
    if(gender.female == 0){
        seterror("gender","*gender detail cannot be empty");
        returnval = false;
    }
    if(gender.others == 0){
        seterror("gender","*gender detail cannot be empty");
        returnval = false;
    }
    if (address.length == 0){
        seterror("address", "*Length of address cannot be zero!");
        returnval = false;
    }
    if (nationality.length == 0){
        seterror("address", "*Length of nationality cannot be zero!");
        returnval = false;
    }
    if (state.length == 0){
        seterror("state", "*Length of state cannot be zero!");
        returnval = false;
    }
    if (district.length == 0){
        seterror("address", "*Length of district cannot be zero!");
        returnval = false;
    }

    if (collegeName.length == 0){
        seterror("address", "*Length of college name cannot be zero!");
        returnval = false;
    }

    if (university.length == 0){
        seterror("address", "*Length of university name cannot be zero!");
        returnval = false;
    }

    if (qualification.length == 0){
        seterror("address", "*Length of qualification cannot be zero!");
        returnval = false;
    }





    return returnval;
}