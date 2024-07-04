# Notas rápidas 📌

#### Aquí voy a ir escribiendo detalles del codigo que me parece importante remarcar o explicar.

> Obtención de la fecha en español con Luxon:
> Aca lo que hice fue agregar `.setLocale("es")`

```javascript
const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Horario Local:' hh:mm a"
) =>
  DateTime.fromSeconds(secs + offset, { zone: "utc" })
    .setLocale("es")
    .toFormat(format);
```
