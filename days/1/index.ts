import { readFile } from 'fs/promises';

let inputFile = await readFile('./input.txt');

// PART 1
let sonarReadings: Array<number> = inputFile.toString().split('\n').map(x => +x);

let comparisonReading: number = sonarReadings[0];
let increases: number = 0;
for (let reading of sonarReadings) {
    if (reading > comparisonReading) {
        increases++;
    }
    comparisonReading = reading;
}

console.log(increases);

// PART 2

increases = 0
function compareReadings(readings: Array<number>, value = Infinity): number {

    let sum = readings.slice(0, 3).reduce((pv, cv) => 
        pv += cv
    , 0)

    readings.shift();

    console.log('sum: ' + sum);

    if (readings.length >= 3) {
        let nextGroupSum = compareReadings(readings, sum);
        if (nextGroupSum > sum) increases++;
    }

    return sum;
}

compareReadings(sonarReadings);
console.log(increases)