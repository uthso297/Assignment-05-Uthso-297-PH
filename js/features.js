const donationBtn = document.getElementById('donation-btn')
donationBtn.addEventListener('click', function () {
    showSectionById('donation-part');
    document.getElementById('footer').classList.remove('hidden');
    transactionBtn.classList.remove('bg-[#B4F461]');
    donationBtn.classList.add('bg-[#B4F461]');
    transactionBtn.classList.add('bg-white');
    donationBtn.classList.remove('bg-white');




    // added active button
    donationBtn.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        donationBtn.classList.remove('active');
    }

});


const transactionBtn = document.getElementById('transaction-btn')
transactionBtn.addEventListener('click', function () {
    showSectionById('transaction-part');
    document.getElementById('footer').classList.add('hidden');
    transactionBtn.classList.remove('bg-white');
    transactionBtn.classList.add('bg-[#B4F461]');
    donationBtn.classList.remove('bg-[#B4F461]')
    donationBtn.classList.add('bg-white');


    // added active button
    transactionBtn.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        transactionBtn.classList.remove('active');
    }

});