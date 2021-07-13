user1 = new User(" Ram"," 123"," password"); //creating object instance
object2 = new User(" Laxman"," 111"," password"); //creating object instance
user1.showUser(); //calling object's function
object2.showUser();


function User(fname, uname, pwd)  //this is a class
{
    this.firstname = fname;
    this.username = uname;
    this.password = pwd;


    this.showUser = function(){
        document.write("Firstname: "+ this.firstname + "<br/>");
        document.write("Username: "+ this.username + "<br/>");
        document.write("Password: "+ this.password + "<br/>");
    }
}