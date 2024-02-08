async function getData() {
    const response = await fetch('../sample/technical_questions.csv');
    const data = await response.json();
    console.log(data);
    return data
}
