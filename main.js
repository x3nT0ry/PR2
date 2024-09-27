function countLetter(str, letter) {
    let count = 0;
    letter = letter.toLowerCase(); 
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const firstRowCount = countLetter(firstRow, letter);
    const secondRowCount = countLetter(secondRow, letter);

    if (firstRowCount === 0 && secondRowCount === 0) {
        return `Буква '${letter}' відсутня в обох рядках.`;
    }

    return firstRowCount >= secondRowCount ? firstRow : secondRow;
}

function formattedPhone(phone) {
    phone = phone.replace(/\D/g, '');

    if (phone.length === 10 && phone[0] === '0') {
        phone = '38' + phone;
    } else if (phone.length === 11 && phone[0] === '8') {
        phone = '3' + phone;
    } else if (phone.length === 12 && phone[0] === '3') {
    } else {
        return 'Некоректний формат номеру';
    }

    let formatted = `+${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
    return formatted;
}

function formattedPhoneInteractive() {
    let phone = prompt('Введіть номер телефону:');
    let result = formattedPhone(phone);
    alert(result);
}

function countLetterInteractive() {
    const firstRow = prompt('Введіть перший рядок:');
    const secondRow = prompt('Введіть другий рядок:');
    const letter = prompt('Введіть літеру, яку хочете порахувати:');
    const result = getRow(firstRow, secondRow, letter);
    alert(`Рядок з більшою кількістю літер "${letter}": ${result}`);
}

document.getElementById('countLetterButton').addEventListener('click', countLetterInteractive);
document.getElementById('formatPhoneButton').addEventListener('click', formattedPhoneInteractive);
