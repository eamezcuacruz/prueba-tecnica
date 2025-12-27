El proyecto contiene una API básica en Node.js con los siguientes endpoints:

POST /text/process
POST /text/transform

-----

Instalación de node.js y npm con las siguientes versiones:

node versión: 24.11.0
npm versión: 11.6.1

-----

Endpoints:
1. POST /text/process
{
  "text": "(Hola (Mundo))"
}


2. POST /text/transform
{
  "text": "Hello world! This is a test. Hello again."
}
