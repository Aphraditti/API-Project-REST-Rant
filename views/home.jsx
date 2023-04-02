const React = require('react')
const Def = require('./default')

function Home() {
    return (
        <Def>
            <div>
                <h1>Home</h1>

               <div>
                <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Home Store Front Cafe"/>
            </div>
            <a href="/places">
                <button className="btn btn-primary">Places Page</button>
            </a>

            </div>
        </Def>
    )
}

module.exports = Home
