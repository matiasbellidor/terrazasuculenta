// La pantalla de carga se muestra como máximo una vez cada 12 horas por dispositivo.
// Lo usan components/Preloader.jsx y el script de app/layout.jsx (que corre antes de React).
export const CLAVE_PRELOADER = "ts-preloader-visto";
export const VIGENCIA_PRELOADER = 12 * 60 * 60 * 1000;

export const SCRIPT_PRELOADER = `try{var t=Number(localStorage.getItem("${CLAVE_PRELOADER}"));if(t&&Date.now()-t<${VIGENCIA_PRELOADER})document.documentElement.setAttribute("data-preloader-visto","")}catch(e){}`;
