import { useState } from 'react'
import TabButton from './TabButton.jsx'
import { EXAMPLES } from '../data.js'

export default function Examples () {
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
  )
}