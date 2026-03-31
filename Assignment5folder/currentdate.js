const getFormattedDate = () => {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    return `${year}-${month}-${day}`;
};

console.log(getFormattedDate());