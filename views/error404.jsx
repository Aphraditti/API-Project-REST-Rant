const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <div>
                <h1>404 : PAGE NOT FOUND</h1>
                <p>Oopsie!</p>
            </div>
        </Def>
    )
}

module.exports = Error404