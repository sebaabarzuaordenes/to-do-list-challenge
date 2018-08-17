# Utiliza como base la imagen de node
FROM node:8.10

# Instala pm2 como paquete global
# RUN yarn global add eslint

# Define el directorio de trabajo para el resto de los comandos
WORKDIR /usr/src/app

# Define valor por defecto de la variable NODE_ENV
ARG NODE_ENV=production

# Copia los archivos que contienen información de las dependencias
COPY package*.json ./
COPY yarn.lock ./
# guarda ralacion entre depencias

# Incluye la carpeta .bin el PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Instala las dependencias
RUN yarn install

# Copia el resto del código fuente
COPY . .

# Cambia de usuario
USER node

# Inicia la aplicación
CMD ["npm", "test"]
