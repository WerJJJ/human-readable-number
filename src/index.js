module.exports = function toReadable (number) {
    let str = String(number);
    let len = str.length;
    let result = '';

    if (len == 1){
        result = result + oneNumberToString(str);
    }
    if (len == 2){
        if (str[0] == 1){
            result = result + twoNumberToString(str);
        }else
        if (str[1] == 0){
            result = result + twoNumberToString(str);
        }else
        if (str > 20){
            result = result + twoNumberToString(String(str - str[1])) + oneNumberToString(str[1]);
        }
    }
    if (len == 3){
        if (str[1] == 0 && str[2] == 0){
            result = result + oneNumberToString(str[0]) + " hundred";
        }else{
            result = result + oneNumberToString(str[0]) + " hundred ";
            str = str.substr(1);
            if(str[0] == 0){
                result = result + oneNumberToString(str[1]);
            }else
            if (str[0] == 1){
                result = result + twoNumberToString(str);
            }else
            if (str[1] == 0){
                result = result + twoNumberToString(str);
            }else
            if (str > 20){
                result = result + twoNumberToString(String(str - str[1])) + oneNumberToString(str[1]);
            }
        }
    }
    return result.trim();
}

function oneNumberToString(element){
    switch(element){
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '0': return 'zero';

    }
}

function twoNumberToString(element){
    switch(element){
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
        case '10': return 'ten';
        case '20': return 'twenty ';
        case '30': return 'thirty ';
        case '40': return 'forty ';
        case '50': return 'fifty ';
        case '60': return 'sixty ';
        case '70': return 'seventy ';
        case '80': return 'eighty ';
        case '90': return 'ninety ';
    }
}

function threeNumberToString(element){
    switch(element){

    }
}