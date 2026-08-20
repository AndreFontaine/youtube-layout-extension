// Mueve el bloque de comentarios (#comments) al inicio de la columna
// secundaria (#secondary). Al ser #primary (video) más corto que
// #secondary (comentarios + videos relacionados), el "position: sticky"
// definido en styles.css hace que el video quede fijo mientras el resto
// del contenido hace scroll normal de la página.

const SECONDARY_SELECTOR = "#secondary.ytd-watch-flexy";
const COMMENTS_SELECTOR = "ytd-comments#comments";

function moveCommentsToSecondary() {
  const secondary = document.querySelector(SECONDARY_SELECTOR);
  const comments = document.querySelector(COMMENTS_SELECTOR);

  if (!secondary || !comments) return;

  if (secondary.firstElementChild !== comments) {
    secondary.insertBefore(comments, secondary.firstChild);
  }
}

// YouTube es una SPA: al navegar entre videos no hay recarga completa,
// así que reaplicamos el layout en cada navegación interna.
document.addEventListener("yt-navigate-finish", moveCommentsToSecondary);

// Los comentarios pueden tardar en renderizarse (carga diferida), por lo
// que reintentamos periódicamente en vez de depender de un solo evento.
setInterval(moveCommentsToSecondary, 1000);

moveCommentsToSecondary();
