import { useMemo } from 'react';
import './App.css';

const scheduleItems = [
  {
    time: '14:00 - 17:00',
    description: 'Kaffe og kage på Galaksevej 5',
  },
  {
    time: '17:00 - 18:00',
    description: 'Vi kører hver især til Retroarkaden i Glostrup',
  },
  {
    time: '18:00 - 22:00',
    description: 'Frileg på alle maskinerne i Retroarkaden',
  },
  {
    time: '19:00 - 20:30',
    description: 'Mobilpølsen kommer forbi med hottere og bøfsandwich',
  },
  {
    time: '22:00',
    description: 'God nat og tak for i dag :-)',
  },
];

const wishlistItems = [
  'Donationer til en pladespiller',
  'Starten på en pladesamling',
  'En søjleboremaskine',
  'Overraskelser (ikke alkohol :-) )',
];

export default function App() {
  const bubbles = useMemo(
    () => Array.from({ length: 18 }, (_, index) => ({
      id: index,
      size: Math.floor(Math.random() * 30) + 20,
      delay: Math.random() * 10,
      duration: Math.random() * 12 + 12,
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
        <p className="hero__eyebrow">Retro Arcade 50-års fejring</p>
        <h1>Thomas fylder 50!</h1>
        <p className="hero__date">11. oktober</p>
        <p className="hero__intro">
          Tag med på en nostalgisk rejse fyldt med pixelmagi, blinkende lys og
          boblende bobler. Vi fylder Retroarkaden med venner, familie og masser af grin.
        </p>
      </header>

      <main>
        <section className="card">
          <h2>Dagens Level-plan</h2>
          <p className="card__subtitle">
            Vi mødes allerede om eftermiddagen, og resten af dagen er fyldt med retrohygge.
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
            Hvis du har lyst til at tage noget med, så er her lidt inspiration.
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
          <h2>Praktisk info</h2>
          <p className="card__subtitle">Parkering og logistik</p>
          <p>
            Da der kommer en del biler vil det være praktisk at parkere heromkring:
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

      <footer className="footer">
        Jeg glæder mig til at se jer alle sammen :-)
      </footer>
    </div>
  );
}
