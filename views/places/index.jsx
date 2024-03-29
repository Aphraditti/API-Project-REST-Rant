const React = require('react')
const Def = require('../default')

function Index(data) {
    let placesFormatted = data?.places?.map((place) => {
         return (
             <div key={place.id} className='col-sm-6 text-center index-place'>
                 <a href={`/places/${place.id}`}>
                 {place.name}
                 </a>
                 <a href={`/places/${place.id}`}>
                 {place.cuisines}
                 </a>
                 <h2>{place.name} - {place.city}, {place.state}</h2>
                 <h3>{place.cuisines}</h3>
                <img className='img-max index-img' src={place.pic} alt={place.name} />
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Index</h1>
                <div className='row' id='index-places'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = Index




// const React = require('react')
// const Def = require('../default')


// function Index(data) {
    
//     let placesFormatted = data.places.map((place, index) => {
//         return (
//           <div className="col-sm-6">
//             <h2>
//               <a href={`/places/${index}`} >
//                 {place.name}
//               </a>
//             </h2>
//             <p className="text-center">
//               {place.cuisines}
//             </p>
//             <img src={place.pic} alt={place.name} />
//             <p className="text-center">
//               Located in {place.city}, {place.state}
//             </p>
//           </div>
//         )
//       })
      


//     return (
//         <Def>
//             <div>
//                 <h1>My Favorite Restaraunts</h1>
//                 <div className="row">
//                 {placesFormatted}
//                 </div>
//             </div>
//         </Def>
//     )
// }

// module.exports = Index