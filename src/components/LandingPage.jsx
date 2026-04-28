import LogoMark from './LogoMark';
import Stepper, { Step } from './Stepper';
import BorderGlow from './BorderGlow';

function LandingPage({ onNewsletterSubmit, onContactSubmit }) {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <LogoMark />
            <span className="nav-logo-text">GOcactus</span>
          </a>
          <BorderGlow borderRadius={8} glowRadius={20} edgeSensitivity={20}>
            <a href="#agendar" className="btn btn-primary btn-sm">Agendar</a>
          </BorderGlow>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-overline overline green">FORMACION FINANCIERA PARA NUESTRA GENERACION</div>
            <h1 className="h1 hero-title">El capital tiene una nueva generacion.</h1>
            <p className="body-lg hero-subtitle">
              Aprende a manejar tu plata con el respaldo de asesores financieros del mercado argentino. Agenda tu primera reunion sin costo.
            </p>
            <div className="hero-ctas">
              <BorderGlow borderRadius={8} glowRadius={24} edgeSensitivity={20}>
                <a href="#agendar" className="btn btn-primary">Agendar reunion gratuita -&gt;</a>
              </BorderGlow>
              <BorderGlow borderRadius={8} glowRadius={24} edgeSensitivity={20}>
                <a href="#proceso" className="btn btn-secondary">Conocer como trabajamos</a>
              </BorderGlow>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Descubri mas</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      <section className="problema">
        <div className="container-editorial">
          <div className="problema-text fade-in">
            <p><em>No te ensenaron a manejar tu plata. A nosotros tampoco.</em></p>
            <p><em>Crecimos viendo a nuestros padres pelearla con inflacion, corralitos y sueldos que no alcanzan. Sabemos que ahorrar en pesos es perder, pero nadie nos explico que hacer en su lugar.</em></p>
            <p className="highlight"><strong>GOcactus existe para cambiar eso.</strong></p>
          </div>
        </div>
      </section>

      <section className="camino">
        <div className="container">
          <div className="camino-header fade-in">
            <span className="overline yellow">COMO FUNCIONA</span>
            <h2 className="h2">Un recorrido pensado, desde lo basico hasta la decision.</h2>
          </div>
          <div className="camino-etapas">
            <div className="etapa fade-in">
              <span className="etapa-numero">01</span>
              <div className="etapa-titulo">Despertar</div>
              <p className="etapa-pregunta">"¿Que hago con mi plata?"</p>
              <p className="etapa-descripcion">Entender que esta pasando con tu dinero hoy.</p>
            </div>
            <div className="etapa fade-in">
              <span className="etapa-numero">02</span>
              <div className="etapa-titulo">Formacion</div>
              <p className="etapa-pregunta">"Ya se como funciona."</p>
              <p className="etapa-descripcion">Aprender los conceptos clave para moverte con criterio.</p>
            </div>
            <div className="etapa fade-in">
              <span className="etapa-numero">03</span>
              <div className="etapa-titulo">Criterio</div>
              <p className="etapa-pregunta">"Estoy listo para decidir."</p>
              <p className="etapa-descripcion">Tomar decisiones reales, acompanado por profesionales.</p>
            </div>
          </div>
          <p className="camino-footer fade-in">
            Este recorrido se construye en Instagram. La web es el puente al siguiente paso.
          </p>
        </div>
      </section>

      <section className="equipo">
        <div className="container">
          <div className="equipo-grid">
            <div className="equipo-content fade-in">
              <span className="overline green">EL EQUIPO DETRAS</span>
              <h2 className="h2">Asesores financieros profesionales, del mercado argentino.</h2>
              <p>
                Detras de GOcactus hay un equipo que trabaja todos los dias con clientes reales. Siguen el mercado, analizan oportunidades y ayudan a construir patrimonios. No son influencers - son profesionales con matricula, experiencia y respaldo institucional.
              </p>
              <a href="https://www.instagram.com/cactus.wealth/" target="_blank" rel="noopener noreferrer" className="equipo-tag" style={{ cursor: 'pointer' }}>En colaboracion con Cactus Wealth Management ↗</a>
              <br />
              <BorderGlow borderRadius={8} glowRadius={24} edgeSensitivity={20}>
                <a href="#agendar" className="btn btn-primary">Agendar reunion -&gt;</a>
              </BorderGlow>
            </div>
            <div className="equipo-card fade-in">
              <div className="equipo-card-item">
                <strong>Matricula CNV</strong>
                <span>Asesores registrados ante la Comision Nacional de Valores</span>
                <span style={{ display: 'block', marginTop: '6px', color: '#fff', fontSize: '13px' }}>Mateo Vicente, Agente Productor CNV 1463</span>
              </div>
              <div className="equipo-card-item">
                <strong>Experiencia real</strong>
                <span>Trabajando con clientes en el mercado argentino</span>
              </div>
              <div className="equipo-card-item">
                <strong>Respaldo institucional</strong>
                <span>Cactus Wealth Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proceso" id="proceso">
        <div className="container">
          <div className="proceso-header fade-in">
            <span className="overline green">EL PROCESO</span>
            <h2 className="h2">Que pasa cuando agendas una reunion.</h2>
          </div>
          <div className="proceso-pasos">
            <div className="paso fade-in">
              <div className="paso-numero">01</div>
              <h3 className="h3">Primera charla</h3>
              <p>Sin costo, sin compromiso. Entendemos que queres lograr y en que momento financiero estas.</p>
            </div>
            <div className="paso fade-in">
              <div className="paso-numero">02</div>
              <h3 className="h3">Diagnostico personalizado</h3>
              <p>Armamos una vision clara de tu situacion y te mostramos las oportunidades que tenes hoy.</p>
            </div>
            <div className="paso fade-in">
              <div className="paso-numero">03</div>
              <h3 className="h3">Acompanamiento</h3>
              <p>Si decidis avanzar, trabajamos con vos mes a mes. Con claridad, sin sorpresas, sin presiones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-agendar" id="agendar">
        <div className="container">
          <div className="fade-in">
            <span className="overline yellow">AGENDAR</span>
            <h2 className="h2">Reserva tu reunion.</h2>
            <p className="cta-agendar-subtitle">30 minutos. Sin costo. Sin compromiso.</p>
            <div className="calendly-placeholder">
              <div className="calendly-placeholder-icon">⌖</div>
              <div>Espacio reservado para Calendly</div>
              <div className="tiny">Una vez aprobado el proyecto, aca se pone el calendario real</div>
            </div>
            <p className="cta-agendar-caption">Atencion personalizada en horario comercial de Argentina (GMT-3).</p>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container-narrow">
          <div className="fade-in">
            <span className="overline subtle">NEWSLETTER</span>
            <h2 className="h2">¿Todavia no estas listo?<br />Acompanamos tu camino.</h2>
            <p className="newsletter-subtitle">Una idea financiera bien pensada, cada semana. Sin spam. Sin ruido.</p>
            <form className="newsletter-form" onSubmit={onNewsletterSubmit}>
              <input type="email" placeholder="tu@email.com" required />
              <BorderGlow borderRadius={8} glowRadius={20} edgeSensitivity={20}>
                <button type="submit" className="btn btn-primary">Suscribirme</button>
              </BorderGlow>
            </form>
            <p className="newsletter-caption">Podes cancelar cuando quieras.</p>
          </div>
        </div>
      </section>

      <section className="contacto">
        <div className="container-narrow">
          <div className="fade-in">
            <span className="overline green">CONTACTO</span>
            <h2 className="h2">¿Tenes una consulta especifica?</h2>
            <p className="contacto-subtitle">Contanos que necesitas y te respondemos en 48 horas.</p>
          </div>
          <Stepper
            backButtonText="Volver"
            nextButtonText="Siguiente"
            onFinalStepCompleted={onContactSubmit}
          >
            <Step>
              <h2>¿Cómo te llamás?</h2>
              <p>Empecemos por conocerte un poco.</p>
              <input type="text" placeholder="Tu nombre completo" />
              <input type="email" placeholder="Tu email" style={{ marginTop: '0.75rem' }} />
            </Step>
            <Step>
              <h2>¿Sobre qué tema?</h2>
              <p>Seleccioná el asunto de tu consulta.</p>
              <select>
                <option value="">Seleccioná un asunto</option>
                <option>Consulta general</option>
                <option>Inversiones</option>
                <option>Ya soy cliente</option>
                <option>Otro</option>
              </select>
            </Step>
            <Step>
              <h2>Contanos más</h2>
              <p>Describí tu consulta con el detalle que quieras.</p>
              <textarea placeholder="Contanos en que podemos ayudarte..." />
            </Step>
          </Stepper>
          <p className="contacto-caption" style={{ textAlign: 'center', marginTop: '1rem' }}>
            Al enviar, aceptas nuestra politica de privacidad.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="nav-logo">
                <LogoMark />
                <span className="nav-logo-text">GOcactus</span>
              </a>
              <p className="footer-tagline">El patrimonio de nuestra generacion.</p>
              <div className="footer-socials">
                <a href="#" className="footer-social-icon" title="Instagram">IG</a>
                <a href="#" className="footer-social-icon" title="TikTok">TK</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Navegacion</h4>
              <ul>
                <li><a href="#agendar">Agendar</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">TikTok</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Institucional</h4>
              <ul>
                <li><a href="#">Sobre el equipo</a></li>
                <li><a href="#">Cactus Wealth</a></li>
                <li><a href="#">Privacidad</a></li>
                <li><a href="#">Aviso legal</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 GOcactus · Una iniciativa educativa respaldada por Cactus Wealth Management.</p>
            <p className="footer-disclaimer">
              GOcactus produce contenido educativo general y no constituye recomendacion personalizada de inversion. Las inversiones presentan riesgos, incluyendo la posible perdida del capital invertido. Los rendimientos pasados no garantizan rendimientos futuros.
            </p>
          </div>
        </div>
      </footer>

      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
        <filter id="gooey-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
      1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 20 -10"
            result="gooey"
          />
          <feBlend in="SourceGraphic" in2="gooey" />
        </filter>
      </svg>
    </>
  );
}

export default LandingPage;
