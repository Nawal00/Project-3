import React from 'react'
import axios from 'axios'
import GemCard from './GemCard'
import GemsSearchForm from './GemsSearchForm'

class GemsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      gems: [],
      category: 'All',
      userLocation: null,
      location: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/gems')
      .then(res => this.setState({ gems: res.data }))

    // also get the user location...
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('LOCATION FOUND')
        this.setState({
          userLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  filteredGems() {
    const re = new RegExp(this.state.location, 'i')
    if(!this.state.category && !this.state.location) return this.state.gems
    return this.state.gems.filter(gem => {
      return re.test(gem.address) && (this.state.category === 'All' || gem.category === this.state.category)
    })
  }

  render() {

    if(this.state.gems.length === 0){
      return(
        <section className="section">
          <div className="container">
            <h4 className="title is-4">Loading...</h4>
          </div>
        </section>
      )
    }
    return (

      <section className="section">
        <div className="container">
          <section className="section">
            <h2 className="title has-text-centered is-title-light is-size-2">The Gems</h2>
          </section>
          <hr />
          <GemsSearchForm handleChange={this.handleChange} />
          <div className="columns is-multiline">
            {this.filteredGems().map(gem =>
              <div key={gem._id} className="column is-one-quarter">
                <GemCard {...gem} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default GemsIndex
