import { useState } from 'react'
import Section from './Section.jsx'
import TabButton from './TabButton.jsx'
import { EXAMPLES } from '../data.js'
import Tabs from './Tabs.jsx'

export default function Examples() {
  const [currentTopic, setCurrentTopic] = useState('')

  function handleClick(selectedTopic) {
    setCurrentTopic(selectedTopic)
  }

  let topicContent = <p>Please select a topic.</p>

  if (currentTopic) {
    topicContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[currentTopic].title}</h3>
        <p>{EXAMPLES[currentTopic].description}</p>
        <pre>
          <code>{EXAMPLES[currentTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton isSelected={currentTopic === 'components'} onClick={() => handleClick('components')}>
              Components
            </TabButton>
            <TabButton isSelected={currentTopic === 'jsx'} onClick={() => handleClick('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={currentTopic === 'props'} onClick={() => handleClick('props')}>
              Props
            </TabButton>
            <TabButton isSelected={currentTopic === 'state'} onClick={() => handleClick('state')}>
              State
            </TabButton>
          </>
        }>
        {topicContent}
      </Tabs>
    </Section>
  )
}
