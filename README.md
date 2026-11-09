# Médula Espinal, Neuronas & Fascículos - Neuroanatomía

Plataforma interactiva de estudio para Neuroanatomía basada exclusivamente en los apuntes y transcripción de clase:
- **Morfología & Corte Transversal en "H"**: 31 segmentos espinales (8C, 12T, 5L, 5S, 1Co), Ley de Bell-Magendie (raíz dorsal aferente y raíz ventral eferente), acueducto central con LCR, vértebra L1 y Cauda Equina (Cola de Caballo).
- **Los 3 Tipos de Neuronas Medulares**: Motoras (Alfa y Gama en astas ventrales), De Fascículo (cables ascendentes) e Interneuronas ("las chismosas del medio" que median arcos reflejos como el rotuliano).
- **Sustancia Gris**: Clasificación clásica por núcleos para examen (5 núcleos dorsales, 2 intermedios y 6 ventrales con somatotopía medial/proximal y lateral/distal) y 10 Láminas de Rexed (I a X).
- **Sustancia Blanca**: 3 columnas (dorsal, lateral y ventral) y 17 fascículos ascendentes y descendentes bajo la regla de clase: *"El nombre lo dice todo: de dónde comienza y hacia dónde va"*.
- **Herramientas**: Red conceptual interactiva, simulador de circuito reflejo, 24 tarjetas de estudio con volteo 3D, resumen de examen Cornell y visor de notas originales con audio timestamps.

---

## 🚀 Publicación en GitHub Pages

El proyecto ya cuenta con la configuración lista para desplegarse automáticamente sin errores de rutas relativas:

### Opción 1: Despliegue Automático con GitHub Actions (Recomendado)

El archivo `.github/workflows/deploy.yml` ya está configurado. Sigue estos pasos en tu repositorio de GitHub:

1. **Sube tu código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: plataforma de estudio de neuroanatomia lista para github pages"
   git branch -M main
   git remote add origin https://github.com/<TU_USUARIO>/<TU_REPOSITORIO>.git
   git push -u origin main
   ```

2. **Habilita GitHub Pages en tu repositorio**:
   - Ve a tu repositorio en GitHub y haz clic en **Settings** (Configuración).
   - En el menú lateral izquierdo, selecciona **Pages**.
   - En la sección **Build and deployment** > **Source**, selecciona: **GitHub Actions**.

3. ¡Listo! El workflow se ejecutará automáticamente en la pestaña **Actions** y publicará tu aplicación en:
   `https://<TU_USUARIO>.github.io/<TU_REPOSITORIO>/`

---

### Detalles Técnicos de Compatibilidad
- **Rutas Relativas (`base: './'`)**: En `vite.config.ts` se definió `base: './'`, lo que garantiza que los scripts, hojas de estilo CSS y recursos estáticos carguen correctamente sin importar el nombre del repositorio o subcarpeta.
- **Soporte SPA (`404.html`)**: El workflow crea automáticamente una copia de `index.html` como `404.html` para evitar errores 404 al recargar páginas.
- **Evitar Procesamiento de Jekyll (`.nojekyll`)**: Se incluye `.nojekyll` para que GitHub Pages sirva todos los archivos estáticos sin filtrado.
