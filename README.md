1. Endpoint: `POST /text/process`
Descripción: Este endpoint recibe una cadena de texto que contiene uno o más grupos de palabras encerrados entre paréntesis.
El endpoint debe generar y devolver los pasos para invertir la cadena de texto por paréntesis iniciando por los más internos.

Entrada:
{
  "text": "(Hola (Mundo))"
}

salida:
{
  "result": [
  "(Hola (Mundo))",
    "(Hola odnuM)",
    "Mundo aloH"
  ]
}

----------------------------------------------------------------------------------

2. Endpoint: `POST /text/transform`

Descripción: Este endpoint recibe una cadena de texto y realiza las siguientes operaciones en el texto:

1. Capitalización Alternada: Devuelve el texto original pero con cada letra en una posición alternada entre mayúsculas y minúsculas.
2. Reemplazo de Vocales: Reemplaza todas las vocales en el texto con el siguiente carácter vocal en el alfabeto (a->e, e->i, i->o, o->u, u->a).
3. Detección de Palabras Únicas: Devuelve una lista de todas las palabras únicas (no repetidas) que aparecen en el texto, ignorando la puntuación.

Entrada:
{
  "text": "Hello world! This is a test. Hello again."
}

Salida:
{
  "alternating_caps": "HeLlO WoRlD! ThIs Is A TeSt. HeLlO AgAiN.",
  "vowel_replacement": "Hille wurld! Thus os e tist. Hille egen.",
  "unique_words": ["world", "This", "is", "a", "test", "again"]
}
