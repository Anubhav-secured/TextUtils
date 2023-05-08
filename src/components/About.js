import React from 'react'

export default function About(props) {
    // const [mystyle, setmystyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let mystyle={
        color: props.mode==='dark'?'white':'#27242d',
        backgroundColor: props.mode==='dark'?'#27242d':'white',
        // border: '2px solid',
        borderColor:props.mode==='dark'?'white':'#27242d'
    }

  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#27242d'}}>
    <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                   TextAnalyzer gives you a way to analyze your text. It can be either word count, character count, copy text, remove extra spaces, clear text or speak functionality.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    TextAnalyzer is a free text utility app that provides instant character count, word count, lowecase to uppercase, uppercase to lowercase, copy text, remove extra space and speak feature. <br />
                    TextAnalyzer provides the number of words and characters. Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    This word counter software works in web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera etc.
                    It suits to count character in facebook, blog, books, exel document, pdf document, essays etc.  
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
                 <button type="button" onClick={togglestyle} className="btn btn-primary">{btntext}</button>
            </div> */}
    </div>
  )
}
