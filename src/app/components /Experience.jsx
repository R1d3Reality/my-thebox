const Experience = () => {
    return (
        <div className='container'>
            <div className='experience'>
                <div className='experience-info'>
                    <div className='experience-info-card card'>
                        <h4 className='experience-info-card-title'>84</h4>
                        <p className='experience-info-card-txt'>Happy clients</p>
                        <img
                            className='experience-info-card-img'
                            src='/images/clients.png'
                        />
                    </div>
                    <div className='experience-info-card card-2'>
                        <h4 className='experience-info-card-title'>123</h4>
                        <p className='experience-info-card-txt'>Projects Completed</p>
                        <img
                            className='experience-info-card-img'
                            src='/images/projects.png'
                        />
                    </div>
                    <div className='experience-info-card card-3'>
                        <h4 className='experience-info-card-title'>37</h4>
                        <p className='experience-info-card-txt'>Awards Win</p>
                        <img
                            className='experience-info-card-img'
                            src='/images/awards.png'
                        />
                    </div>
                    <div className='experience-info-card card-4'>
                        <h4 className='experience-info-card-title'>84</h4>
                        <p className='experience-info-card-txt'>Happy clients</p>
                        <img
                            className='experience-info-card-img'
                            src='/images/years.png'
                        />
                    </div>
                </div>
                <div className='experience-description'>
                    <h3 className='experience-description-title'>
                        30 Years Experience
                    </h3>
                    <p className='experience-description-txt'>
                        Our company has been the leading provided construction services to
                        clients throughout the USA since 1988.
                    </p>
                    <button className='experience-description-btn'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Experience