/**
 * 
 * Lasted update: 29 june 2022
 * By: Iam Cardona Mejia
 * 
 */

// Import types
import { Tag } from './types'

// Import icons
import { CgClose } from 'react-icons/cg'

export default function TagComponent(Tag: Tag) {
  return(
    <div className={`tag-component-tag-generics-styles tag-component-${Tag.spesific_style}`}>
      {Tag.action && (
        <CgClose className="tag-component-close-icon" onClick={() => Tag.action && Tag.action()} />
      )}
      {Tag.text}
    </div>
  )
}