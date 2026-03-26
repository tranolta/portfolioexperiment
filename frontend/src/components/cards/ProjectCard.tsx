/**
 * ProjectCard — dispatcher component.
 *
 * Reads `project.layout` and renders the appropriate card variant.
 * This is the only component you need in parent sections — the layout
 * field on each project data entry drives the visual presentation.
 *
 * To add a new card variant:
 *  1. Add the layout type to ProjectLayout in src/types/index.ts
 *  2. Create a new card component in this directory
 *  3. Add a case below
 */
import type { Project } from '../../types'
import HeroFullCard      from './HeroFullCard'
import SplitImageCard    from './SplitImageCard'
import TypeStatementCard from './TypeStatementCard'
import MinimalRowCard    from './MinimalRowCard'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  switch (project.layout) {
    case 'hero-full':
      return <HeroFullCard project={project} index={index} />
    case 'split-image':
      return <SplitImageCard project={project} index={index} />
    case 'type-statement':
      return <TypeStatementCard project={project} index={index} />
    case 'minimal-row':
      return <MinimalRowCard project={project} index={index} />
    default:
      return <MinimalRowCard project={project} index={index} />
  }
}
