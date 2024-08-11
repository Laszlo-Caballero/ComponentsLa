# Components La

Libreria de componentes de react basado en **Material Ui**,
creado con el hecho de aprender a hacer una libreria y usarlo en mis
proximos proyectos

## Instalacion

- npm

```bash
  npm install componentsla
```

- pnpm

```bash
  pnpm install componentsla
```

## Uso

```tsx
import { Typography } from "componentsla";

export default function Page() {
  return (
    <div>
      <Typography variant="p" text="paragraph">
        Parrafo
      </Typography>
    </div>
  );
}
```

## Aportar

1. Clonar proyecto

```bash
  git clone https://github.com/Laszlo-Caballero/ComponentsLa.git
```

2. Instalar dependencias

```bash
  npm install
```

3. Compilar proyecto

```bash
  npm run build
```

## TODOS

- [ ] Añadir test para componentes
- [ ] componentes polymorficos
- Mas componentes
  - [x] Box
    - [ ] componente polymofico
  - [x] Typography
    - [ ] componente polymorfico
  - [ ] Listas
  - [x] Carrusel
    - [ ] resposive desing
    - [x] claseNames dentro del componente y mejorar el cn
    - [x] pedir segundos al hacer el autoplay
    - [x] navegacion ciclica
    - [x] ver los botones de next o previous
    - [x] pedir width
    - [x] any en el interfaz del as ❔
    - [x] pedir iconos y eliminar componentsla-icons ⚠️
  - [x] Modal window
  - [x] Paginacion
    - [x] custom Icon y eliminar componentsla-icons ⚠️
    - [ ] Icon FirstButton y LastButton con sus funcionalidades
  - [ ] Tablas ❔
  - [x] Menu
    - [ ] Posicionarse arriba, abajo, izquierda, derecha totalmente
    - [ ] Para mantener las variantes debe haber un outline, text y el contained
    - [ ] Arreglar el position ⚠️
    - [ ] Arreglar el open
  - [x] Tabs
- Universal
  - [ ] Animaciones
  - [ ] Standar de colores
  - [x] Remover JSX en los props de los componentes por ReactElement
- Iconos
  - [ ] Añadir iconos
  - [x] Ponerlos en un solo archivo ⚠️
  - [x] Poner prop de color en hexadecimal
