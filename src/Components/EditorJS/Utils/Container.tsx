import React from 'react'

export const Colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', ''] as const

type Color = typeof Colors[number]
type Breakpoint = 'fluid' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | ''

export interface IContainer {
  background?: Color,
  color?: Color,
  width?: Breakpoint
}

interface Props<T> extends IContainer {
  children?: T
}

const getClass = (prop: string = '', prefix: string, fallback: string) => prop ? [prefix, prop].join('-') : fallback

export const Container = <T extends {}>({ children, background, color, width }: Props<T>) => (
  <section className={ `${getClass(background, 'bg', '')} ${getClass(color, 'text', '')}` }>
    <article className={ `${getClass(width, 'container', 'container')}` }>
      {children}
    </article>
  </section>
)

export default Container
