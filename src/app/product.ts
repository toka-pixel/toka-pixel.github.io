export class Product {

        id: number;
       title: string;
        description: string;
        price: number;
        image: string;
        quantity:number;
        category:string
      
        constructor(id=0, title, description='', price=0, image='', quantity=0 , category='') {
          this.id = id
          this.title = title
          this.description = description
          this.price = price
          this.image = image
          this.quantity=quantity
          this.category=category
        }
    
    
}
