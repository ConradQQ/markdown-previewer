import './App.scss';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { AiFillExperiment, AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/ai";

function App() {
  const [markdown, setMarkdown] = useState(``)
  const [maximized, setMaximized] = useState(false);

  const placeholder = 
  
  `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;


  useEffect(() => {
    setMarkdown(placeholder)
  }, [placeholder])

  const handleToggle = () => {
    setMaximized(!maximized)
  }
  return (
  
    <div className="App">
      {/* Editor Container */}
      <div className={maximized
      ? 'editor-container-expanded'
      : 'editor-container'}>
        
      <div className='panel'>
     <AiFillExperiment />
     <p>Editor</p>
     {maximized 
      ? <AiOutlineShrink className='expand' onClick={handleToggle} />
      :<AiOutlineExpandAlt className='expand' onClick={handleToggle} />
      }
    </div>
        <textarea id='editor' onChange={(e) => setMarkdown(e.target.value)} rows="" cols="" >{placeholder}</textarea>
      </div>

      {/* Preview Container */}
      <div className='preview-container'>
        <div className='panel'>
     <AiFillExperiment />
     <p>Preview</p>
     
    </div>
        <div id='preview'>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkBreaks]} />
        </div>
      </div>
    </div>
  
  );
}

export default App;
