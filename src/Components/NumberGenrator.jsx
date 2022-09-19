import React, { Component } from 'react'

export default class NumberGenrator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num: 20
        }
    }

    componentDidUpdate(){

        if (this.state.num <= 5) {
            throw new Error("Number less than 6");
        }
    }

    updateNum() {
        this.setState({
            num: Math.floor(1
                + Math.random() * 20)
        })
    }

    render() {
        return (
            <>
                <h1>
                    {this.state.num}
                </h1>
                <button onClick={()=>this.updateNum()}> Generate Number</button>
            </>
        )
    }
}
