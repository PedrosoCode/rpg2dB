// ContactPage.js
import React from "react";

function SheetsPage() {
  return (
    <div>
      <h1>Página de Fichas</h1>
      {/* Conteúdo da página de contato */}
      <div class="container is-fullhd">
        <div class="notification is-primary">
          This container is <strong>fullwidth</strong> <em>until</em> the{" "}
          <code>$fullhd</code> breakpoint.
        </div>
      </div>
    </div>
  );
}

export default SheetsPage;
