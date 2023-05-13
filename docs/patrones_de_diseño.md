# Patrones de diseño

## Patrones de creación

### Builder

El patrón de diseño Builder se utiliza para encapsular la lógica de construcción de un objeto complejo. El patrón Builder permite al desarrollador separar la construcción de un objeto complejo de su representación, de modo que el mismo proceso de construcción pueda crear diferentes representaciones.

```Javascript
class Authentication {
  constructor() {}

  setProvider(provider) {
    this.provider = provider;

    return this;
  };

  setOAuhtUrl(url) {
    this.oAuthUrl = url;

    return this;
  };

  build() {
    return this;
  };
};

const obj = new Authentication()
  .setProvider('Firebase')
  .build();

// instanceof nos permite saber si un objeto es instancia de una clase
console.log("New instance: ", obj instanceof Authentication);
console.log('obj: ', obj);

```

### Factory

El patrón de diseño Factory se utiliza para encapsular la lógica de creación de un objeto. El patrón Factory permite al desarrollador separar la creación de un objeto complejo de su implementación, de modo que el mismo proceso de creación pueda crear diferentes implementaciones.

```Javascript
lass AuthenticationFactory {
  constructor() {}

  static create(provider) {
    return new Authentication()
      .setProvider(provider)
      .build();
  };

}

const obj2 = AuthenticationFactory.create('Firebase');
console.log("New instance: ", obj2 instanceof Authentication);

```

### Singleton

El patrón de diseño Singleton se utiliza para garantizar que solo se cree una instancia de una clase y proporcionar un único punto de acceso a ella. El patrón Singleton permite al desarrollador controlar el número de instancias que se crean de una clase.

```Javascript
class AuthenticationSingleton {

  static _instante;

  static build() {
    if(!AuthenticationSingleton._instante) {
      AuthenticationSingleton._instante = new Authentication().setProvider('Google').build();
    };

    return AuthenticationSingleton._instante;
  };

};

const obj3 = AuthenticationSingleton.build();
console.log("New instance: ", obj3 instanceof Authentication);

```
