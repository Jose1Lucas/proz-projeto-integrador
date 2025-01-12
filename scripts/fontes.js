function mostrarInformacoes(tipo) {
  // Esconde todas as seções
  const mitologias = document.querySelectorAll(
    ".mitologia-grega, .mitologia-romana"
  );
  mitologias.forEach((el) => (el.style.display = "none"));

  if (tipo === "grega") {
    document.querySelector(".mitologia-grega").style.display = "block";
  } else if (tipo === "romana") {
    document.querySelector(".mitologia-romana").style.display = "block";
  }
}
