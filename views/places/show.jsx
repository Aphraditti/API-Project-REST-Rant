const React = require('react')
 const Default = require('../default')

 function Show(data) {
    let comments = (
      <p className="inactive">
        No comments yet!
      </p>
    )
    let rating = (
      <p className="inactive">
          Not yet rated
      </p>
    )
   
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border" key={c.id}>
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
     return (
         <Default>
           <main>
            <div class="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} className='max-350'/>
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>

              <div className="col-sm-6">
                  <h1>{data.place.name}</h1>

             <div>
                 <h3>Rating</h3>
                  {rating}
             </div>

             <div>
                 <h3>Description</h3>
                 <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
             </div>

             
          
             <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>  

             <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                 <button type="submit" className="btn btn-danger">
                     Delete
                 </button>
             </form>  
              </div>
            </div>   
            <div>
                 <h4>Comments</h4>
                 {comments}
             </div>
            
             <form method='POST' action={`/places/${data.place.id}/comment`} >
                     <div className="form-group">
                         <label htmlFor="author">Author</label>
                         <input
                             className="form-control" 
                             id="author" 
                             name="author" 
                             type="text"
                             required />
                     </div>

                     <div className="form-group">
                         <label htmlFor="content">Content</label>
                         <input
                             className="form-control" 
                             id="content" 
                             name="content" 
                             type="textarea" />
                     </div>
                     <div className="form-group">
                         <label htmlFor="stars">Star Rating</label>
                         <input
                             className="form-control" 
                             id="stars" 
                             name="stars" 
                             type="text" 
                             step={0.5}
                             />
                     </div>

                     <div className="form-group">
                         <label htmlFor="rant">Rant</label>
                         <input
                             id="rant" 
                             name="rant" 
                             type="checkbox" />
                     </div>

                     <br/>
                     <input className="btn btn-primary" type="submit" value="Post Comment" />
                 </form>
           </main>
         </Default>
     )
 }

 module.exports = Show



