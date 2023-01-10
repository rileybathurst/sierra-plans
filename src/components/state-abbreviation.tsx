// lifted straight from Sierra Lighting
// https://github.com/rileybathurst/sierra-lighting/blob/main/src/components/state-abbreviation.tsx

import * as React from "react"

function StateAbbreviation(state: { state: string; }) {
  if (state.state == "california") {
    return (<>CA</>);
  } else if (state.state == "nevada") {
    return (<>NV</>);
  }
}

export default StateAbbreviation