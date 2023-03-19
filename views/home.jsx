const React = require('react')
const Def = require('./default')

function Home() {
    return (
        <Def>
            <div>
                <h1>Home</h1>

               <div>
                <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Chia Fruit Shake" />
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>

            </div>
        </Def>
    )
}

module.exports = Home
