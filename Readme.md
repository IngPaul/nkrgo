# NKRGO
## BABEL 
1. Instalar babel
    ````
    yarn add babel-cli babel-preset-es2015 babel-preset-stage-2 --dev

    yarn add babel-register 
    ````
2. Crear carpeta /bin y archivos 
    
    /bin/dev.js => apuntara al archivo del proyecto
    ````
    require('babel-register')
    require('./../server/index')
    ````
    /bin/production.js => apuntara al archivo del proyecto transpilado
    ````
    require('./../dist/index')
    ````

3 Anadir en el archivo package.json el bloque de scripts 
   
    ````
    "start": "node bin/dev",
    "clean": "rm -rf dist",
    "build": "npm run clean && mkdir dist && babel server -s -d dist",
    "production": "npm run build && node bin/production",

    ````
4. Crear archivo .babelrc y anadir los presets
    ````
    "scripts": {
        "start": "babel server/index.js"
    }
    ````

## **LINTER ESLINT**
Normalizar el codigo evita errores en sintaxis de codigo y mantiene un codigo limpio y sujeto a reglas.

1. Instalar libreria standard

    `npm install standard --save-dev`

2. Aumentar en el archivo de package.json, en el bloque de scripts la variable lint

    ```
    "scripts": {
        "lint": "standard"
    }
    ```
3. Descargar plugin para visual studio code 

    vscode-standardjs.

4. Ejecutar comando

   `npm run lint`



## **BABEL ESLINT**
Para agregar la sintaxis de EM6

1. Instalar libreria babel-eslint

    `npm install babel-eslint --save-dev`

2. Aumentar en el archivo de package.json, un bloque nuevo llamado standard

    ```
    "standard": {
        "parser": "babel-eslint"
    }
    ```
3. Ejecutar comando

    `npm run lint`

## PRUEBAS MOCHA
  `yarn add mocha           `
## ~~Pruebas AVA~~
Herramienta para correr test

1. Instalar libreria babel-eslint
    
    `npm install ava --save-dev`

2. Aumentar en el bloque script la variable test

        ```
        "scripts": {
            "lint": "standard",
            "test": "npm run lint && ava"
        },
        ```

3. Ejecutar comando para probar

    `npm run lint`


## **DEPENDENCIAS NECESARIAS PARA CONSTRUIR UN REST API**
* EXPRESS

  `npm install express --save`

* ENCRIPTACION DE CONTRASENIAS

  `npm install bcrypt-nodejs --save`

* PARSE DE LOS DATOS QUE NOS LLEGUEN POR PETICIONES HTTP
  `npm install body-parser --save`

* USA HTTP PARA SUBIR FICHEROS
  
  `npm install connect-multiparty --save`

* USAR TOKENS PARA AUTENTIFICACION CON JWTOKEM
  
  `npm install jwt-simple --save`

* USAR MOMENT PARA FECHAS
  
  `npm install moment --save`

* MONGOOSE PARA BASE DE DATOS
  
  `npm install mongoose --save`

* HACER PAGINACION CON MONGOOSE
  
  `npm install mongoose-pagination --save`

* NODEMOON PARA RECOMPILACION AUTOMATICA
  `npm install nodemon --save-dev`
  
  - Anadir al bloque script del archivo package.json la variable nmon
    ```
    "nmon": "nodemon --exec 'npm run test'"
    ```


## GRAPHQL
1. Intalacion de dependencias

   `yarn add express body-parser graphql graphql-server-express graphql-tools`


# APUNTES
## CLEAR CACHE GIT
`Utill cuando se agrega un archivo .gitignore`

````
git rm -r --cached .
git add .
git commit -am 'git cache cleared'
git push
````
## YARN VS NPM
https://yarnpkg.com/en/docs/migrating-from-npm

`Inicializacion de un proyecto`

yarn init  /  npm init

`Instalacion de una dependencia de desarrollo`

npm install --save-dev [package]  /  yarn add [package] [--dev/-D]

`Instalacion de una dependencia para el proyeto`
npm install --save [package]  /  yarn add [package]


## GIT
### CONFIGURAR GIT CON SSH
1. En la esquina superior derecha de git,  haga click en su perfil foto, y despues en settings.

2. En la barra de navegacion vertical izquierda selecciona la opcion `SSH keys and GpKey`.

3. Aniada su clave publica con el boton `New SSH Key`.