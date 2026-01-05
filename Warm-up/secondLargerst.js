const arr = [1, 11, 6, 3, 9];


const secondLargest = (arr) => {
    if(arr && arr.length < 2)
    {
        throw new Error("Array must have at least 2 elements");
    }

    let larger = -Infinity;
    let secondLarger = -Infinity;
    for(let i =0; i< arr.length; i++)
    {
        if(arr[i] > larger)
        {
            secondLarger = larger;
            larger = arr[i];
        }else if(arr[i] > secondLarger && arr[i] !== larger)
        {
            secondLarger = arr[i]
        }
    }

    if(secondLarger === -Infinity)
    {
        return "No second largest element found";
    }

    return secondLarger;
}


console.log(secondLargest(arr));