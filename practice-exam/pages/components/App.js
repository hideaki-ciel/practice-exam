import React from 'react'
import Header from './header'
import Main from './main'
class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Main />
                {/* <footer /> */}
            </div>
        )
    };
}
export default App;