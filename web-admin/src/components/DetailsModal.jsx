import React from 'react';

function DetailsModal({ setView }) {
  return (
    <div className="view-content fullscreen active" id="view-details">
      <header className="topbar" style={{ borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', background: 'var(--bg-body)', flexShrink: 0, height: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => setView('creditos')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: '0.2s' }}>
            <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'currentColor' }}><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          </button>
          <h2 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Pedido #KZ-88291</h2>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary" style={{ color: 'var(--text-secondary)' }}>Revisão</button>
          <button className="btn-secondary" style={{ color: 'var(--text-secondary)' }}>Negar</button>
          <button className="btn-primary">Admitir</button>
        </div>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', padding: '32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 300px', gap: '24px', marginBottom: '24px' }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Company Info */}
            <div className="panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ width: '64px', height: '64px', background: 'var(--bg-body)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', border: '1px solid var(--border)' }}>
                  <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px', fill: 'var(--brand-blue)' }}><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Angola Logistics S.A.</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Setor: Transporte & Logística</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '11px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Localização</span><span style={{ color: 'var(--text-primary)' }}>Luanda, AO</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Tempo de Mercado</span><span style={{ color: 'var(--text-primary)' }}>8 Anos</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Funcionários</span><span style={{ color: 'var(--text-primary)' }}>124</span></div>
              </div>
            </div>

            {/* Financial Summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '10px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px' }}>Resumo Financeiro (Kz)</h4>
              <div className="panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '4px', fontWeight: '500' }}>Receita Anual</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>45.2M</div>
                </div>
                <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'var(--brand-blue)' }}><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
              </div>
              <div className="panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '4px', fontWeight: '500' }}>Despesa Operacional</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>12.8M</div>
                </div>
                <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: '#d67b7b' }}><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg>
              </div>
              <div className="panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(7, 212, 3, 0.2)', background: 'rgba(7, 212, 3, 0.05)' }}>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--brand-blue)', marginBottom: '4px', fontWeight: '600' }}>Lucro Líquido</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>32.4M</div>
                </div>
                <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'var(--brand-blue)' }}><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>PONTUAÇÃO</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>Análise multidimensional de risco de crédito</p>
              </div>
              <div style={{ background: 'var(--bg-body)', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: '500' }}>Atualizado: Hoje, 10:45</div>
            </div>

            {/* Circular Gauge Mock */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <svg width="240" height="240" viewBox="0 0 240 240">
                <circle cx="120" cy="120" r="90" fill="none" stroke="#1e2430" strokeWidth="14"></circle>
                <circle cx="120" cy="120" r="90" fill="none" stroke="#a3e635" strokeWidth="14" strokeDasharray="565.48" strokeDashoffset="89" strokeLinecap="round" transform="rotate(-90 120 120)"></circle>
              </svg>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: '700', color: 'var(--text-primary)' }}>842</div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#a3e635', letterSpacing: '1px' }}>EXCELENTE</div>
              </div>
            </div>
            
            {/* Linear Scale below gauge */}
            <div style={{ marginTop: '32px', marginBottom: '48px' }}>
              <div className="risk-bar" style={{ background: 'linear-gradient(90deg, #d67b7b 0%, #facc15 50%, #4ade80 100%)' }}>
                <div className="risk-marker" style={{ left: '84.2%' }}></div>
              </div>
              <div className="risk-labels" style={{ marginTop: '8px' }}>
                <span>0</span>
                <span>400</span>
                <span>700</span>
                <span>1000</span>
              </div>
            </div>

            {/* 4 smaller bars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Histórico de Crédito</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>92/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '92%', background: 'var(--brand-blue)' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Capacidade de Pagamento</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>88/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '88%', background: 'var(--brand-blue)' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estabilidade Operacional</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>75/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '75%', background: 'var(--brand-blue)' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Liquidez de Mercado</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>81/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '81%', background: 'var(--brand-blue)' }}></div></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Documentação */}
            <div className="panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>Documentação</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    Alvará Comercial
                  </div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></div>
                </div>
                <div style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6L12 1z"/></svg>
                    Extrato Bancário (6M)
                  </div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></div>
                </div>
                <div style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    Certidão Fiscal
                  </div>
                  <span className="badge" style={{ background: 'var(--brand-blue)', color: '#fff', fontSize: '9px', padding: '2px 6px' }}>PENDENTE</span>
                </div>
                <div style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                    Relatório Auditoria
                  </div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></div>
                </div>
              </div>
              <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Ver Todos Documentos</button>
            </div>

            {/* Log de Auditoria */}
            <div className="panel" style={{ padding: '24px', flex: 1 }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '24px' }}>Log de Auditoria</h3>
              <div style={{ position: 'relative', paddingLeft: '20px' }}>
                <div style={{ position: 'absolute', left: '4px', top: '8px', bottom: '8px', width: '2px', background: 'var(--bg-body)' }}></div>
                
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--bg-surface)', border: '2px solid var(--brand-blue)', boxShadow: '0 0 0 2px rgba(120,153,212,0.2)' }}></div>
                  <div style={{ fontSize: '11px', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '4px' }}>Documentação Analisada</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Há 2 horas por KANDONGA</div>
                </div>
                
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--border)' }}></div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '4px' }}>Consulta de Bureau</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>Ontem, 14:20 via API</div>
                </div>
                
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--border)' }}></div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '4px' }}>Pedido Submetido</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>05 Out, 09:12</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transações Recentes */}
        <div className="panel" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>Transações Recentes</h3>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg></button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Entidade</th>
                <th>Natureza</th>
                <th>Valor (Kz)</th>
                <th style={{ textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ pointerEvents: 'none' }}>
                <td style={{ color: 'var(--text-secondary)' }}>12/10/2023</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Sonangol Distr.</td>
                <td style={{ color: 'var(--text-secondary)' }}>Pagamento Fornecedor</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>1,240,000</td>
                <td style={{ textAlign: 'right' }}><span className="badge" style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', borderColor: 'rgba(74, 222, 128, 0.2)' }}>Concluído</span></td>
              </tr>
              <tr style={{ pointerEvents: 'none' }}>
                <td style={{ color: 'var(--text-secondary)' }}>11/10/2023</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Unitel Empresas</td>
                <td style={{ color: 'var(--text-secondary)' }}>Serviços Mensais</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>85,400</td>
                <td style={{ textAlign: 'right' }}><span className="badge" style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', borderColor: 'rgba(74, 222, 128, 0.2)' }}>Concluído</span></td>
              </tr>
              <tr style={{ pointerEvents: 'none' }}>
                <td style={{ color: 'var(--text-secondary)' }}>09/10/2023</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Talatona Mall</td>
                <td style={{ color: 'var(--text-secondary)' }}>Renda Escritório</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>450,000</td>
                <td style={{ textAlign: 'right' }}><span className="badge" style={{ background: 'rgba(250, 204, 21, 0.1)', color: '#facc15', borderColor: 'rgba(250, 204, 21, 0.2)' }}>Processando</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
