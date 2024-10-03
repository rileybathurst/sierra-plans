import * as React from "react"
import { Link, type HeadFC } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
