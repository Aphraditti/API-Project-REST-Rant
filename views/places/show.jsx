const React = require('react')
 const Default = require('../default')

 function Show(data) {
    console.log(data);
     return (
         <Default>
           <main>
            <div class="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>

              <div className="col-sm-6">
                  <h1>{data.place.name}</h1>

             <div>
                 <h3>Ratings</h3>
                 <p>Not Rated</p>
             </div>

             <div>
                 <h3>Description</h3>
                 <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
             </div>

             <div>
                 <h4>Comments</h4>
                 <p>No comments yet!</p>
             </div>
            
             <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>  

             <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                 <button type="submit" className="btn btn-danger">
                     Delete
                 </button>
             </form>  
              </div>
            </div>   
           </main>
         </Default>
     )
 }

 module.exports = Show
