import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TechItem from './TechItem';

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4>Technicians List</h4>
                <ul className='collection'>
                    {!loading &&
                        techs !== null &&
                        techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
                </ul>
            </div>
        </div>
    );
};

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
};


export default TechListModal;