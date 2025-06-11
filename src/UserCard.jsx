// import PropTypes from "prop-types";
const userData=[{
    name:"Shri",
    city:"Chennai",
    description:"Front-End Developer",
    skills:["UI/UX","HTML","CSS","Javascript","React","Node","Figma"],
    online:false,
    profile:"images/image1.png"
},
{
    name:"Gayathri",
    city:"Australia",
    description:"Full Stack web Developer",
    skills:["Vlogging","Web Development","HTML","CSS","Javascript","React","Node","Angular"],
    online:true,
    profile:"images/image2.png"

},
{
    name:"Saara",
    city:"New York",
    description:"Senior Software Developer",
    skills:["C","C++","Java","Python","MySQL","MongoDB","C#.Net","R Programming"],
    online:true,
    profile:"images/image3.png"

},

];


function User(props){
    return (
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src={props.profile} className="img" alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}


                </ul>
            </div>
        </div>
    )
}

const UserCard = () => {
  return (
    <>
    {userData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}
        />
    ))}
    </>

    
  )
}


// User.propTypes={
//     name:PropTypes.string.isRequired,
//     city:PropTypes.string.isRequired,
//     description:PropTypes.string.isRequired,
//     skills:PropTypes.arrayOf(PropTypes.string).isRequired,
//     online:PropTypes.bool.isRequired,
//     profile:PropTypes.string.isRequired
// }
export default UserCard
    {/* <User name="Shri" city="Chennai" description="Front-End Developer" skills={["UI/UX","HTML","CSS","Javascript","React","Node","Figma"]} online={true} profile="images/image1.png"/> */}