const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <div>
                <h1>404 : PAGE NOT FOUND</h1>
                <img src="/image/say-what-again.jpeg" alt="try that again" />
                <p>TRY THAT AGAIN! I DARE YOU!</p>

            </div>
        </Def>
    )
}

module.exports = Error404