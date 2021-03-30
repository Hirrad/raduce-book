export default class BookService {
    _img='https://picsum.photos/id/';
    _random=()=>Math.floor(Math.random()*254)
    data=[{
        id: 1,
        title: 'PHp Learning',
        author: 'Ded Mazai',
        price: 54,
        imgBook:`${this._img}${this._random()}/400`
    },
        {
            id: 2,
            title: 'JS Learning',
            author: 'Dart Weider',
            price: 234,
            imgBook:`${this._img}${this._random()}/400`
        },
        {
            id: 3,
            title: 'css Learning',
            author: 'Dzhaba Hat',
            price: 546,
            imgBook:`${this._img}${this._random()}/400`

        }]
    getBooks=()=>  {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(this.data)
            }, 700)
        })
    }
}
// const rty=  new BookService();
// console.log(rty.getBooks().then((book)=>console.log(book)))