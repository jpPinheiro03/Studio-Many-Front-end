const heroHighlights = [
  "Profissionais certificados",
  "Tecnologia avançada",
  "+2.000 clientes",
];

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div
        className="hero-media-placeholder"
        aria-label="Espaço para imagem principal da clínica"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="eyebrow">Bem-vinda à Many Studio</span>
        <h1 id="hero-title">Realce sua beleza natural</h1>
        <p>
          Procedimentos estéticos não cirúrgicos com tecnologia avançada e
          profissionais especializados para cuidar de você.
        </p>

        <div className="hero-actions" id="agendar">
          <a className="primary-button" href="#servicos">
            Agendar seu horário
          </a>
          <a className="secondary-button" href="#servicos">
            Conhecer Serviços
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
