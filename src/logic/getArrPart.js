const getArrPart = (arr, which) => {
    return (
        which === 'even' 
            ? arr.filter((e, i) => (i + 1) % 2 === 0)
            : arr.filter((e, i) => i % 2 === 0)
    );  
}

export default getArrPart;