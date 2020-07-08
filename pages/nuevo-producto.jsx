import React, { useState } from "react";
import { css } from "@emotion/core";
import Router from "next/router";
import Layout from "../componentes/layout/Layout";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../componentes/ui/Formulario";

import firebase from "../firebase";

// Importar validaciones

import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  imagen: "",
  url: "",
  descripcion: "",
};

const NuevoProducto = () => {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, empresa, imagen, url, descripcion } = valores;

  async function crearCuenta() {}
  return (
    <Layout>
      <>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >
          Nuevo Producto
        </h1>
        <Formulario onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Información General</legend>

            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre Producto"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            <Campo>
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                placeholder="Nombre Empresa o Compañía"
                name="empresa"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.empresa && <Error>{errores.empresa}</Error>}
            <Campo>
              <label htmlFor="imagen">Imagen</label>
              <input
                type="file"
                id="imagen"
                name="imagen"
                value={imagen}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.imagen && <Error>{errores.imagen}</Error>}
            <Campo>
              <label htmlFor="url">URL</label>
              <input
                type="url"
                id="url"
                name="url"
                value={url}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.url && <Error>{errores.url}</Error>}
          </fieldset>
          <fieldset>
            <legend>Sobre tu Producto</legend>
            <Campo>
              <label htmlFor="descripcion">Descripción</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.descripcion && <Error>{errores.descripcion}</Error>}
          </fieldset>
          {error && <Error>{error}</Error>}
          <InputSubmit type="submit" value="Crear Producto" />
        </Formulario>
      </>
    </Layout>
  );
};

export default NuevoProducto;
