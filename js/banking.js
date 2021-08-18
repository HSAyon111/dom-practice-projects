function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const InputFieldText = inputField.value;
    const newInputValue = parseFloat(InputFieldText);
    inputField.value = '';
    return newInputValue;
}
function updateAmount(amountId, newInputValue) {
    const amountField = document.getElementById(amountId);
    const amountFieldText = amountField.innerText;
    const previousAmount = parseFloat(amountFieldText);
    amountField.innerText = previousAmount + newInputValue;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceTotalText);
    return currentBalance;
}
function updateBalanceTotal(newInputValue, isAdd) {
    const balanceTotal = document.getElementById('balance-amount');
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalance + newInputValue;
    }
    else {
        balanceTotal.innerText = previousBalance - newInputValue;
    }
}

// add event handler on deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDeposit = getInputValue('deposit-input');
    if (newDeposit > 0) {
        updateAmount('deposit-amount', newDeposit);
        updateBalanceTotal(newDeposit, true);
    }
});

// add event handler on withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdraw = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdraw > 0 && newWithdraw <= currentBalance) {
        updateAmount('withdraw-amount', newWithdraw);
        updateBalanceTotal(newWithdraw, false);
    }
});