function PhoneBill() {

    let theCallTotal = 0;
    let theSmsTotal = 0;
    
    function makeCall(){
        theCallTotal += 2.75;
    }

    function sendSms(){
        theSmsTotal += 0.75;
    }

    function callTotal(){
        return theCallTotal;
    }

    function smsTotal(){
        return theSmsTotal;
    }

    function grandTotal(){

        return theCallTotal + theSmsTotal;
    }
    return {

        makeCall, sendSms, callTotal, smsTotal, grandTotal
    }
}

const phoneBill = PhoneBill();

phoneBill.makeCall();
phoneBill.sendSms();

phoneBill.callTotal();
phoneBill.smsTotal();
phoneBill.grandTotal(); 