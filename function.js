

const setAlert=(msg,type="danger")=>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"button> </p>`
}


const Valid_chech = (email)=>{
    let pattern = /^[a-zA-Z0-9\._]{1,}@[a-z]{1,}\.[a-z]{1,4}$/;
    return pattern.test(email);
}


const valid_cell = (cell)=>{
    let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(cell);
}


const valid_username = (username)=>{
    let pattern = /^[a-zA-Z0-9@\.]{1,}$/;
    return pattern.test(username);
}
