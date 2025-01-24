import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export interface Books {
  id: number
  name: string
  request: string
  pages: number
  restoreOption: 'loose' | 'spiral' | 'drop'
}
