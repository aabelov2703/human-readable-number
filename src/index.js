module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
                'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        res = '',
        ind = String(number).length;        
        
    if (ind === 1 || (ind === 2 && number < 20)) {
        res = arr1[number]; // 0..19
    } else if (ind == 2) {
        res = arr1[18 + Math.floor(number / 10)]; // tens
        res += (number % 10 === 0) ? '' : ' ' + toReadable(number % 10); // recursive digits
    } else {
        res = arr1[Math.floor(number / 100)] + ' hundred'; // hundreeds
        res += (number % 100 === 0) ? '' : ' ' + toReadable(number % 100); // recursive tens & digits
    }
    return res;
}
