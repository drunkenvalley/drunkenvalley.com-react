import React from 'react'

type Color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | ''
type Size = 'fluid' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | ''

interface ContainerProps<T> {
  background?: Color,
  children: T,
  color?: Color,
  width?: Size
}

const getClass = (prop: string = '', prefix: string, fallback: string) => prop ? [prefix, prop].join('-') : fallback

const Container = <T extends {}>({ children, background, color, width }: ContainerProps<T>) => (
  <section className={ `${getClass(background, 'bg', '')} ${getClass(color, 'text', '')}` }>
    <article className={ `${getClass(width, 'container', 'container')}` }>
      {children}
    </article>
  </section>
)

export default Container
