const login = document.getElementById("login-Form");
const register = document.getElementById("register-Form");
const post_ = document.getElementById("post-Form")

if(login) login.addEventListener('submit',loginFunc)
if(register) register.addEventListener('submit',regFunc)
if(post_) post_.addEventListener('submit',postFunc)

class User {
    constructor(uname, pword, fname, lname, email){
        this.username = uname;
        this.password = pword;
        this.firstName = fname;
        this.lastName = lname;
        this.emailid = email;
    }

    getusername(){
        return `${this.username}`
    }

    getpassword(){
        return `${this.username}`
    }

    getfirstname(){
        return `${this.username}`
    }

    getlastname(){
        return `${this.username}`
    }

    getemail(){
        return `${this.username}`
    }
}

class post{
    constructor(posts){
        this.posts=posts;
    }
    getnotes(){
        return `${this.posts}`
    }
    
}

function loginFunc(e){
    e.preventDefault();
    let uname=document.getElementById('userName').value;
    let pword=document.getElementById('passWord').value;

    let User1 = new User(uname, pword);
    console.log(User1);

    document.getElementById("login-Form").reset();
}

function regFunc(e){
    e.preventDefault();
    let uname=document.getElementById('userName').value;
    let pword=document.getElementById('passWord').value;
    let fname=document.getElementById('firstName').value;
    let lname=document.getElementById('lastName').value;
    let email=document.getElementById('eMail').value;

    let User1 = new User(uname, pword, fname, lname, email);
    console.log(User1);

    document.getElementById("register-Form").reset();
}

function postFunc(e){
    e.preventDefault();
    let posts=document.getElementById('takepost').value;

    let Post1 = new post(posts);
    console.log(Post1);

    document.getElementById("post-Form").reset();
}





