**Análisis y Debugging**
1. Identifique al menos 5 problemas de arquitectura o diseño.
   -La estructura de una order no está definida
   -create(order) agrega un elemento sin validar que este sea válido y retorna el mismo elemento
   -findAll() retorna todas las orders sin importar la cantidad de orders guardadas.
   -updateStatus(id,status) no verifica si los tipos de las variables id o status son válidas (tampoco hay forma de saber cual es el tipo válido)
   -updateStatus(id,status) asigna el resultado de una busqueda a una const y trata de modificarla, causando un error.
   -updateStatus(id,status) retorna el resultado de una busqueda.
2. Explique cómo refactorizaría esta implementación en un proyecto real de NestJS
   
   -Crearía class Order con sus propiedades debidamente definidas
   -variable orders [] pasaría a ser de tipo Order[]
   -create(order) validaría los datos de order, si fuesen válidos agregaría el elemento al array y retornaría true. Si fuesen invalidos retornaría false inmediatamente
   -findAll() recibiría argumentos from y qty, los que serían utilizados para retornar una sección del array de forma controlada para así evitar retornar n elementos al cliente.
   -updateStatus(id,status) validaría si id y status son de tipo correcto, realizaría busqueda por id y si es encontrado el elemento recién ahi realizaría el proceso de modificación copiando el array, modificandolo y reemplazando el array original con el modificado y retornaría true. Si los datos no son válidos o el elemento no se encuentra en el array retornaría false.