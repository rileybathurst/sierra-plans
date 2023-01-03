// can I get a pdf to have a useeffect state?

// https://reactjs.org/docs/faq-functions.html
// im not sure if this is the best way to do its all a mess

// ! theres a possible chance doing this with a download button might be better than auto download
// as then I can run things before they are done but its an extra step Id like to avoid

// this might help go the other way around although it all kinda seems messy
// https://stackoverflow.com/questions/44481920/how-to-call-a-function-which-is-inside-a-class-in-react

import React, { useRef, useEffect, useState } from "react";

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

class Welcome extends React.Component {

  componentDidMount() {

    console.log('🐱');

    const doc = new jsPDF('p', 'in', 'letter');

    let sta = this.props.stated;
    doc.text(sta, 0.5, 3);

    let filename = "hey";
    doc.save(filename);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.name}</h2>
      </div>
    );
  }
}

function LevelUp(props) {

  const [stateText, setStateText] = useState('start');

  // I need a useEffect to do a canvas as first build it doesnt have anything on it
  useEffect(() => {
    setStateText('effected');

    // ! the problem is I cant run the class here
    <Welcome
      stated={stateText}
    />
  });

  return (
    <>
      {/* <Welcome
      stated={stateText}
    /> */}
      hey
    </>
  );
}

const EffectedPage = () => {
  return (
    <LevelUp />
  )
}

export default EffectedPage
