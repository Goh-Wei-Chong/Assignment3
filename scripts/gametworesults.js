window.onload = function () {
    var points = localStorage.getItem('points');
    console.log(points);
    var total = localStorage.getItem('total');
    console.log(total);
    $('h1').append(`${points}/${total}`);
}