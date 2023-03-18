const React = require('react')
const Def = require('./default')

function Home() {
    return (
        <Def>
            <div>
                <h1>Home</h1>
                <button className="btn-primary">Places Page</button>
            </div>
        </Def>
    )
}

module.exports = Home
