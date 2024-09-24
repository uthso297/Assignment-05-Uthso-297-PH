const Blogbutton=document.getElementById('blog');
Blogbutton.addEventListener('click', function() {

    // Add active button
    Blogbutton.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        Blogbutton.classList.remove('active');
    }

});