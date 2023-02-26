import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('should show movie from Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1005, 'Мстители', 2012, 'США', '"Avengers Assemble!"', ['фантастика','боевик', 'фэнтези', 'приключения'], '137 мин. / 2:17', 450));
  expect(cart.items).toEqual([{
    id: 1005,
    name: 'Мстители',
    year: 2012,
    country: 'США',
    slogan: '"Avengers Assemble!"',
    genre: ['фантастика','боевик', 'фэнтези', 'приключения'],
    duration: '137 мин. / 2:17',
    price: 450,
  }]);
});

test('should show totalCost without discount', () => {
  const cart = new Cart();
  cart.add(new Movie(1005, 'Мстители', 2012, 'США', '"Avengers Assemble!"', ['фантастика','боевик', 'фэнтези', 'приключения'], '137 мин. / 2:17', 450));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.getTotalCost()).toBe(3350);
});

test('should show totalCost with discount', () => {
  const cart = new Cart();
  cart.add(new Movie(1005, 'Мстители', 2012, 'США', '"Avengers Assemble!"', ['фантастика','боевик', 'фэнтези', 'приключения'], '137 мин. / 2:17', 450));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.getCostWithDiscount(10)).toBe(3015);
});

test('should delete item from cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1005, 'Мстители', 2012, 'США', '"Avengers Assemble!"', ['фантастика','боевик', 'фэнтези', 'приключения'], '137 мин. / 2:17', 450));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.deleteFromCart(1001);
  expect(cart.items.length).toBe(2);
  expect(cart.items).toEqual([{
    id: 1005,
    name: 'Мстители',
    year: 2012,
    country: 'США',
    slogan: '"Avengers Assemble!"',
    genre: ['фантастика','боевик', 'фэнтези', 'приключения'],
    duration: '137 мин. / 2:17',
    price: 450,
  },{
    id: 1008,
    name: 'Meteora',
    author: 'Linkin Park',
    price: 900,
  }
  ]);
});