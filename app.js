fetch('./data/content.json')
  .then(resp => resp.json())
  .then(data => {
    document.getElementById('titulo').textContent = data.titulo;
    document.getElementById('descripcion').textContent = data.descripcion;

    const img = document.getElementById('foto');
    if (data.imagen) {
      img.src = data.imagen;
      img.style.display = 'block';
    }
  })
  .catch(err => {
    console.error('❌ Error al cargar contenido:', err);
  });
