import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import { CORE_CONCEPTS } from './data.js'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react'
import { EXAMPLES } from './data.js'

function App() {
  const [currentTopic, setCurrentTopic] = useState('components')

  function handleClick (selectedTopic) {
    setCurrentTopic(selectedTopic)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        
        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')}>State</TabButton>
          </menu>

          {currentTopic && <div id="tab-content">
            <h3>{EXAMPLES[currentTopic].title}</h3>
            <p>{EXAMPLES[currentTopic].description}</p>
            <pre>
              <code>{EXAMPLES[currentTopic].code}</code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  )
}

export default App
