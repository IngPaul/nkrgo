# NKRGO
## 1. LINTER ESLINT
Normalizar el codigo evita errores en sintaxis de codigo y mantiene un codigo limpio y sujeto a reglas.

+ 1. Instalar libreria standard

 `npm install standard --save-dev`
+ 2. Aumentar en el archivo de package.json, en el bloque de scripts la variable lint
        ```
        "scripts": {
            "lint": "standard"
        }
        ```
+ 3. Ejecutar comando
`npm run lint`

## 2. BABEL ESLINT
Para agregar la sintaxis de EM6

+ 1. Instalar libreria babel-eslint

 `npm install babel-eslint --save-dev`
+ 2. Aumentar en el archivo de package.json, un bloque nuevo llamado standard
        ```
        "standard": {
            "parser": "babel-eslint"
        }
        ```
+ 3. Ejecutar comando
`npm run lint`

## 3. Pruebas AVA 
Herramienta para correr test

+ 1. Instalar libreria babel-eslint

 `npm install ava --save-dev`
+ 2. Aumentar en el bloque script la variable test
        ```
        "scripts": {
            "lint": "standard",
            "test": "npm run lint && ava"
        },
        ```

+ 3. Ejecutar comando
`npm run lint`

