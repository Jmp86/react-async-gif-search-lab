import React,{Component} from 'react'


class GifList extends Component {

// renderGif(){
//    return this.props.gifs.map(gif => {
//         <li><img src = {gif}/></li>
//     })
// }

    render(){
    return (
      <ul>
          <li><img alt = {'gif 1'} src={this.props.gifs[0]}/></li>
          <li><img alt = {'gif 2'} src={this.props.gifs[1]}/></li>
          <li><img alt = {'gif 3'} src={this.props.gifs[2]}/></li>
      </ul>
    )
  }
}
  export default GifList
