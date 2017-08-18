cd..

############################################################################
#Instalar babel
yarn add babel-cli babel-preset-es2015 babel-preset-stage-2 --dev
yarn add babel-register
############################################################################
# Instalacion de mocha para pruebas

yarn add mocha --dev

###########################################################################
# Instalar babel register para el hook requerido para el uso de mocha

yarn add babel-register --dev

########
# Instalacion de slint
yarn add standard babel-eslint --dev



## **DEPENDENCIAS NECESARIAS PARA CONSTRUIR UN REST API**
# EXPRESS

yarn add express

# ENCRIPTACION DE CONTRASENIAS

yarn add bcrypt-nodejs

# PARSE DE LOS DATOS QUE NOS LLEGUEN POR PETICIONES HTTP

yarn add body-parser

# USA HTTP PARA SUBIR FICHEROS
  
yarn add connect-multiparty

# USAR TOKENS PARA AUTENTIFICACION CON JWTOKEM
  
yarn add jwt-simple

#USAR MOMENT PARA FECHAS
  
yarn add moment

#MONGOOSE PARA BASE DE DATOS
  
yarn add mongoose

#HACER PAGINACION CON MONGOOSE
  
yarn add mongoose-pagination

#NODEMOON PARA RECOMPILACION AUTOMATICA
yarn add nodemon --dev
  


#######
# Instalar graphql
yarn add graphql graphql-server-express graphql-tools

yarn add eslint-plugin-graphql --dev


############################################################################
# Anadir las lineas en package.json en e bloque de scripts
<<COMMENT
Anadir en la primera linea de cada test
import 'babel-polyfill'
COMMENT
<<COMMENT
 "scripts": {
 "compile": "babel -d lib/ src/",
    "dev": "babel-node server/index.js",
    "start": "nodemon server/index.js --exec babel-node",  
    "build": "babel server -d dist --presets es2015,stage-2",
    "serve": "node dist/index.js",
    "production": "npm run build && npm run serve",
    "test": "mocha --compilers js:babel-register"
  },
COMMENT

  

############################################################################
# Para evitar especificar los presets en los comandos babel 
# (--presets es2015,stage-2) en los bloques de los scripts del archivo
# package.json
cp .conf_folder/.babelrc  .babelrc

############################################################################
# Copiando .gitignore

cp .conf_folder/.gitignore  .gitignore