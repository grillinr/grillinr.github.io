/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { ComponentType } from 'react'

  const MDXComponent: ComponentType
  export const frontmatter: {
    title?: string
    date?: string
    summary?: string
    tags?: string[]
    type?: 'project' | 'post'
    featured?: boolean
    draft?: boolean
  }
  export default MDXComponent
}
