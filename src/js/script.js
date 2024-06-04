function updateForm() {
    const relationshipType = document.getElementById('relationshipType').value;
    const thirdPersonField = document.getElementById('thirdPerson');
    thirdPersonField.style.display = relationshipType === 'throuple' ? 'block' : 'none';
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

function calculateDatingEligibility() {
    const relationshipType = document.getElementById('relationshipType').value;
    const birthDatePerson1 = document.getElementById('birthDatePerson1').value;
    const birthDatePerson2 = document.getElementById('birthDatePerson2').value;

    const agePerson1 = calculateAge(birthDatePerson1);
    const agePerson2 = calculateAge(birthDatePerson2);

    let result = '';

    if (relationshipType === 'couple') {
        if (agePerson1 < 13 || agePerson2 < 13) {
            result = 'Ambas as pessoas devem ter pelo menos 13 anos para namorar.';
        } else if (agePerson1 > 99 || agePerson2 > 99) {
            result = 'Pessoas acima de 99 anos não podem namorar, conforme a lei 8.112 da Constituição Federal.';
        } else if ((agePerson1 >= 18 && agePerson2 < 18) || (agePerson2 >= 18 && agePerson1 < 18)) {
            result = 'Se uma pessoa tiver 18 anos ou mais e a outra não tiver, elas não podem namorar.';
        } else {
            result = 'Estas pessoas podem namorar!';
        }
    } else if (relationshipType === 'throuple') {
        const birthDatePerson3 = document.getElementById('birthDatePerson3').value;
        const agePerson3 = calculateAge(birthDatePerson3);

        if (agePerson1 < 13 || agePerson2 < 13 || agePerson3 < 13) {
            result = 'Todas as pessoas devem ter pelo menos 13 anos para namorar.';
        } else if (agePerson1 > 99 || agePerson2 > 99 || agePerson3 > 99) {
            result = 'Pessoas acima de 99 anos não podem namorar, conforme a lei 8.112 da Constituição Federal.';
        } else if (
            (agePerson1 >= 18 && (agePerson2 < 18 || agePerson3 < 18)) ||
            (agePerson2 >= 18 && (agePerson1 < 18 || agePerson3 < 18)) ||
            (agePerson3 >= 18 && (agePerson1 < 18 || agePerson2 < 18))
        ) {
            result = 'Se uma pessoa tiver 18 anos ou mais e alguma outra não tiver, elas não podem namorar.';
        } else {
            result = 'Estas pessoas podem namorar!';
        }
    }

    document.getElementById('result').innerText = result;
}
