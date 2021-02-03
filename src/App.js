import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputOne: 0,
            inputTwo: 0,
            outPut: 0
        }
    }
    calculater = (c) => {
        const ip1 = parseInt(this.state.inputOne);
        const ip2 = parseInt(this.state.inputTwo);
        let op = 0;
        console.log(c)
        switch (c) {
            case "add":
                op = ip1 + ip2;
                break;
            case "sub": op = ip1 - ip2;
                break;
        }
        // console.log("25", op)
        // console.log("25", this.state)
        this.setState({
            outPut: op
        })
    }
    v1 = (v) => {
        this.setState({ inputOne: v.target.value })
    }
    v2 = (l) => { this.setState({ inputTwo: l.target.value }) }
    render() {
        // console.log(this.state)
        return (
            <>
                <div>
                    value1:<input id="iput1"  type="text" onChange={this.v1}
                        size="3" />
                </div>
                <div>
                    value2:<input id="iput2" type="text" onChange={this.v2}
                        size="3" />
                </div>

                <div>
                    {/* <button id="oput" onClick={this.calculater("add")} >Add</button> */}
                    <button id="oput" onClick={() => { this.calculater("add") }} >Add</button>

                </div>
                <div>
                    <button id="oput9" onClick={() => { this.calculater("sub") }} >Sub</button>
                </div>
                <div>
                    Result:<input id="result" type="text" value={this.state.outPut} size="5" />

                </div>
            </>
        )
    }
}
export default App;