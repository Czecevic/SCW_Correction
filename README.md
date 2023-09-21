# Santa Common World

## Explication / Explanation
#### French version

Projet utilisant nodeJS / ExpressJS en manipulant la methode CRUD (create / Read / Update / Delete) via une base de donnée mocker 

#### English version

Project using nodeJS / ExpressJS by manipulating the CRUD (create / Read / Update / Delete) method via a mocker database

## installation
### pre-requie
- [node.js] (https://nodejs.org/fr)

#### French version
après avoir installer nodeJS vous pouvez taper lancer la commande ```npm i``` suivie de ```nodemon server.js``` vérifiez que vous êtes dans le bon dossier pour le lancer

#### English version
after installing nodeJS you can type the command ```npm i``` followed by ```nodemon server.js``` check that you are in the right folder to launch it

## launch project 
#### French version

une fois le projet lancez vous avez la possibilité d'utiliser postman / thunder client, il vous suffira de rentrer les url suivants (j'ai utiliser les routes pour toys mais elle marche aussi pour les categories suffit juste changer `toys` par `catégories`) :

- get all response

url : ``` GET : http://localhost:3000/toys ```

résultat : 
```
[
  {
    "name": "Playstation 4",
    "description": "Famous video game platform",
    "price": 499,
    "category_id": 0
  },
  {
    "name": "Barbie",
    "description": "Pink doll",
    "price": 29,
    "category_id": null
  },
  {
    "name": "Monopoly",
    "description": "Board game $$$",
    "price": 59,
    "category_id": 1
  },
  {
    "name": "Football ball",
    "description": "A ball to play outside",
    "price": 25,
    "category_id": 2
  },
  {
    "name": "Chess",
    "description": "Board game for smart children",
    "price": 25,    
    "category_id": 1
  }
]
```

- get one response

url : ``` GET : http://localhost:3000/toys/2 ```

réultat : 
```
{
  "name": "Monopoly",
  "description": "Board game $$$",
  "price": 59,
  "category_id": 1
}
```

- post response 
url :
```
POST : http://localhost:3000/toys

Body : 
{
    "name": "test",
  "description": "test",
  "price": 0,
  "category_id": 0
}
```
resultat : 
```
[
  {
    "name": "Playstation 4",
    "description": "Famous video game platform",
    "price": 499,
    "category_id": 0
  },
  {
    "name": "Barbie",
    "description": "Pink doll",
    "price": 29,
    "category_id": null
  },
  {
    "name": "Monopoly",
    "description": "Board game $$$",
    "price": 59,
    "category_id": 1
  },
  {
    "name": "Football ball",
    "description": "A ball to play outside",
    "price": 25,
    "category_id": 2
  },
  {
    "name": "Chess",
    "description": "Board game for smart children",
    "price": 25,
    "category_id": 1
  },
  {
    "name": "test",
    "description": "test",
    "price": 0,
    "category_id": 0
  }
]
```

- put response 
url :
```
PUT : http://localhost:3000/toys/2

Body : 
{
    name: "test2"
}
```

resultat : 
```
{
  "name": "test2",
  "description": "Board game $$$",
  "price": 59,
  "category_id": 1
}
```

- delete response

url : ``` DELETE : http://localhost:3000/toys/2 ```

resultat : 
``` 
[
  {
    "name": "Playstation 4",
    "description": "Famous video game platform",
    "price": 499,
    "category_id": 0
  },
  {
    "name": "Barbie",
    "description": "Pink doll",
    "price": 29,
    "category_id": null
  },
  null,
  {
    "name": "Football ball",
    "description": "A ball to play outside",
    "price": 25,
    "category_id": 2
  },
  {
    "name": "Chess",
    "description": "Board game for smart children",
    "price": 25,
    "category_id": 1
  }
]
```