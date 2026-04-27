import { useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Particles from './components/Particles';

function App() {
  useEffect(() => {
    const gooeyButtonConfig = {
      particleCount: 15,
      particleDistances: [90, 10],
      particleR: 100,
      animationTime: 600,
      timeVariance: 300,
      colors: [1, 2, 3, 1, 2, 3, 1, 4]
    };
    const gooeyPalette = {
      1: '#F4C430',
      2: '#0F5C3E',
      3: '#FFFFFF',
      4: '#E0B020'
    };

    function runGooeyAnimation(button, layer) {
      const minDistance = Math.min(...gooeyButtonConfig.particleDistances);
      const maxDistance = Math.max(...gooeyButtonConfig.particleDistances);
      const duration =
        gooeyButtonConfig.animationTime +
        Math.round((Math.random() - 0.5) * gooeyButtonConfig.timeVariance);

      button.animate(
        [
          { transform: 'translateY(0) scale(1)' },
          { transform: 'translateY(-1px) scale(0.985)' },
          { transform: 'translateY(0) scale(1)' }
        ],
        {
          duration: Math.max(220, duration),
          easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
        }
      );

      for (let i = 0; i < gooeyButtonConfig.particleCount; i += 1) {
        const particle = document.createElement('span');
        particle.className = 'btn-gooey-particle';
        const colorId = gooeyButtonConfig.colors[i % gooeyButtonConfig.colors.length];
        const angle =
          (Math.PI * 2 * i) / gooeyButtonConfig.particleCount + (Math.random() - 0.5) * 0.4;
        const distance = minDistance + Math.random() * (maxDistance - minDistance);
        const travel = distance + gooeyButtonConfig.particleR * 0.08;
        const x = Math.cos(angle) * travel;
        const y = Math.sin(angle) * travel;
        const size = 8 + Math.random() * 6;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = gooeyPalette[colorId] || gooeyPalette[1];
        layer.appendChild(particle);

        particle
          .animate(
            [
              { transform: 'translate(-50%, -50%) scale(0.3)', opacity: 0 },
              { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.95, offset: 0.2 },
              {
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.1)`,
                opacity: 0
              }
            ],
            {
              duration: Math.max(
                260,
                duration + Math.round((Math.random() - 0.5) * gooeyButtonConfig.timeVariance)
              ),
              easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
              fill: 'forwards'
            }
          )
          .onfinish = () => particle.remove();
      }
    }

    function buildGooeyButton(button) {
      if (button.querySelector('.btn-gooey-layer')) return null;

      const content = document.createElement('span');
      content.className = 'btn-content';
      while (button.firstChild) content.appendChild(button.firstChild);
      button.appendChild(content);

      const layer = document.createElement('span');
      layer.className = 'btn-gooey-layer';
      button.appendChild(layer);

      const onClick = () => runGooeyAnimation(button, layer);
      button.addEventListener('click', onClick);
      return () => button.removeEventListener('click', onClick);
    }

    const buttonCleanups = Array.from(document.querySelectorAll('.btn'))
      .map(buildGooeyButton)
      .filter(Boolean);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    const fadeNodes = document.querySelectorAll('.fade-in');
    fadeNodes.forEach(el => observer.observe(el));

    return () => {
      buttonCleanups.forEach(fn => fn());
      observer.disconnect();
    };
  }, []);

  const handleNewsletterSubmit = e => {
    e.preventDefault();
    window.alert('Demo: formulario validado.');
  };

  const handleContactSubmit = e => {
    e.preventDefault();
    window.alert('Demo: consulta enviada.');
  };

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', mixBlendMode: 'screen' }}>
        <Particles
          particleColors={['#0f5c3e', '#3ddc84', '#1a9e5c']}
          particleCount={250}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={80}
          alphaParticles={true}
          sizeRandomness={1}
          disableRotation={false}
        />
      </div>
      <LandingPage onNewsletterSubmit={handleNewsletterSubmit} onContactSubmit={handleContactSubmit} />
    </>
  );
}

export default App;
