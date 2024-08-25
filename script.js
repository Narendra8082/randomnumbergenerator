function generateRandomNumber() {
    const min = parseInt(document.getElementById('start').value);
    const max = parseInt(document.getElementById('end').value);
    
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Please enter valid numbers with Min less than Max.');
        return;
    }
    
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('randomValue').innerText = randomValue;
}
