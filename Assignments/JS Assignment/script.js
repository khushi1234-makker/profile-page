// Function to calculate sum of all elements in array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function to find maximum element in an array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

// Function to group array elements by a specific property
function groupByProperty(arr, property) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i][property];

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(arr[i]);
    }
    return result;
}

// Function to calculate average of array elements
function averageArray(arr) {
    let sum = sumArray(arr);
    return arr.length ? sum / arr.length : 0;
}

// Function to find minimum element in an array
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Count occurrences
function countOccurrences(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        count[value] = (count[value] || 0) + 1;
    }
    return count;
}

let numbers = [1, 2, 3, 4, 5, 5];

// Example object array for grouping
let users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" }
];

// Console output
console.log("Sum:", sumArray(numbers));
console.log("Max:", findMax(numbers));
console.log("Unique:", removeDuplicates(numbers));
console.log("Average:", averageArray(numbers));
console.log("Min:", findMin(numbers));
console.log("Count:", countOccurrences(numbers));
console.log("Grouped:", groupByProperty(users, "role"));

// Screen output
let output = `
<b>Sum:</b> ${sumArray(numbers)} <br><br>
<b>Max:</b> ${findMax(numbers)} <br><br>
<b>Unique:</b> ${removeDuplicates(numbers)} <br><br>
<b>Average:</b> ${averageArray(numbers)} <br><br>
<b>Min:</b> ${findMin(numbers)} <br><br>
<b>Count:</b> ${JSON.stringify(countOccurrences(numbers))} <br><br>
<b>Grouped:</b> ${JSON.stringify(groupByProperty(users, "role"))}
`;

document.getElementById("output").innerHTML = output;