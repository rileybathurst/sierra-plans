import * as React from "react"

function PlanCatchAll({ params }) {
  return (
    <>
      <h1>Plan Catch All</h1>
      <p>{params.name}</p>
      <p>This plan does not exist</p>
      <p>14245-e-windriver-ln suffered this fate - possibly because of a mess up letween capital I and lowercase l</p>
    </>
  )
}

export default PlanCatchAll
