var page = 1;

$(document).ready(function(){
    
    $('#next').click(function() {
        $('#' + page).hide();
        page = page +1;
        $('#' + page).show();
    })
});

$('#previous').click(function() {
    $('#' + page).hide();
    page = page - 1;
    $('#' + page).show();
});


document.getElementById('pressBtn').onclick = () => {
    location.href = "presentations.html";
};

document.getElementById('subBtn').onclick = () => {
    location.href = "newsletter.html";
};


const hamburger = document.getElementById('burgerbtn');
const navList = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
})