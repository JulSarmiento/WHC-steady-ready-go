# Entregable: Creacion de bases de datos con MongoDB

1. En la consola de Mongosh, empleamos el siguiente comando para inicializar MongoDB:

  ```
  mongod
  ```

2. Procedemos a revisar las bases de datos existentes con el comando:

  ```
  show dbs
  ```

3. Creamos una base de datos llamada "entregable" con el comando:

  ```
  use entregable
  ```
4. Validamos que nos encontremos en la base de datos "entregable" con el comando:

  ```
  db
  ```
5. Creamos una colección llamada "users" con el comando:

  ```
  db.createCollection("users")
  ```
6. Validamos que se haya creado la colección con el comando:

  ```
  show collections
  ```
7. Insertamos 10 documentos en la colección "users" con el comando:

  ```
  db.users.insertMany([
    {
      "name": "Juan",
      "age": 25,
      "email": "
    }, 
    {
      "name": "Pedro",
      "age": 30,
      "email": "
    }, 
    {
      "name": "Maria",
      "age": 20,
      "email": "
    }, 
    {
      "name": "Jose",
      "age": 35,
      "email": "
    }, 
    {
      "name": "Luis",
      "age": 40,
      "email": "
    }, 
    {
      "name": "Ana",
      "age": 45,
      "email": "
    }, 
    {
      "name": "Carlos",
      "age": 50,
      "email": "
    }, 
    {
      "name": "Sofia",
      "age": 55,
      "email": "
    }, 
    {
      "name": "Jorge",
      "age": 60,
      "email": "
    }, 
    {
      "name": "Andrea",
      "age": 65,
      "email": "
    }
  ])
  ```

8. Listamos los documentos de la colección "users" con el comando:

  ```
  db.users.find()
  ```
9. Consultamos la cantidad de documentos presentes en la colección "users" con el comando:

  ```
  db.users.count()
  ```
10. Realizamos un CRUD: 

  10.1. Agregar un usuario nuevo:
  
    ```
    db.users.insertOne({
      "name": "Javier",
      "age": 70,
      "email": "
    })
    ```
  10.2. Listar los usuarios:
  
    ```
    db.users.find()
    ```

  10.3. Listar los usuarios menores a 30 años: 
  
      ```
      db.users.find({age: {$lt: 30}})
      ```
  10.4. Listar los usuarios mayores a 30 años:
  
      ```
      db.users.find({age: {$gt: 30}})
      ```
  10.5. Modificar un usuario: 
    
        ```
        db.users.updateOne({name: "Javier"}, {$set: {age: 75}})
        ```
  10.6. Eliminar un usuario:
  
        ```
        db.users.deleteOne({name: "Javier"})
        ```
  10.7. Eliminar todos los usuarios:
  
        ```
        db.users.deleteMany({})
        ```