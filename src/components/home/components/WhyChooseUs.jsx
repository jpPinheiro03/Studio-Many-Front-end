import { benefits } from "../data/benefits.js";

function WhyChooseUs() {
  return (
    <section className="why-section" aria-labelledby="why-title">
      <div className="why-header">
        <span className="eyebrow light">Por que nos escolher</span>
        <h2 id="why-title">Excelência em cada detalhe</h2>
        <p>
          Combinamos tecnologia, profissionais qualificados e um ambiente
          acolhedor para a sua melhor experiência.
        </p>
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <span className="benefit-icon" aria-hidden="true">
              {benefit.icon}
            </span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
