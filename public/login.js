const url='http://16.171.168.52:3000'

function check(event){
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    const obj={email,password};

    const gurl=url+'/user/login';
    // alert('i am js')
   
    axios.post(gurl,obj)
        .then(res=>{
            
            localStorage.clear()
            localStorage.setItem('token',res.data.token);
            const form=document.getElementById('form');
            form.action='./frontchat.html'
            form.method='get'
            alert(res.data.message)          
            form.submit()
        }).catch(err=>{
            console.log(err)
            alert(`"something went wrong",${err.message}`)
        })

}