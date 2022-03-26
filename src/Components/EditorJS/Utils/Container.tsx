import React, { FC } from 'react'

interface ContainerProps {
  width: 'fluid' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | undefined
}

const Container: FC<ContainerProps> = ({ children, width }) => (
  <section className={ `container${`-${width}` || ''}` }>
    {children}
  </section>
)

export default Container
