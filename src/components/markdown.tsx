import * as React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

function Markdown(props) {
  console.log(props.notes);
  if (props.notes) {
    return <ReactMarkdown
      children={props.notes}
      remarkPlugins={[remarkGfm]}
    />;
  } else {
    return null;
  }
}

export default Markdown