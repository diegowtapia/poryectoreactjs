export const productos = [
    {
        id: 1,
        name: 'Snare',
        stock: 3,
        price: 7500,        
        img: 'https://img.kytary.com/eshop_ie/velky_v2/na/636741757960470000/4d64581c/64596067/british-drum-co-14-x-6-5-big-softy-snare.jpg',
        category: 'snare',        
    },
    {
        id: 2,
        name: 'Crash',
        stock: 12,
        price: 5600,        
        img: 'https://m.media-amazon.com/images/I/61b60meFpZL._AC_SX569_.jpg',
        category: 'crash',
    },
    {
        id: 3,
        name: 'Palillos',
        stock: 7,
        price: 700,        
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/661/931/products/1311-ac618a98ae417fee3216215429148178-1024-1024.jpg',
        category: 'palillos',        
    },
    {
        id: 4,
        name: 'Pedal',
        stock: 6,
        price: 2700,        
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVI4Vp2x1TWT3cEo2NtSj734gk0eSx9DfGg&usqp=CAU',
        category: 'pedal',
    },
];

export const aparecerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});