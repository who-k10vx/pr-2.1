import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState((increase) => ({ count: increase.count + 1 }))
    }

    decrement = () => {
        if(this.state.count>0){
        this.setState((decrease) => ({ count: decrease.count - 1 }))
        }
    }

    reset = () => {
        this.setState((reset) => ({ count: (0) }))
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <button className="px-5 bg-success border-0 rounded m-2" onClick={this.increment}>+</button>
                    <h1 className="px-5 bg-danger border-0 rounded m-2" >{`${this.state.count}`}</h1>
                    <button className="px-5 bg-success border-0 rounded m-2" onClick={this.decrement}>-</button>
                    <div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className=" px-5 bg-success border-0 rounded m-2 p-2" onClick={this.reset}>Reset</button>
                </div>
            </>
        )
    }
}
export default Counter;
