//declaramos e inicializamos las constantes que ultilizaremos para resolver el problema

// elements es la lista de items, significados peso - valor 
// que son opciones para introducir en el saco.
// capacity of the knapsack

const elements = [
    [30, 10],
    [10, 20],
    [40, 30],
    [20, 40],
];

const capacity = 40;

const indexCurrent = elements.length - 1;

function getKnapSack(capacity, n, elements) {
    // Check capacity and items on zero
    if (capacity === 0 || n === 0) {
        return { value: 0, items: [] };
    }

    const [currentWeight, currentValue] = elements[n];

    // if weight of current element is less than or equal to capacity we can either include or exclude the item
    if (currentWeight <= capacity) {
        const includeItem = getKnapSack(capacity - currentWeight, n - 1, elements);
        const excludeItem = getKnapSack(capacity, n - 1, elements);

        // Choose the option with higher value
        if (currentValue + includeItem.value > excludeItem.value) {
            return {
                value: currentValue + includeItem.value,
                items: [...includeItem.items, n],
            };
        } else {
            return excludeItem;
        }
    }

    // if weight of current element is greater than the capacity we will not include it, thus returning just the ignoring part.
    return getKnapSack(capacity, n - 1, elements);
}

const result = getKnapSack(capacity, elements.length - 1, elements);
console.log("Maximum Value:", result.value);
console.log("Selected Items:", result.items.map(index => elements[index]));
console.log("Total unselected items", (elements.filter((_, index) => !result.items.includes(index))).reduce((acumulador, subarray) => acumulador + subarray[1], 0))
console.log("Unselected Items", elements.filter((_, index) => !result.items.includes(index)));










