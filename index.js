// function godown() {
//     document.getElementById("down").scrollIntoView(); // JUMP TO DIV "DOWN".
// }

function mainSearch() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll('.glossary-main .glossary-item .glossary-title');
    fullitem = document.querySelectorAll('.glossary-main .glossary-item');
    // console.log(ul)

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < ul.length; i++) {
        a = ul[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            fullitem[i].style.display = "";
        } else {
            fullitem[i].style.display = "none";
        }
    }
}


const term_data = data
const source = document.getElementById('glossary-template').innerHTML;
const template = Handlebars.compile(source);
const html = template(term_data);
document.querySelector('.glossary-main').innerHTML =  html