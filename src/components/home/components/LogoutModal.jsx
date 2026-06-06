function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="logout-title">
      <div className="modal-card">
        <h2 className="modal-title" id="logout-title">Sair da conta</h2>
        <p className="modal-message">Tem certeza que deseja sair?</p>
        <div className="modal-actions">
          <button className="ghost-action" type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button className="modal-confirm" type="button" onClick={onConfirm}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
