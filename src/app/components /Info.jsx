
const Info = () => {
    return (
        <div className='container'>
            <div className='reputation'>
                <h3 className='reputation-title'>
                    Our Reputation
                </h3>
                <div className='reputation-info'>
                    <div className='reputation-info-item'>
                        <img className='reputation-info-item-img'
                            src='/images/icon.svg'
                            alt='icon' />
                        <h4 className='reputation-info-item-title'>
                            Best Services
                        </h4>
                        <p className='reputation-info-item-txt'>
                            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                        </p>
                    </div>
                    <div className='reputation-info-item'>
                        <img className='reputation-info-item-img'
                             src='/images/icon1.svg'
                             alt='icon' />
                        <h4 className='reputation-info-item-title'>
                            Best Designs

                        </h4>
                        <p className='reputation-info-item-txt'>
                            Ultricies at ipsum nunc, tristique nam lectus.
                        </p>
                    </div>
                    <div className='reputation-info-item'>
                        <img className='reputation-info-item-img'
                             src='/images/icon.svg'
                             alt='icon' />
                        <h4 className='reputation-info-item-title'>
                            Best Teams
                        </h4>
                        <p className='reputation-info-item-txt'>
                            Cursus semper tellus volutpat aliquet lacus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;