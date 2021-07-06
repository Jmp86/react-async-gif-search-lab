import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    constructor (){
        super()
        this.state = {
            gifs: [],
            input: ''
        }
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=02IHDaetVMH4x872AHSlkAGh4r2aepha')
        .then(res => res.json())
        .then((gif) => {
            console.log(gif)
            this.setState ({
                gifs: [gif.data[0].images.original.url, gif.data[1].images.original.url, gif.data[2].images.original.url]
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ input: e.target.input.value})
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.input}&api_key=02IHDaetVMH4x872AHSlkAGh4r2aepha`)
        .then(res => res.json())
        .then((gif) => {
            console.log(gif)
            this.setState ({
                gifs: [gif.data[0].images.original.url, gif.data[1].images.original.url, gif.data[2].images.original.url]
            })
        } 
        )
    }

    
    
    render(){
        return(
        <div> 
           <GifList gifs = {this.state.gifs}/>
           <GifSearch handleSubmit = {this.handleSubmit}/>
        </div> 
        )
    }
}

export default GifListContainer