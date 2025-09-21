import { useMemo } from 'react';
import './App.css';

const scheduleItems = [
  {
    time: '14:00 - 17:00',
    description: 'Kaffe og kage på Galaksevej 5.',
  },
  {
    time: '17:00 - 18:00',
    description: 'Kører vi hver især til Retroarkaden i Glostrup.',
  },
  {
    time: '18:00 - 22:00',
    description: 'Er der frileg på alle maskinerne i Retroarkaden.',
  },
  {
    time: '19:00 - 20:30',
    description: 'Kommer mobilpølsen forbi med en hotter og en bøfsandwich.',
  },
  {
    time: '22:00',
    description: 'God nat og tak for i dag :-).',
  },
];

const wishlistItems = [
  'Donationer til en pladespiller',
  'Starten på en pladesamling',
  'En søjleboremaskine',
  'Overraskelser (ikke alkohol :-) ).',
];

function PixelDragons() {
  return (
    <div className="pixel-dragons" aria-hidden="true">
      <svg
        className="pixel-dragons__sprite pixel-dragons__sprite--green"
        viewBox="0 0 120 120"
        role="presentation"
      >
        <defs>
          <radialGradient id="dragonGreen" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#c6ffd2" />
            <stop offset="50%" stopColor="#5dd98e" />
            <stop offset="100%" stopColor="#2f9e5f" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="48" fill="url(#dragonGreen)" />
        <ellipse cx="60" cy="82" rx="28" ry="20" fill="#ffe66d" />
        <circle cx="45" cy="52" r="10" fill="#ffffff" />
        <circle cx="45" cy="52" r="5" fill="#1b1646" />
        <circle cx="75" cy="54" r="6" fill="#ffffff" />
        <circle cx="75" cy="54" r="3" fill="#1b1646" />
        <path
          d="M45 88 Q60 102 75 88"
          fill="none"
          stroke="#1b1646"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M32 34 L20 22 L28 46"
          fill="#ffb347"
          stroke="#ffb347"
          strokeLinejoin="round"
        />
        <path
          d="M90 92 Q104 96 108 110"
          fill="#ff6f91"
          stroke="#ff6f91"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="pixel-dragons__sprite pixel-dragons__sprite--blue"
        viewBox="0 0 120 120"
        role="presentation"
      >
        <defs>
          <radialGradient id="dragonBlue" cx="45%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#d9f0ff" />
            <stop offset="55%" stopColor="#7dc7ff" />
            <stop offset="100%" stopColor="#3c7eff" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="46" fill="url(#dragonBlue)" />
        <ellipse cx="60" cy="80" rx="26" ry="18" fill="#ffd1dc" />
        <circle cx="47" cy="52" r="9" fill="#ffffff" />
        <circle cx="47" cy="52" r="4" fill="#1b1646" />
        <circle cx="73" cy="54" r="6" fill="#ffffff" />
        <circle cx="73" cy="54" r="3" fill="#1b1646" />
        <path
          d="M42 90 Q60 106 78 90"
          fill="none"
          stroke="#1b1646"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M88 34 L102 18 L96 44"
          fill="#ffd166"
          stroke="#ffd166"
          strokeLinejoin="round"
        />
        <path
          d="M30 94 Q18 100 16 114"
          fill="#9c6bff"
          stroke="#9c6bff"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
      <div className="pixel-dragons__bubbles">
        <span className="pixel-dragons__bubble pixel-dragons__bubble--one" />
        <span className="pixel-dragons__bubble pixel-dragons__bubble--two" />
        <span className="pixel-dragons__bubble pixel-dragons__bubble--three" />
      </div>
    </div>
  );
}

export default function App() {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        id: index,
        size: Math.floor(Math.random() * 28) + 24,
        delay: Math.random() * 10,
        duration: Math.random() * 14 + 12,
        left: Math.random() * 100,
      })),
    []
  );

  return (
    <div className="app">
      <div className="bubble-field" aria-hidden="true">
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
              left: `${bubble.left}%`,
            }}
          />
        ))}
      </div>

      <header className="hero">
        <PixelDragons />
        <p className="hero__eyebrow">Retro Arcade 50-års fejring</p>
        <h1>Ulrich fylder 50!</h1>
        <p className="hero__date">11. oktober</p>
        <p className="hero__intro">
          Den store dag bliver fyldt med Bubble Bobble-stemning, blinkende neonlys
          og fælles grin. Vi samler alle vennerne til et nostalgisk event, hvor
          spillene er sat på free play, og boblerne aldrig stopper.
        </p>
        <div className="hero__cta" role="status">
          <span className="hero__cta-label">Arcade mode aktiveret</span>
          <span className="hero__cta-detail">
            Klar til en hel dag med retroklassikere, high scores og søde overraskelser.
          </span>
        </div>
      </header>

      <main>
        <section className="card">
          <h2>Planen for dagen</h2>
          <p className="card__subtitle">
            Vi starter blødt med hygge hjemme hos os, og fortsætter med pixelmagi
            i arkaden resten af aftenen.
          </p>
          <ul className="timeline">
            {scheduleItems.map((item) => (
              <li key={item.time} className="timeline__item">
                <span className="timeline__time">{item.time}</span>
                <span className="timeline__dot" aria-hidden="true"></span>
                <p className="timeline__description">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Ønskeliste</h2>
          <p className="card__subtitle">
            Hvis du har lyst til at hjælpe med næste kapitel, er her lidt
            inspiration.
          </p>
          <ul className="wishlist">
            {wishlistItems.map((wish) => (
              <li key={wish} className="wishlist__item">
                <span className="wishlist__icon" aria-hidden="true">★</span>
                <span>{wish}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Praktisk information</h2>
          <p className="card__subtitle">Parkering og logistik</p>
          <p>
            Da der kommer en del biler vil det være praktisk at parkere
            heromkring:
          </p>
          <a
            className="link"
            href="https://maps.app.goo.gl/4zRS69gia4rLiLJPA"
            target="_blank"
            rel="noreferrer"
          >
            Åbn parkeringskortet
          </a>
        </section>
      </main>

      <footer className="footer">Jeg glæder mig til at se jer alle sammen :-).</footer>
    </div>
  );
}
