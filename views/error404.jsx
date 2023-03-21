const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <div>
                <h1>404 : PAGE NOT FOUND</h1>
                <img src="https://media.istockphoto.com/id/1404463969/photo/studio-shot-of-a-cute-dog-on-an-isolated-background.jpg?s=612x612&w=0&k=20&c=ycNIQp-0ae9Gdti3G028xTr9Oue71AIF1-ffVZFX6F0=" alt="Ooooops! Wrong page" />
                <p>OOOOOPS! WRONG PAGE!</p>

            </div>
        </Def>
    )
}

module.exports = Error404