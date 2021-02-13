// / <reference types="react-scripts" />
declare module 'classnames'
declare module '*.scss'
declare module '*.module.scss' {
  const styles: { [className: string]: string }
  export default styles
}
