export default function validarCrearCuenta(valores) {
  let errores = {};

  // Valdar el nombre del usuario

  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }

  // Validar la empresa

  if (!valores.empresa) {
    errores.empresa = "El nombre de empresa es obligatoria";
  }

  // Validar la url

  if (!valores.url) {
    errores.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL mal formateada o no válida";
  }

  // Validar la descripcion

  if (!valores.descripcion) {
    errores.descripcion = "Agrega la descripción de tu producto";
  }

  return errores;
}
