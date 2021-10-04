function valid()
{
    var uname = document.getElementById("uname");
    var password = document.getElementById("pass");
    var email = document.getElementById("email");
    let confirm = document.getElementById("confirm");
    var reg = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+).([a-z]{2,10})$/;
    if(uname.value.trim()=="" || password.value.trim()=="" ||email.value.trim()=="" || confirm.value.trim()=="")
    {  
        uname.style.border = "solid 3px red";
        document.getElementById("lbluser").style.visibility = "visible";
         
            email.style.border = "solid 3px red";
            document.getElementById("lbl").style.visibility = "visible";}
        pass.style.border = "solid 3px red";
        document.getElementById("lbuser").style.visibility = "visible";
        
        confirm.style.border = "solid 3px red";
        document.getElementById("lbuse").style.visibility = "visible";
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
    else if(email.value!=null)
    {  if(reg.test(email.value))
        {
      
        return true;
        }
        else{
            document.getElementById("log").innerHTML = "invalid";
            document.getElementById("log").style.visibility = "visible";
            return false;
        }


    }
   
    else
    {
        return true;
    }
}