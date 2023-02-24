const game = {
    name: 'Cyberpunk 2077',
    price: 199.99,
    genre: 'RPG',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt Red',
    releaseDate: '10/12/2020',
    rating: 'M',
    platforms: ['PC', 'PS4', 'Xbox One', 'PS5', 'Xbox Series X/S']
};

const keys = ['name', 'price', 'genre', 'developer', 'publisher', 'releaseDate', 'rating', 'platforms'];

console.log(`
    Name: ${game[keys[0]]}
    Price: ${game[keys[1]]}
    Genre: ${game[keys[2]]}
    Dev: ${game[keys[3]]}
    Publisher: ${game[keys[4]]}
    Realease Date: ${game[keys[5]]}
    Rating: ${game[keys[6]]}
    Platforms: ${game[keys[7]][0]}
`);

console.log('\n');

keys.forEach(info => console.log(game[info]));