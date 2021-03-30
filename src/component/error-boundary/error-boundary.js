import React, {Component} from 'react'
import ErrorIndication from "../error-indicator";
export default class ErrorBoundary extends Component{
    state={
        error:false
    }
    componentDidCatch(error, errorInfo) {
        this.setState({error:true})
    }
    render() {
        const {error}=this.state
        if(error){
            return <ErrorIndication/>

        }
        return (this.props.children)



    }
}