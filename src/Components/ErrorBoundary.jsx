import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            return <>
                <h1> Error Occured </h1>
                <h1> Number was less than 6</h1>
            </>
        }
        return this.props.children
    }
}
