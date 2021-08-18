function valid()
{
    var uname = document.getElementById("uname");
    var password = document.getElementById("pass");
    var email = document.getElementById("email");
    let confirm = document.getElementById("confirm");

    if(uname.value.trim()=="" )
    {
        uname.style.border = "solid 3px red";
        document.getElementById("lbluser").style.visibility = "visible";
        return false;

    }
    else if(email.value.trim()=="")
    {    email.style.border = "solid 3px red";
        document.getElementById("lbl").style.visibility = "visible";
        return false;
    }
    else if(password.value.trim()=="")
    {   pass.style.border = "solid 3px red";
        password.style.border = "solid 3px red";
        document.getElementById("lbuser").style.visibility = "visible";
        return false;

    }
    else if(password.value.trim().length<6)
    {
        alert("password to short");
        return false;
    }
    else if(password.value != confirm.value)
    {   confirm.style.border = "solid 3px red";
        document.getElementById("lbuse").style.visibility = "visible";
        return false;
    }
   
    else
    {
        return true;
    }
}