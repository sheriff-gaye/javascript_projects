let stocts = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());

            }, time)

        }
        else {
            reject(console.log('our shop is close'))
        }

    });
}

order(2000, () => console.log(`${stocts.Fruits[0]} was selected`))

    .then(() => {
        return order(000, () => console.log("Production has Started"));
    })

    .then(() => {
        return order(2000, () => console.log("The fruits was chopped"));
    })


    .then(() => {
        return order(1000, () => console.log(`${stocts.Liquid[0]} and ${stocts.Liquid[1]} was selected`))
    })

    .then(() => {
        return (order(1000, () => console.log("Start the Machine")))
    })

    .then(() => {
        return order(2000, () => console.log(`${stocts.Holder[0]} Was Selected`))
    })

    .then(() => {
        return order(3000, () => console.log(`${stocts.Toppings[0]} Was Slected`))
    })

    .then(()=>{
        return order(2000,()=>console.log("Serve Ice Cream"))
    })

    .catch(()=>{
        console.log("Customer Left");
    })

    .finally(()=>{
        console.log("Day Ended Shop is Close")
    })
