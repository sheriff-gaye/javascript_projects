

let stocts = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

function order(name, callback) {
    setTimeout(() => {
        console.log(`${stocts.Fruits[name]} was selected`)
        callback();
    }, 2000);

}

function production() {
    setTimeout(() => {
        console.log("Production has Started");

        setTimeout(() => {
            console.log('The fruits has been choped');

            setTimeout(() => {
                console.log(`${stocts.Liquid[0]} and ${stocts.Liquid[1]} was added`)

                setTimeout(() => {
                    console.log("The Machine has been started");

                    setTimeout(() => { 
                        console.log(`${stocts.Holder[1]} container has been selected`);

                        setTimeout(() => {
                            console.log(`${stocts.Toppings[0]} has been selected`);

                            setTimeout(() => {
                                console.log("Serve Ice Cream");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)

        }, 2000)
    }, 0000)




}


order("1", production);