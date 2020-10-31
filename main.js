var page = 1;

document.getElementById('pressBtn').onclick = () => {
    location.href = "https://static1.squarespace.com/static/50363cf324ac8e905e7df861/t/5ed23bd3bdbbdb299cb6aa9f/1590836452410/2020+Benedict+Evans+Shoulders+of+Giants.pdf";
};

document.getElementById('subBtn').onclick = () => {
    location.href = "newsletter.html";
};

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
