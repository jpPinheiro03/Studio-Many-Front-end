const accessBenefits = [
  {
    title: "Agendamento online 24h",
    description: "Reserve seu horário a qualquer momento.",
  },
  {
    title: "Profissionais certificados",
    description: "Equipe especializada e experiente.",
  },
  {
    title: "Histórico completo",
    description: "Acompanhe todos os seus tratamentos.",
  },
];

function AuthAside() {
  return (
    <aside className="auth-aside">
      <div
        className="auth-aside-image-placeholder"
        aria-label="Espaço para imagem da área de acesso"
      />
      <div className="auth-aside-overlay" />

      <div className="auth-aside-content">
        <span className="auth-chip">Bem-vinda de volta</span>
        <h2>Sua beleza, nossa prioridade.</h2>
        <p>
          Acesse sua conta para gerenciar seus agendamentos, acompanhar seu
          histórico e descobrir tratamentos exclusivos para realçar sua beleza
          natural.
        </p>

        <ul>
          {accessBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span aria-hidden="true">o</span>
              <div>
                <strong>{benefit.title}</strong>
                <small>{benefit.description}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default AuthAside;
