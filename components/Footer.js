function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4
        px-32 py-14 bg-gray-100">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Airbnb 2021</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
            </div>
            
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Airbnb Associates</p>
                <p>Frontline Stays</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Responsible hosting</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Centre</p>
                <p>Cancellation options</p>
                <p>Neighbourhood Support</p>
            </div> 
        </div>
    )
}

export default Footer;
