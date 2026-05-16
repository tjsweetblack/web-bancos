import React from 'react';

function LandingPage({ onNavigate }) {
  return (
    <div style={{ flex: 1, width: '100%', height: '100vh', overflowY: 'auto', background: 'var(--bg-body)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Logo SVG mimicking the provided image */}
          <svg viewBox="0 0 220 40" style={{ height: '32px', fill: 'var(--brand-blue)' }}>
            {/* The 3 bars */}
            <rect x="5" y="20" width="8" height="15" />
            <rect x="17" y="12" width="8" height="23" />
            <rect x="29" y="4" width="8" height="31" />
            <rect x="0" y="35" width="42" height="5" />
            {/* Text KANDONGA */}
            <text x="48" y="32" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="26" letterSpacing="1px">KANDONGA</text>
          </svg>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="btn-primary" onClick={() => onNavigate('login')}>Entrar no Sistema</button>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '800px', lineHeight: '1.2' }}>
          Gestão Inteligente de <span style={{ color: 'var(--brand-blue)' }}>Crédito Comercial</span>
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', lineHeight: '1.6' }}>
          Acelere as aprovações e reduza a inadimplência com a nossa plataforma integrada ao Angolan GPO. Feito para empresas modernas.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="btn-primary" onClick={() => onNavigate('login')} style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '8px' }}>
            Começar Agora
            <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'currentColor', marginLeft: '8px' }}><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>
          </button>
          <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '8px' }}>
            Saiba Mais
          </button>
        </div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '80px', maxWidth: '1000px', width: '100%' }}>
          <div className="panel" style={{ padding: '32px', textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: '#3730a3' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Análise Rápida</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Motor de decisão em tempo real que processa pedidos de crédito instantaneamente usando nossa tecnologia proprietária.</p>
          </div>
          <div className="panel" style={{ padding: '32px', textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: '#166534' }}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Integração GPO</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Liquidação de créditos diretamente conectada ao Angolan GPO com fluxos de transação automáticos e seguros.</p>
          </div>
          <div className="panel" style={{ padding: '32px', textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: '#9a3412' }}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h4v2h-2v4zm3-8H9V2h6v2z"/></svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Gestão de Risco</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Scorecards dinâmicos com análise multidimensional para proteger sua operação contra inadimplência.</p>
          </div>
        </div>
      </main>

      <footer style={{ padding: '24px 48px', borderTop: '1px solid var(--border)', background: 'var(--bg-surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>&copy; 2026 Kandonga Analytics. Todos os direitos reservados.</div>
        <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: 'var(--text-secondary)' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Termos</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidade</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
