
const Services = () => {
    return (
        <div className='container'>
            <div className='services'>
                <div className='services-title'>
                    Services
                </div>
                <div className='services-row'>
                    <div className='services-row-item white'>
                        <img
                            className='services-row-item-img'
                            src='/images/construction.svg'
                        />
                        <p>
                            Construction
                        </p>
                    </div>
                    <div className='services-row-item bleu'>
                        <img
                            className='services-row-item-img'
                            src='/images/renovation.svg'
                        />
                        <p>
                            Renovation
                        </p>
                    </div>
                    <div className='services-row-item white'>
                        <img
                            className='services-row-item-img'
                            src='/images/consultation.svg'
                        />
                        <p>
                            Consultation
                        </p>
                    </div>
                    <div className='services-row-item bleu'>
                        <img
                            className='services-row-item-img'
                            src='/images/repair.svg'
                        />
                        <p>
                            Repair Services
                        </p>
                    </div>
                    <div className='services-row-item white'>
                        <img
                            className='services-row-item-img'
                            src='/images/architecture.svg'
                        />
                        <p>
                            Architecture
                        </p>
                    </div>
                    <div className='services-row-item bleu'>
                        <img
                            className='services-row-item-img'
                            src='/images/electric.svg'
                        />
                        <p>
                            Electric
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;