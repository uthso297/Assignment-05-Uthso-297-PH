const button = document.getElementById('noakhali-donate-btn');

button.addEventListener('click', function () {

    // calculation
    const donateAmount = getInputFieldValueById('noakhali-input-amount');
    let finalBalance = getTextFieldValueById('final-balance');

    if (donateAmount > finalBalance) {
        alert('Do not have sufficient balance');
        document.getElementById('noakhali-input-amount').value = '';
        return;
    } else {
        if (isNaN(donateAmount)) {
            alert('Please provide amount in number.');
        } else if (donateAmount < 0) {
            alert('Please provide positive amount. Negative amount cannot be accepted.');
        } else {
            document.getElementById('noakhali-input-amount').value = '';
            let preAmount = getTextFieldValueById('noakhali-pre-amount');
            preAmount += donateAmount;
            document.getElementById('noakhali-pre-amount').innerText = preAmount;
            calculateFinal(donateAmount);

            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const currentTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            const div = document.createElement('div');
            div.classList.add('mx-auto', 'border-2', 'rounded-lg', 'text-center', 'py-4', 'my-4');
            div.innerHTML = `
                <p>${donateAmount} Taka is Donated for Flood Relief at Noakhali, Bangladesh</p>
                <p>Donation Time: ${currentTime}</p>
            `;
            document.getElementById('transaction-part').appendChild(div);

            showModalById('modal');
            document.getElementById('modal-btn').addEventListener('click', function () {
                document.getElementById('modal').classList.add('hidden');
                document.getElementById('body').classList.remove('opacity-80');
            });
        }
    }

    // Add active button
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


            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const currentTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            const div = document.createElement('div');
            div.classList.add('mx-auto', 'border-2', 'rounded-lg', 'text-center', 'py-4', 'my-4');
            div.innerHTML = `
                <p>${donateAmount} Taka is Donated for Flood Relief at Feni, Bangladesh</p>
                <p>Donation Time: ${currentTime}</p>
            `;
            document.getElementById('transaction-part').appendChild(div);



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



            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const currentTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            const div = document.createElement('div');
            div.classList.add('mx-auto', 'border-2', 'rounded-lg', 'text-center', 'py-4', 'my-4');
            div.innerHTML = `
                <p>${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
                <p>Donation Time: ${currentTime}</p>
            `;
            document.getElementById('transaction-part').appendChild(div);




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



