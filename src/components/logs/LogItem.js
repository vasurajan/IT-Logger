import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';   // for date-time

// Receiving props from the Log Component as "log"
const LogItem = ({ log }) => {
    return (
        <li className="collection-item">
            <div>
                <a
                    className={`modal-trigger ${log.attention ? 'red-text' : 'green-text'}`}
                    href="#edit-log-modal">{log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by {''}
                    <span className="black-text">{log.tech}</span> on {""}
                    {/*Moment for applying the date in the logs */}
                    <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>

    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired  // because this is gonna be object
}

export default LogItem;
