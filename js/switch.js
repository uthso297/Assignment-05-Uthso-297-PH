const Homebutton = document.getElementById('home');
Homebutton.addEventListener('click', function() {
    console.log('clicked home');    
    window.location.href = '/index.html';

    // Add active button
    Homebutton.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        Homebutton.classList.remove('active');
    }

});

