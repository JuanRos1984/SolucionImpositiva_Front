# SolucionImpositiva_Front
Frontend del proyecto para la prueba técnica

Aplicación Angular para consultar y visualizar información de contribuyentes y sus comprobantes fiscales, utilizando Angular Material para la interfaz.

## Características

- Listado de contribuyentes con datos básicos.
- Consulta de comprobantes fiscales asociados a cada contribuyente.
- Visualización de detalles y suma de ITBIS de los comprobantes en un diálogo modal.
- Notificaciones de error con SweetAlert2.

## Tecnologías usadas

- [Angular 20](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [SweetAlert2](https://sweetalert2.github.io/)
- RxJS

## Requisitos

- Node.js (recomendado: 20.x o superior)
- Angular CLI (`@angular/cli` 20.x)

## Instalación

1. Clonar el repositorio,
2. Instalar las dependencias

## Ejecución en desarrollo

ng serve
Luego abre [http://localhost:4200](http://localhost:4200) en tu navegador.


## Estructura del Proyecto

- `src/app/components/contribuyentes-view`: Componente principal de listado.
- `src/app/components/comprobantes-dialog`: Diálogo para mostrar comprobantes.
- `src/app/services/contribuyente.ts`: Servicio para obtener contribuyentes.
- `src/app/services/comprobantes.ts`: Servicio para obtener comprobantes.

---

¿Quieres agregar detalles sobre endpoints de la API, ejemplos de respuesta, o instrucciones para despliegue en producción? Si necesitas que revise algún archivo más (como los servicios o el `angular.json`), házmelo saber.
