import { render } from 'react-dom'
import EditorTool from './EditorTool'
import { TestTool as Component, ITestToolState as State } from './Test/TestTool'

describe('EditorTool "TestTool"', () => {
  test('inherits from EditorTool', () => {
    expect(Component.prototype instanceof EditorTool || Component === EditorTool).toBeTruthy()
  })

  test.each(['onChange', 'render', 'save'])('has function %s', (funcName) => {
    const component = new Component()

    expect(Object.keys(component).includes(funcName)).toBeDefined()
  })

  test('method "render" outputs component', () => {
    const spy = jest.spyOn(console, 'log')

    const root = document.createElement('div')
    const component = new Component()
    render(component.render(), root)

    expect(spy).not.toBeCalled()
  })

  test('method "onChange" modifies state', async () => {
    const component = new Component({ name: 'Humbug' })

    const callback = () => {
      const data: State = component.save()
      expect(data.name).toBe('TestTool')
    }

    component.onChange({ name: 'TestTool' }, callback)
  })

  test('method "save" outputs state', () => {
    const component = new Component({ name: 'TestTool' })

    const data: State = component.save()

    expect(data.name).toBe('TestTool')
  })
})
