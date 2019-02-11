import React from 'react'
import Select from 'react-select'


const TripsForm = ({ options, data, handleChange, handleSubmit, handleMultiChange, error }) => {
  return (

    <div className="container">
      <div className="column is-6 is-offset-3 ">

        <h3 className="title has-text-centered">Create Your Trip</h3>
        {error && <div className="notification is-danger">{error}</div>}
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name || ''}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                  value={data.image || ''}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="category"
                    defaultValue="Please Choose..."
                    onChange={handleChange}
                  >
                    <option disabled>Please Choose...</option>
                    <option value="" > Search All </option>
                    <option> Pubs </option>
                    <option> Museums </option>
                    <option> Restaurants </option>
                    <option> Caravan Trips </option>
                    <option> Road Trips </option>
                    <option> Weekend Trips </option>
                    <option> Sunday Trips </option>
                    <option> Mid-week Trips </option>
                    <option> Business Trips </option>
                    <option> Family Trips </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={data.description || ''}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Gems</label>
              <div className="control">
                <Select
                  className="multi"
                  isMulti
                  options={options}
                  // value={data.gems || ''}

                  onChange={handleMultiChange}

                />
              </div>
            </div>

            <button className="button is-rounded is-medium is-fullwidth is-primary">Create Trip</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TripsForm
