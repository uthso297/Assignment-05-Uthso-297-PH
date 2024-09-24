const Homebutton = document.getElementById('home');
Homebutton.addEventListener('click', function() {

    // Add active button
    Homebutton.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        Homebutton.classList.remove('active');
    }

});

