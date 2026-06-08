import { services } from "../data/services.js";

function PopularServices() {
  return (
    <section
      className="content-section"
      id="servicos"
      aria-labelledby="services-title"
    >
      <div className="section-header">
        <div>
          <h2 id="services-title">Serviços mais populares</h2>
          <p>Procedimentos escolhidos pelas nossas clientes</p>
        </div>

        <a className="text-link" href="#servicos">
          Ver todos
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-image-placeholder">
              <span>{service.imageAlt}</span>
            </div>

            <div className="service-card-body">
              <span className="badge">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-meta" aria-label="Duracao e preco">
                <span>{service.duration}</span>
                <span>{service.price}</span>
              </div>

              <a className="card-button" href="#agendar">
                Agendar Agora
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PopularServices;
