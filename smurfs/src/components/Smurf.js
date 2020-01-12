// Standard imports
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Custom imports
import { getSmurf, deleteSmurf } from '../actions/getSmurf'
// Note - decided to create variables before starting due to similarity in project to what we have done this week.

const Smurf = props => {

    const [smurfs, setSmurfs] = useState([])
    // Added the two variables to the new empty array.

    useEffect(() => {
        props.getSmurf();
        setSmurfs(props.smurf)
    }, [props.smurf.length])

    return (
        <>
        {props.isLoading && <h1>Loading...</h1>}
        {/* Shows when the get is loading */}
        {props.err ? <h1>{props.err}</h1> : 
        smurfs && smurfs.map(smurf => (
          <div 
          className="smurf"
          key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h4>'Online' Age: {smurf.age}</h4>
            {smurf.height.toString().includes('cm') ? <h4>{smurf.height}</h4> : <h4>{`${smurf.height}cm`}</h4>}
            <button onClick={() => props.deleteSmurf(smurf.id)}>Delete Smurf</button>
          </div>
        ))
        }
        {/* Creates delete smurf button, shows smurf above that. */}
      </>
    )
}

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        err: state.err,
        isLoading: state.isLoading
    }
}

export default connect(
    mapStateToProps, { getSmurf, deleteSmurf }
)(Smurf);