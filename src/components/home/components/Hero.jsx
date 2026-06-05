const heroHighlights = [
  'Profissionais certificados',
  'Tecnologia avancada',
  '+2.000 clientes',
];

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-media-placeholder" aria-label="Espaco para imagem principal da clinica" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="eyebrow">Bem-vinda a Lumiere Estetica</span>
        <h1 id="hero-title">Realce sua beleza natural</h1>
        <p>
          Procedimentos esteticos nao cirurgicos com tecnologia avancada e
          profissionais especializados para cuidar de voce.
        </p>

        <div className="hero-actions" id="agendar">
          <a className="primary-button" href="#servicos">
            Agendar seu horario
          </a>
          <a className="secondary-button" href="#servicos">
            Conhecer Servicos
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>

        <ul className="hero-highlights" aria-label="Diferenciais em destaque">
          {heroHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
