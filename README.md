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

```ts
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
- Mas componentes
  - [ ] Listas
  - [ ] Carrusel
  - [ ] Modal window
  - [ ] Paginacion
  - [ ] Tablas ❔
  - [ ✅ ] Menu
- Universal
  - [ ] Animaciones
  - [ ] Standar de colores
- Iconos
  - [ ] Añadir iconos
  - [ ] Ponerlos en un solo archivo ❔
