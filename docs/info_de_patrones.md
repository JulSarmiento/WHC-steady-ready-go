# From Hero to Superhero 7 Design Patterns

## Creational Patterns

### Builder

``` Javascript
// Clase ProfileBuilder
class ProfileBuilder {
  constructor() {
    this.profile = {};
  }

  setName(name) {
    this.profile.name = name;
    return this;
  }

  setAge(age) {
    this.profile.age = age;
    return this;
  }

  setGender(gender) {
    this.profile.gender = gender;
    return this;
  }

  setLocation(location) {
    this.profile.location = location;
    return this;
  }

  build() {
    return this.profile;
  }
};

```
### Factory

``` Javascript
class DiscountFactory {
  static createDiscount(discountType) {
    switch(discountType) {
      case '10%':
        return new TenPercentDiscount();
      case '20%':
        return new TwentyPercentDiscount();
      case '30%':
        return new ThirtyPercentDiscount();
      default:
        throw new Error('Invalid discount type.');
    }
  }
}

class TenPercentDiscount {
  applyDiscount(price) {
    return price - (price * 0.1);
  }
}

class TwentyPercentDiscount {
  applyDiscount(price) {
    return price - (price * 0.2);
  }
}

class ThirtyPercentDiscount {
  applyDiscount(price) {
    return price - (price * 0.3);
  }
}

// Uso
const discount = DiscountFactory.createDiscount('10%');
const price = 100;
const finalPrice = discount.applyDiscount(price);
console.log(`Precio original: ${price}, Precio final con descuento: ${finalPrice}`);

```

### Singleton

``` Javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class CarFactory {
  createCar(make, model) {
    return new Car(make, model);
  }
}

const factory = new CarFactory();
const myCar = factory.createCar('Honda', 'Civic');
console.log(myCar); // Output: Car { make: 'Honda', model: 'Civic' }

```

## Structural Patterns

### Adapter

``` Javascript

// Adaptador para convertir el objeto de producto de la API en un objeto de producto de MongoDB
class ProductMongoDBAdapter {
  constructor(product) {
    this._product = product;
  }

  get id() {
    return this._product.id;
  }

  get name() {
    return this._product.name;
  }

  get description() {
    return this._product.description;
  }

  get price() {
    return this._product.price;
  }

  get image() {
    return this._product.image;
  }

  // Convierte el objeto de producto adaptado en un documento de MongoDB
  toMongoDocument() {
    return {
      _id: this._product.id,
      name: this._product.name,
      description: this._product.description,
      price: this._product.price,
      image: this._product.image,
    };
  }
}

// Controlador para obtener los detalles de un producto
async function getProduct(req, res) {
  const productId = req.params.productId;
  const productApi = await getProductFromApi(productId);

  // Crea un adaptador para el objeto de producto de la API
  const productMongoDBAdapter = new ProductMongoDBAdapter(productApi);

  // Convierte el objeto de producto adaptado en un documento de MongoDB
  const productMongoDBDocument = productMongoDBAdapter.toMongoDocument();

  // Busca el documento de MongoDB en la base de datos y devuelve los detalles del producto
  const productMongoDB = await ProductModel.findById(productMongoDBDocument._id);
  res.json(productMongoDB);
}
  
```

### Bridge

``` Javascript
// Clase abstracta AuthProvider
class AuthProvider {
  constructor(strategy) {
    this.strategy = strategy;
  }

  authenticate(req: Request, res: Response, next: NextFunction) {
    this.strategy.authenticate(req: Request, res: Response, next: NextFunction);
  }
}

// Implementación de la estrategia para Google
class GoogleAuthStrategy {
  authenticate(req: Request, res: Response, next: NextFunction) {
    // Lógica de autenticación de Google
    // ...

    next();
  }
}

// Implementación de la estrategia para Facebook
class FacebookAuthStrategy {
  authenticate(req: Request, res: Response, next: NextFunction) {
    // Lógica de autenticación de Facebook
    // ...

    next();
  }
}

// Implementación de la estrategia para Twitter
class TwitterAuthStrategy {
  authenticate(req: Request, res: Response, next: NextFunction) {
    // Lógica de autenticación de Twitter
    // ...

    next();
  }
}

// Ejemplo de uso en Express
app.post('/auth/google', new AuthProvider(new GoogleAuthStrategy()).authenticate);
app.post('/auth/facebook', new AuthProvider(new FacebookAuthStrategy()).authenticate);
app.post('/auth/twitter', new AuthProvider(new TwitterAuthStrategy()).authenticate);

```

### Decorator

``` Javascript
const logger = (message) => console.log(message)

function loggerDecorator (logger) {
    return function (message) {
        logger.call(this, message)
        console.log("message logged at:", new Date().toLocaleString())
    }
}

const decoratedLogger = loggerDecorator(logger);
decoratedLogger("Hello World")

```

## Behavioral Patterns

### Observer

``` Javascript
const EventEmitter = require('events');

// Define una clase Subject que hereda de EventEmitter
class Subject extends EventEmitter {
  constructor() {
    super();
    this.data = null;
  }

  setData(data) {
    this.data = data;
    // Emitir un evento 'data-updated' cuando se actualiza la data
    this.emit('data-updated', data);
  }

  getData() {
    return this.data;
  }
}

// Define una clase Observer que escucha el evento emitido por Subject
class Observer {
  constructor(subject) {
    this.subject = subject;
    this.subject.on('data-updated', this.onDataUpdated.bind(this));
    }

  onDataUpdated(data) {
    console.log(`Data actualizada: ${data}`);
  }
}

// Ejemplo de uso
const subject = new Subject();
const observer = new Observer(subject);

subject.setData('nueva data'); // salida esperada: 'Data actualizada: nueva data'

```

### Chain of Responsibility

``` Javascript
// Define una función que verifica si una petición es de un tipo específico
function isOfType(req, type) {
  return req.method === type;
}

// Define un middleware que maneja peticiones GET
function handleGet(req: Request, res: Response, next: NextFunction) {
  if (isOfType(req, 'GET')) {
    console.log('Manejando una petición GET');
    res.send('Petición GET manejada');
  } else {
    next();
  }
}

// Define un middleware que maneja peticiones POST
function handlePost(req: Request, res: Response, next: NextFunction) {
  if (isOfType(req, 'POST')) {
    console.log('Manejando una petición POST');
    res.send('Petición POST manejada');
  } else {
    next();
  }
}

// Define un middleware que maneja peticiones PUT
function handlePut(req: Request, res: Response, next: NextFunction) {
  if (isOfType(req, 'PUT')) {
    console.log('Manejando una petición PUT');
    res.send('Petición PUT manejada');
  } else {
    next();
  }
}

// Define un middleware que maneja peticiones DELETE
function handleDelete(req: Request, res: Response, next: NextFunction) {
  if (isOfType(req, 'DELETE')) {
    console.log('Manejando una petición DELETE');
    res.send('Petición DELETE manejada');
  } else {
    next();
  }
}

// Define una cadena de middlewares para manejar diferentes tipos de peticiones
const requestHandlerChain = [
  handleGet,
  handlePost,
  handlePut,
  handleDelete
];

// Registra los middlewares en una ruta específica
app.use('/api', requestHandlerChain);
  
```

