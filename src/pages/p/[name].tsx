import * as React from "react"
import { Link } from "gatsby"

function PlanCatchAll({ params }: { params: { name: string } }) {
  return (
    <>
      <h1>Plan Catch All</h1>
      <p>{params.name}</p>
      <p>This plan does not exist</p>
      <p>14245-e-windriver-ln suffered this fate - possibly because of a mess up letween capital I and lowercase l</p>
      <Link to="/">Home</Link>
    </>
  )
}

export default PlanCatchAll
