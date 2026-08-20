# YouTube Layout: Video fijo + Comentarios

Extensión de Chrome que reordena la página de video de YouTube:
el video queda fijo a la izquierda mientras los comentarios se
muestran a la derecha con scroll independiente.

## Cómo funciona

- `content/content.js` mueve el bloque de comentarios (`#comments`)
  al inicio de la columna derecha (`#secondary`).
- `content/styles.css` aplica `position: sticky` a la columna del
  video (`#primary`), que al ser más corta que la columna derecha
  queda fija mientras el resto del contenido se desplaza.

## Instalación (modo desarrollador)

1. Abre `chrome://extensions` en Chrome.
2. Activa el "Modo de desarrollador" (esquina superior derecha).
3. Haz clic en "Cargar descomprimida".
4. Selecciona esta carpeta (`youtube-layout-extension`).
5. Abre cualquier video en `https://www.youtube.com/watch?v=...`.

## Notas

- Funciona en la vista de escritorio de YouTube (donde existe la
  columna `#secondary`); no aplica en layouts móviles de una sola
  columna.
- Si YouTube cambia el alto de su header, ajusta el valor `top` en
  `content/styles.css`.

## Publicar en la Chrome Web Store

Ya está generado `../youtube-layout-extension.zip` (fuera de esta
carpeta) con `manifest.json`, `content/` y `assets/` listos para subir.

1. Crea una cuenta en el [Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   (cuota única de registro de $5 USD).
2. "New item" → sube `youtube-layout-extension.zip`.
3. Completa el listing: nombre, descripción, categoría, capturas de
   pantalla (mínimo 1, 1280×800 o 640×400) y el ícono de tienda 128×128
   (puedes usar `assets/icon-128.png`).
4. En "Privacy practices" justifica el acceso a `youtube.com`
   (content script que solo reordena el layout, sin recolectar datos)
   y declara que no recolectas datos de usuario.
5. Envía a revisión.

Si cambias el código, sube la versión en `manifest.json` (ej. `1.0.0`
→ `1.0.1`) y regenera el zip:

```bash
cd youtube-layout-extension
zip -r ../youtube-layout-extension.zip manifest.json content assets
```

Los iconos actuales (`assets/icon.svg` y los PNG generados a partir de
él) son un placeholder simple; reemplázalos si quieres un diseño
propio antes de publicar.
