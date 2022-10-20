function get_token () {
    let authToken = localStorage.getItem('token');
    if (authToken == '123 - 123') {
        window.open('../auth_page/index.html');
        console.log(authToken);
    }
    
}

get_token();