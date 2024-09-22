const button = document.getElementById('noakhali-donate-btn');

button.addEventListener('click', function () {

    // calculation

    const donateAmount = getInputFieldValueById('noakhali-input-amount');
    let finalBalance = getTextFieldValueById('final-balance');

    if (donateAmount > finalBalance) {
        alert('Do not have sufficient balance');
        document.getElementById('noakhali-input-amount').value = '';
        return;
    }
    else {
        if (isNaN(donateAmount)) {
            alert('Please provide amount in number.');
        }
        else if (donateAmount < 0) {
            alert('Please provide positive amount.Negative amount can not be accepted.')
        }
        else {
            document.getElementById('noakhali-input-amount').value = '';
            let preAmount = getTextFieldValueById('noakhali-pre-amount');
            preAmount = preAmount + donateAmount;
            document.getElementById('noakhali-pre-amount').innerText = preAmount;
            calculateFinal(donateAmount);
            showModalById('modal');
            document.getElementById('modal-btn').addEventListener('click', function () {
                document.getElementById('modal').classList.add('hidden');
                document.getElementById('body').classList.remove('opacity-80');
            });
        }
    }

    // added active button
    button.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        button.classList.remove('active');
    }
});

// feni


const button1 = document.getElementById('feni-donate-btn');

button1.addEventListener('click', function () {

    // calculation

    const donateAmount = getInputFieldValueById('feni-input-amount');
    let finalBalance = getTextFieldValueById('final-balance');

    if (donateAmount > finalBalance) {
        alert('Do not have sufficient balance');
        document.getElementById('feni-input-amount').value = '';
        return;
    }
    else {
        if (isNaN(donateAmount)) {
            alert('Please provide amount in number.');
        }
        else if (donateAmount < 0) {
            alert('Please provide positive amount.Negative amount can not be accepted.')
        }
        else {
            document.getElementById('feni-input-amount').value = '';
            let preAmount = getTextFieldValueById('feni-pre-amount');
            preAmount = preAmount + donateAmount;
            document.getElementById('feni-pre-amount').innerText = preAmount;
            calculateFinal(donateAmount);
            showModalById('modal');
            document.getElementById('modal-btn').addEventListener('click', function () {
                document.getElementById('modal').classList.add('hidden');
                document.getElementById('body').classList.remove('opacity-80');
            });
        }
    }

    // added active button
    button1.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        button1.classList.remove('active');
    }
});


// quota

const button2 = document.getElementById('quota-donate-btn');

button2.addEventListener('click', function () {

    // calculation

    const donateAmount = getInputFieldValueById('quota-input-amount');
    let finalBalance = getTextFieldValueById('final-balance');

    if (donateAmount > finalBalance) {
        alert('Do not have sufficient balance');
        document.getElementById('quota-input-amount').value = '';
        return;
    }
    else {
        if (isNaN(donateAmount)) {
            alert('Please provide amount in number.');
        }
        else if (donateAmount < 0) {
            alert('Please provide positive amount.Negative amount can not be accepted.')
        }
        else {
            document.getElementById('quota-input-amount').value = '';
            let preAmount = getTextFieldValueById('quota-pre-amount');
            preAmount = preAmount + donateAmount;
            document.getElementById('quota-pre-amount').innerText = preAmount;
            calculateFinal(donateAmount);
            showModalById('modal');
            document.getElementById('modal-btn').addEventListener('click', function () {
                document.getElementById('modal').classList.add('hidden');
                document.getElementById('body').classList.remove('opacity-80');
            });
        }
    }

    // added active button
    button2.classList.add('active');

    setTimeout(removeActiveClass, 200);

    function removeActiveClass() {
        button2.classList.remove('active');
    }
});



