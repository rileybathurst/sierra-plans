import * as React from "react"

function AreaCatchAll({ params
  /* I dont know how to typesafe this
  : {
    name: string
  } */
}) {
  return (
    <>
      <h1>Area Catch All</h1>
      <p>{params.name}</p>
      <p>This area does not exist</p>
    </>
  )
}

export default AreaCatchAll
