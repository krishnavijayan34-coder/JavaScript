const addToCart = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Item added to cart");
            resolve();
        }, 1000);
    });
};

const selectShipping = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fast shipping selected");
            resolve();
        }, 1000);
    });
};

const validateCart = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cart validated successfully");
            resolve();
        }, 1000);
    });
};

const makePayment = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment successful");
            resolve();
        }, 1000);
    });
};

const placeOrder = async () => {
    try {
        await addToCart();
        await selectShipping();
        await validateCart();
        await makePayment();
    } catch (error) {
        console.log("Error:", error);
    }
};

placeOrder();