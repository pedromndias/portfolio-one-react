import codeLogo from './code-logo.png'
import "./Header.css"

export default function Header() {
    return(
        <div className="header">
            <img src={codeLogo} className="logo" alt="coding logo" />
            <h1>Hello, there! I am <span className="header--pedro">Pedro</span></h1>
            <p className="header--p">I AM A FRONTEND DEVELOPER</p>
            
        </div>
        
    )
}