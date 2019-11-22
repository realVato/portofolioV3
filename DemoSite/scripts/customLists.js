// Custom List

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response) {
    return response.json()
})
.then(function(data) {

    // Random object
    var item1 = data[Math.floor(Math.random() * data.length)];
    var item2 = data[Math.floor(Math.random() * data.length)];
    var item3 = data[Math.floor(Math.random() * data.length)];
    var item4 = data[Math.floor(Math.random() * data.length)];

    output = '<li>' + item1.title + '</li>'
            + '<hr>' + 
            '<li>' + item2.title + '</li>' 
            + '<hr>' +
            '<li>' + item3.title + '</li>'
            + '<hr>' +
            '<li>' + item4.title + '</li>';

    document.querySelector('.list-items').innerHTML = output;
});