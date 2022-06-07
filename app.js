const user_creat_form =document.getElementById('user_creat_form');
const msg =document.querySelector('.msg');
const Reset =document.getElementById('reset');


let name = document.getElementById('name');
let email = document.getElementById('email');
let cell = document.getElementById('cell');
let username = document.getElementById('username');
let name_req =document.querySelector('.name-req')
let email_req =document.querySelector('.email-req')
let cell_req =document.querySelector('.cell-req')
let username_req =document.querySelector('.username-req')







user_creat_form.addEventListener('submit',(even)=>{
even.preventDefault();

if(name.value == ''){
    name_req.innerHTML = `<span class ="text-danger">*Requird</span>`
}else{
    name_req.innerHTML = ``;
}

if(email.value == ''){
    email_req.innerHTML = `<span class ="text-danger">*Requird</span>`
}else{
    email_req.innerHTML = ``;
}

if(cell.value == ''){
    cell_req.innerHTML = `<span class ="text-danger">*Requird</span>`
}else{
    cell_req.innerHTML = ``;
}
if(username.value == ''){
    username_req.innerHTML = `<span class ="text-danger">*Requird</span>`
}else{
    username_req.innerHTML = ``;
}




if(name.value == ''|| email.value == '' || cell.value == '' || username.value == ''){
    msg.innerHTML = setAlert('All filds are requird','danger');
}else if(Valid_chech(email.value)== false){
    msg.innerHTML = setAlert('email not valid','danger');

}else if(valid_cell(cell.value) == false){
    msg.innerHTML = setAlert('Cell not valid','danger');

}else if(valid_username(username.value) == false){
    msg.innerHTML = setAlert('Username not valid','danger');
}else{
    msg.innerHTML = setAlert('Data stable','success');
}








})



Reset.onclick =()=>{
    name.value = "";
    email.value = "";
    cell.value = "";
    username.value = "";
    name_req.innerHTML = "";
    email_req.innerHTML = "";
    cell_req.innerHTML = "";
    username_req.innerHTML = "";
    msg.innerHTML 
}