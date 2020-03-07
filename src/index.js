const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    var arr=[], temp, result_str='', result = [];
    
    for (let i=0; i<expr.length; i+=10)
    arr.push(expr.substr(i, 10));
    
    
    for (let i=0; i<arr.length; i++){
        temp = [];
        for (let j=0; j<arr[0].length; j+=2) {
           if (arr[i][j] == '1' && arr[i][j+1] == '0')
          temp.push('.');
        if (arr[i][j] == '1' && arr[i][j+1] == '1')
          temp.push('-');
    }
    
    result.push(temp.join(''));
    
    }
    
    for (i in result){
        if (!result[i]) result_str += ' ';
        else result_str += MORSE_TABLE[result[i]];
    }
    
    return result_str;
    }

    module.exports = {
        decode
    }