function checkCreds(){
    console.log("checkCreds() Started");
    //create variables
    var firstname;
    var lastname;
    var fullname;
    var badgeNum;
    var fnameLength;

    //inject form Data
    firstname = document.getElementById("Fname").value;
    console.log(firstname); 
    lastname = document.getElementById("Lname").value;
    console.log(lastname);
    fullname = firstname + " " + lastname;
    console.log(fullname);

    badgeNum = document.getElementById("BadgeID").value;
    console.log("Badge number = " + badgeNum);
    //check name length
    //check name length and badgeNum lenght and fo to UATSpace if everything is Correct
    fnameLength = fullname.length;
    console.log(fnameLength);
    if(fnameLength > 20){
        document.getElementById("loginStatus").innerHTML = 
        "Full name is incorrect, please resubmit";
    } else if (badgeNum > 999 || badgeNum < 1){
        //check badge ID number
        document.getElementById("loginStatus").innerHTML = 
        "Badge Number is incorrect, please resubmit";
    } else {
        //if correct, move on to uatspace
        alert("Credential Submission succesful, welcome " + fullname);
        location.replace("./UATSpace.html");
    }

}