import React, {Component} from 'react'


export default class GifSearch extends Component {

    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.value)
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
            <input type="text" name="input" value={this.state.input} onChange={this.handleChange}/><br/>
            <input type="submit"/>
        </form>
        )
    }
}