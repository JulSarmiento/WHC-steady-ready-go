# Entregable: Creacion de bases de datos con MongoDB

1. En la consola de Mongosh, empleamos el siguiente comando para inicializar MongoDB:

  ```
  mongosh
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-1.png?alt=media&token=33a71683-3c72-4c32-bab2-6ace5f57af09)

2. Procedemos a revisar las bases de datos existentes con el comando:

  ```
  show dbs
  ```
   ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-2.png?alt=media&token=31a931d3-b0d2-447e-aeb5-1175dbc002a3)

3. Creamos una base de datos llamada "entregable" con el comando:

  ```
  use entregable
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-3.png?alt=media&token=73ad41bd-3478-45ec-a334-ca4bae9c3f15)

4. Validamos que nos encontremos en la base de datos "entregable" con el comando:

  ```
  db
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-4.png?alt=media&token=73104145-8851-487a-8459-769900310815)

5. Creamos una colección llamada "users" con el comando:

  ```
  db.createCollection("users")
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-5.png?alt=media&token=53725056-c6af-4fe1-9fe7-79bbdecb930b)

6. Validamos que se haya creado la colección con el comando:

  ```
  show collections
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-6.png?alt=media&token=782dab8c-78bc-444c-bc20-102917e56b67)

7. Insertamos 10 documentos en la colección "users" con el comando:

  ```
  db.users.insertMany([{ "name": "Juan", "age": 25, "email": "" }, { "name": "Pedro", "age": 30, "email": "" }, { "name": "Maria", "age": 20, "email": "" }, { "name": "Jose", "age": 35, "email": "" }, { "name": "Luis", "age": 40, "email": "" }, { "name": "Ana", "age": 45, "email": "" }, { "name": "Carlos", "age": 50, "email": "" }, { "name": "Sofia", "age": 55, "email": "" }, { "name": "Jorge", "age": 60, "email": "" }, { "name": "Andrea", "age": 65, "email": "" }])
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-7.png?alt=media&token=74e68ac1-b28f-4b6d-a1c1-adb8599a7450)

8. Consultamos la cantidad de documentos presentes en la colección "users" con el comando:

  ```
  db.users.countDocuments()
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-8.png?alt=media&token=d58bc826-c955-4a1e-9921-8f44c74ce5c7)

9. Realizamos un CRUD: 

  9.1. Agregar un usuario nuevo:
  
    ```
    db.users.insertOne({
      "name": "Javier",
      "age": 70,
      "email": "
    })
    ```
    ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-1.png?alt=media&token=33d96d50-6b28-4df0-87f3-f65680e49217)

  9.2. Listar los usuarios:
  
    ```
    db.users.find()
    ```
    ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-2.png?alt=media&token=29f63744-acad-4321-a79f-125d18b36141)

  9.3. Listar los usuarios menores a 30 años: 
  
    ```
    db.users.find({age: {$lt: 30}})
    ```
    ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-2.png?alt=media&token=29f63744-acad-4321-a79f-125d18b36141)

  9.4. Listar los usuarios mayores a 30 años:
  
    ```
    db.users.find({age: {$gt: 30}})
    ```
    ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-4.png?alt=media&token=7abd192d-43fb-460b-9dca-9b7f2280afbf)

  9.5. Modificar un usuario: 
    
    ```
    db.users.updateOne({name: "Javier"}, {$set: {age: 75}})
    ```
    ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-5.png?alt=media&token=092ec959-8d16-4fb6-984c-3542ec84e610)

    9.5.1. Validamos que se haya modificado el usuario:
    
      ```
      db.users.find({name: "Javier"})
      ```
      ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-5-1.png?alt=media&token=56bd21b5-3c1e-455c-8ad9-3a9bfe58b7e7)

  9.6. Eliminar un usuario:
  
    ```
    db.users.deleteOne({name: "Javier"})
    ```
    ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-6.png?alt=media&token=169a74f5-e044-424c-92e9-930feea9e186)

  9.7. Eliminar todos los usuarios:
  
    ```
    db.users.deleteMany({})
    ```
    ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-7.png?alt=media&token=0aa0a7a1-6618-4b2b-a57a-df3e97139391)

    9.7.1. Validamos que se hayan eliminado todos los usuarios:
    
      ```
      db.users.countDocuments()
      ```
      ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-7-1.png?alt=media&token=c8fa5285-a57c-4ba4-86b6-30e0ff49862c)