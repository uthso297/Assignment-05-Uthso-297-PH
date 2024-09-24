const Blogbutton=document.getElementById('blog');
Blogbutton.addEventListener('click', function() {
    console.log('clicked blog');
    window.location.href ='/blog.html';

    // Add active button
    Blogbutton.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        Blogbutton.classList.remove('active');
    }

});