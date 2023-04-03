const Header = (props: any) => {
    const {subHeader} = props;
    return(
        <div>
            <div className="header-container">
                <div className="header-label">DEMO Streaming</div>
                <div className="header-right-content">
                    <div className="login-text">Log in</div>
                    <div className="free-trial">Start your free trial</div>
                </div>
            </div>
            <div className="sub-header">
                {subHeader}
            </div>
        </div>
    )
}

export default Header;