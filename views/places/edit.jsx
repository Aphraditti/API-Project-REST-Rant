const React = require('react')
const Def = require('../default.jsx')

function EditForm (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                     <div className="form-group col-sm-6">
                         <label htmlFor="name">Name</label>
                         <input
                             className="form-control" 
                             id="name" 
                             name="name" 
                             type="text"
                             value={data.place.name}
                             required />
                     </div>

                     <div className="form-group col-sm-6">
                         <label htmlFor="pic">Picture</label>
                         <input
                             className="form-control" 
                             id="pic" 
                             name="pic"
                             value={data.place.pic} 
                             type="url" />
                     </div>
                     <div className="form-group col-sm-6">
                         <label htmlFor="city">City</label>
                         <input
                             className="form-control" 
                             id="city" 
                             name="city" 
                             type="text"
                             value={data.place.city}
                             />
                     </div>

                     <div className="form-group col-sm-6">
                         <label htmlFor="state">State</label>
                         <input
                             className="form-control" 
                             id="state" 
                             name="state" 
                             type="text" 
                             value={data.place.state}
                             />
                     </div>

                     <div className="form-group col-sm-6">
                         <label htmlFor="cuisines">Cuisines</label>
                         <input
                             className="form-control" 
                             id="cuisines" 
                             name="cuisines" 
                             type="text" 
                             required 
                             value={data.place.cuisines}
                             />
                     </div>
                     <br/>
                     <input className="btn btn-primary" type="submit" value="Add Place" />
                 </form>
          </main>
        </Def>
    )
}

module.exports = EditForm
