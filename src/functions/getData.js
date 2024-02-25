import Papa from 'papaparse';

export const  getData = async () => {
    const response = await fetch(`../sample/technical_questions.csv`);
    const result = await response.text();
    let data = Papa.parse(result, { header: true, dynamicTyping: true, skipEmptyLines: true }).data
    console.log(data);
    return data
}
