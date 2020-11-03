import React from 'react'

const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a
                href='#add-log-modal'
                className='btn-floating btn-large green darken-2 modal-trigger'
            >
                <i className='large material-icons'>add</i>
            </a>
            <ul>
                <li>
                    {/*To list techs */}
                    <a href="#tech-list-modal" className="btn-floating blue modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    {/*To delete tech */}
                    <a href="#add-tech-modal" className="btn-floating red modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddBtn
