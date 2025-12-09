var debitAmount = $v('P813_DEBIT_AMOUNT');
var creditAmount = $v('P813_CREDIT_AMOUNT');

if (Number(debitAmount) !== Number(creditAmount)) {
    apex.message.alert("The Debit and Credit amounts will be equal then the user can enter data into the table.");
    return false; 
}
