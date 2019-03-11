import * as React from 'react'

const Login = () => {
  const onSubmit = () => {
    // tslint:disable-next-line: no-console
    console.log('submit!')
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="text" />
        <button>Login</button>
      </form>
    </>
  )
}

export { Login }
