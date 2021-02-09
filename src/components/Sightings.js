import sightingsPic from '../images/sightings.jpg'
const Sightings = (props) => {
    return(
        <div>
            <div>This is the sightings page!</div>
            <div>There have been so many alien sightings</div>
            <img src ={sightingsPic} alt="sketchy pic of ufos"/>
        </div>
    )
}

export default Sightings;