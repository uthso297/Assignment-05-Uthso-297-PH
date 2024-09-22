function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
};

function getTextFieldValueById(id) {

    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;

};


function showModalById(id) {
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('body').classList.add('opacity-80');
};


let finalBalance = getTextFieldValueById('final-balance');
function calculateFinal(e) {
    finalBalance = finalBalance - e;

    document.getElementById('final-balance').innerText = finalBalance;
}