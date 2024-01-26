import Section from './Section.jsx'
import CoreConcept from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts () {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => <CoreConcept key={index} {...item } />)}
      </ul>
    </Section>
  )
}