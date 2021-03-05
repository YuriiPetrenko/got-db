export default class Service {
         constructor() {
            this._apiBase = 'https://www.anapioficeandfire.com/api';
         }
     
         getResource = async (url) => {
            const res = await fetch(`${this._apiBase}${url}`);
        
            if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
            }
            return await res.json();
         }
     
         getAllBooks() {
            return this.getResource(`/books/`);
         }
         
         getBook(id) {
            return this.getResource(`/books/${id}/`);
         }
         
         async getAllCharacters() {
            const res = await this.getResource(`/characters?page=5&pageSize=10`);
            console.log(res)
            return res.map(this._transformCharacter);
        }
         
         async getCharacter(id) {
            const character = await this.getResource(`/characters/${id}`);
            return this._transformCharacter(character);
        }
         
         getAllHouses() {
             return this.getResource(`/houses/`);
         }
         
         getHouse(id) {
             return this.getResource(`/houses/${id}/`);
         }

         isEmpty(data){
            if(data){
                return data;
            }else{
                return "no-data...";
            }
         }

         _transformCharacter = (char) =>{
                  return {
                           name: this.isEmpty(char.name),
                           gender: this.isEmpty(char.gender),
                           born: this.isEmpty(char.born),
                           died: this.isEmpty(char.died),
                           culture: this.isEmpty(char.culture)
                  }
         }

         _transformHouse(house){
                  return{
                           name: house.name,
                           region: house.region,
                           words: house.words,
                           titles: house.titles,
                           overlord: house.overlord,
                           ancestralWeapons: house.ancestralWeapons
                  }
         }

         _transformBook(book){
                  return{
                           name: book.name,
                           numberOfPages: book.numberOfPages,
                           publisher: book.publisher,
                           released: book.released
                  }
         }
     }