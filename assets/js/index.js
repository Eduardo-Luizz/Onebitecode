function calculateTip(event) {
    event.preventDefault();
    // pegando os valores dos inputs
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('service-quality').value;
    let people = document.getElementById('people').value;

    if(bill == '' | serviceQuality == 0){
        alert('Por favor, preencha os valores')
        return;
    }
    // Dependendo de quantas pessoas ele mostra a palavra cada ou não
    if(people == '' | people <= 1) {
        people = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQuality) / people;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('total-tip').style.display = "block";
}

// bloqueia a aparencia desses elementos
document.getElementById('total-tip').style.display = "none";
document.getElementById('each').style.display = "none";

// associa o evento de submissao com uma funcao
document.getElementById('tips-form').addEventListener('submit', calculateTip);