function addQuestions() {


    var username = document.getElementById("name").value;
    var usersQuestion = document.getElementById("question").value;

    if (username === ""){
        alert("username is required");
    }
    else if (usersQuestion === ""){
        alert("type the question first");
    }
    else {
        document.getElementById("usernameQuestion").innerHTML += "<h4 id='user'>" + username + ": </h4>" + usersQuestion + "</br><hr>";
    }
}