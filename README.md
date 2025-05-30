# GENERATE ACCESS TOKEN FIREBASE

Proyecto para generar access token de firebase y disparar notificaciones de prueba

## Getting Started

El proyecto trabaja con clave privada, generada en la seccion de cuenta de servicios de firebase que debe tener roles de admin y estar encriptada en base 64, por ejemplo con https://codebeautify.org/json-to-base64-converter

### URL

Esta es la url que debe tener el nombre del proyecto (nsv-dev) y como Bearer token el access token resultante de este proyecto

https://fcm.googleapis.com/v1/projects/nsv-dev/messages:send

### BODY

```
{
  "message":{
     "token":"token del dispositivo",
     "android":{
       "priority":"high",
       "collapse_key": "pe.maquisistema.sales_app",
       "data": {
            "title":"Registro de datos",
            "body":"Faltan 8 datos para la evaluacion automatica, los datos son ...",
            "notification_style": "2",
            "bigText": "Faltan 8 datos Lorem <i>ipsum dolor sit</i> amet, consectetur <b>adipiscing elit</b>,<br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "payload": "https://www.google.com.pe/?hl=es"
       }
     },
     "apns": {
      "headers": {
        "apns-priority": "10"
      },
      "payload": {
        "aps": {
          "alert": {
            "title": "Registro de datos",
            "body": "Faltan 8 datos para la evaluación automática, los datos son ..."
          },
          "sound": "default",
          "badge": 1,
          "mutable-content": 1,
          "content-available": 1,
          "category": "pe.maquisistema.sales_app"
        },
        "notification_style": "2",
        "bigText": "Faltan 8 datos Lorem <i>ipsum dolor sit</i> amet, consectetur <b>adipiscing elit</b>,<br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "payload": "https://www.google.com.pe/?hl=es"
      }
    }
   }
 }
```
