import './App.css'
import Button from './Button/Button.tsx'

export default function App() {
  const modes = ['filled', 'tinted', 'plain', 'elevated'] as const;
  const sizes = ['small', 'medium', 'large'] as const;
  const compositions = ['text', 'icon', 'iconFirst', 'textFirst'] as const;

  return (
    <div className="app">
      <h1>Button Variations Grid</h1>

      {/* Mode variations */}
      <section className="variation-section">
        <h2>Mode Variations</h2>
        <div className="button-grid">
          {modes.map(mode => (
            <div key={mode} className="button-item">
              <h3>{mode}</h3>
              <Button mode={mode} composition="text">Button Text</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Size variations */}
      <section className="variation-section">
        <h2>Size Variations</h2>
        <div className="button-grid">
          {sizes.map(size => (
            <div key={size} className="button-item">
              <h3>{size}</h3>
              <Button size={size} composition="text">Button Text</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Composition variations */}
      <section className="variation-section">
        <h2>Composition Variations</h2>
        <div className="button-grid">
          {compositions.map(composition => (
            <div key={composition} className="button-item">
              <h3>{composition}</h3>
              <Button composition={composition}>Button Text</Button>
            </div>
          ))}
        </div>
      </section>

      {/* All combinations grid */}
      <section className="variation-section">
        <h2>All Combinations</h2>
        <div className="button-grid large-grid">
          {modes.map(mode =>
            sizes.map(size =>
              compositions.map(composition => (
                <div key={`${mode}-${size}-${composition}`} className="button-item">
                  <h4>{mode} / {size} / {composition}</h4>
                  <Button
                    mode={mode}
                    size={size}
                    composition={composition}
                  >
                    Button
                  </Button>
                </div>
              ))
            )
          )}
        </div>
      </section>
    </div>
  )
}
