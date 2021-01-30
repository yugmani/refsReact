import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null; //for callback approach of Ref
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    //call back method
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="fname">Input:</label>
        <input type="text" id="fname" ref={this.inputRef} />
        <br></br>
        {/* {call back method} */}
        <label htmlFor="lname">Input:</label>
        <input type="text" id="lname" ref={this.setCbRef} />
        <br></br>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
