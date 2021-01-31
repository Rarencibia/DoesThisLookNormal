$('#formData').on('submit', (e) => {


e.preventDefault();

const userName = $('#userName').val().trim();
const email = $('#userEmail').val().trim();
const item = $('#userItem').val().trim();
const msg = $('#userMsg').val().trim();

const data = {
    email,
    userName,
    item,
    msg
};

$.post('/email', data, function(data, status){

    


    // console.log("email:");
    // console.log("data: " + data);
    // console.log("status: " + status);
    // console.log("Email Sent!");
}).fail(function(response) {
    console.log('(custom)Error: ' + response.responseText);
    alert('(custom)Error: ' + response.responseText);
});

})
