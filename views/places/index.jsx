const React = require('react')
const Def = require('../default')

function Index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2 className="text-center">{place.name} - {place.city}, {place.state}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
        return (
            <Def>
                <div>
                    <h1>My Favorite Restaraunts</h1>
                    <div className="row">
                    {placesFormatted}
                    </div>
                </div>
            </Def>
        )
}

module.exports = Index