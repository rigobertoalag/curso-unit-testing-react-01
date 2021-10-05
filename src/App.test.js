import { create } from 'react-test-renderer'
import App from './App'

let component
let header

describe("<App />", () => {

  beforeAll(()=>{
    component = create(<App />)
    header = component.root.findByType('header')
  })

  it("Renderiza el componente", () => {
    expect(component).toBeDefined();
  })

  it("Renderiza el header", () => {
    expect(header).toBeDefined()
    expect(header.props.className).toEqual("App-header")
  })

  it("renderiza un img, un p y un a", () => {
    const img = header.findByType('img')
    const p = header.findByType('p')
    const a = header.findByType('a')

    expect(img).toBeDefined()
    expect(img.props.className).toEqual("App-logo")
    expect(img.props.alt).toEqual("logo")
    expect(img.props.src).toEqual("logo.svg")

    expect(a).toBeDefined()
    expect(a.props.href).toBe("https://reactjs.org")

    expect(p).toBeDefined()
    expect(p.findByType("code")).toBeDefined()
  })
})