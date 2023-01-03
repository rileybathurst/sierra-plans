// run a class then a function to do the useeffect
// https://stackoverflow.com/questions/44481920/how-to-call-a-function-which-is-inside-a-class-in-react

import * as React from "react";

class Welcome extends React.Component {

  static demoFunction() {
    console.log('Inside demo function')
  }

  // I think this is what I need to understand
  componentDidMount() {

    // <Fun />
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
      </>
    );
  }
}

const ClassFunctionPage = () => {

  return (
    <Welcome
    />
  )
}

export default ClassFunctionPage
