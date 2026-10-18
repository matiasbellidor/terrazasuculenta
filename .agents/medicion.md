# Plan de medición: Google Analytics 4

**Herramienta:** GA4 con `@next/third-parties`.
**Última actualización:** 2026-10-18.

## Cómo activarlo (una sola vez)
1. Entrá a https://analytics.google.com con la cuenta de Google del negocio y creá una propiedad "Terraza Suculenta" (zona horaria Argentina, moneda ARS).
2. Creá un flujo de datos "Web" con la URL del sitio en vercel.app y copiá el **ID de medición** (empieza con `G-`).
3. En Vercel: proyecto > Settings > Environment Variables, agregá `NEXT_PUBLIC_GA_ID` con ese ID, en el entorno Production.
4. Volvé a publicar el sitio: Deployments > Redeploy. Mientras la variable no exista, el sitio no carga Analytics.
5. En GA4: Administrar > Eventos, marcá `generate_lead` como **evento clave**.
6. En GA4: Administrar > Definiciones personalizadas, creá estas dimensiones de alcance "Evento": `ubicacion`, `producto` e `idioma`.

## Eventos

| Evento | Cuándo se dispara | Parámetros | Para qué sirve |
|---|---|---|---|
| `page_view` | Automático, en cada página | (los de GA4) | Tráfico y de dónde viene |
| `click` (saliente) | Automático, con la medición mejorada de GA4 activada | `link_url` | Clics a Instagram |
| `view_item` | Al abrir la ventana de detalle o una ficha `/suculentas/...` | `currency`, `value`, `items` | Qué plantas interesan más |
| `generate_lead` | Clic en cualquier botón de WhatsApp | `method` = whatsapp; `ubicacion`; `producto` (slug o "consulta"); `idioma`; `currency` y `value` si es de una planta | **Conversión principal**: qué planta y qué botón generan mensajes |

**Valores de `ubicacion`:** `barra`, `portada`, `tarjeta`, `detalle`, `ficha`, `preguntas`, `pie`.

**Limitación:** el evento cuenta clics en "Comprar por WhatsApp", no ventas cerradas. La venta se confirma en el chat.

## Link para la bio de Instagram
Usá este link en la bio, reemplazando el dominio por el real:

`https://(tu-proyecto).vercel.app/?utm_source=instagram&utm_medium=social&utm_campaign=bio`

Así las visitas que llegan desde Instagram aparecen separadas en GA4. Usá siempre minúsculas y guiones.
