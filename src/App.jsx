import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import { CORE_CONCEPTS } from './data.js'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react'
import { EXAMPLES } from './data.js'

function App() {
  const [currentTopic, setCurrentTopic] = useState('')

  function handleClick(selectedTopic) {
    setCurrentTopic(selectedTopic)
  }

  let topicContent = <p>Please select a topic.</p>

  if (currentTopic) {
    topicContent = (
      <>
        <h3>{EXAMPLES[currentTopic].title}</h3>
        <p>{EXAMPLES[currentTopic].description}</p>
        <pre>
          <code>{EXAMPLES[currentTopic].code}</code>
        </pre>
      </>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => <CoreConcept key={index} {...item } />)}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton isSelected={currentTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={currentTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={currentTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={currentTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>

          <div id="tab-content">{topicContent}</div>
        </section>
      </main>
    </div>
  )
}

export default App
