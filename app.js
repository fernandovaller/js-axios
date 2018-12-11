var API_URL = 'https://jsonplaceholder.typicode.com';


function getPage(page){
    if(page){
        axios.get(page)
        .then( (response) => {                    
            $('#pages').html(response.data);            
        });                
    }
}


// USERS **************************************************

function listUser () {
    axios.get(API_URL + '/users')
    .then( (response) => {                    
        tableUser(response.data, '#user');
        $('table').DataTable();
    });
    
}

function showUser (id) {  
    axios.get(API_URL + '/users/'+id)
    .then( (response) => {                    
        console.log(response.data);
        displayUser(response.data, '#modal .modal-body');
    });
}

function updateUser (param) {  }

function tableUser (data, tableDiv) {
    var table = $(tableDiv + ' tbody');
    $(data).each(function(index, value){
        var td = '<td>'+value.id+'</td>';
        td += '<td>'+value.name+'</td>';                            
        td += '<td>'+value.email+'</td>';                            
        td += '<td>'+value.phone+'</td>';
        td += '<td><a href="#modal" data-id="'+value.id+'" class="btn btn-primary btn-sm btn-user" data-toggle="modal">Ver</a></td>';
        table.append('<tr>'+ td +'</tr>');
    });
}

function displayUser (user, div) {
    var dados = '<p>ID: '+user.id+'</p>'; 
    dados += '<p>NAME:'+user.name+'</p>'; 
    dados += '<p>E-MAIL:'+user.email+'</p>'; 
    $(div).html(dados);        
}


// POSTS **************************************************

function listPosts () {
    axios.get(API_URL + '/posts')
    .then( (response) => {                    
        console.log(response);
        tablePosts(response.data, '#posts');
        $('table').DataTable();
    });
}

function showPost (id) {  
    axios.get(API_URL + '/posts/'+id)
    .then( (response) => {                    
        console.log(response);
        displayPost(response.data, '#modal .modal-body');
    });
}

function displayPost (data, div) {
    var dados = '<p>ID: '+data.id+'</p>'; 
    dados += '<p>TITLE:'+data.title+'</p>'; 
    dados += '<p>BODY:'+data.body+'</p>';
    $(div).html(dados);        
}


function tablePosts (data, tableDiv) {
    var table = $(tableDiv + ' tbody');
    $(data).each(function(index, value){
        var td = '<td>'+value.id+'</td>';
        td += '<td>'+value.userId+'</td>';
        td += '<td>'+value.title+'</td>';
        td += '<td><a href="#modal" data-id="'+value.id+'" class="btn btn-primary btn-sm btn-post" data-toggle="modal">Ver</a></td>';
        table.append('<tr>'+ td +'</tr>');
    });
}