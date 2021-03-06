import React, {useEffect} from "react";
// import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { QUERY_ALL_CLASSES, QUERY_USER, QUERY_STUDENT } from '../utils/queries';
import { ENROL_STUDENT } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import moment from 'moment';


// import { useAppContext } from '../utils/GlobalState';
// import { UPDATE_STUDENT_STATE } from '../utils/actions';


const Student = ({
  _id,
  firstName,
  lastName,
  dateOfBirth,
  classes,
  classId
}) => {

  const age = moment().diff(dateOfBirth, "years");
  const [ enrol ] = useMutation(ENROL_STUDENT, {
    refetchQueries: [
      {query: QUERY_ALL_CLASSES},
      {query: QUERY_USER},
      // {query: QUERY_STUDENT},
    ],
  });

  // const [ state, dispatch ] = useAppContext();

  // const { classes, user, student } = state;

  // // console.log("state classes:" + state.classes)
  // console.log(classes);
  
  // console.log(user);
  // // console.log("user:" + user.firstName);

  // const { loading, data: studentData} = useQuery(QUERY_STUDENT);
  
  // useEffect(() => {
  //   if (studentData) {
  //     dispatch({
  //       type: UPDATE_STUDENT_STATE,
  //       student: studentData.student,
  //     })
  //   } 
  // }, [studentData, loading, dispatch]); 

  // console.log(firstName + age);
  // console.log("classID within Student component: " + classId);

  let enrolledClass = "";

  if (classes[0]) {
    // console.log(classes[0])
    enrolledClass = classes[0].name + " " + classes[0].date + " " + classes[0].startTime
    // console.log(classes.student)
  }
  

  const enrolStudent = async() => {
    try {
      const mutationResponse = await enrol({
        variables: { classId: classId, studentId: _id}
      });

      const newClassData = mutationResponse;
      console.log(newClassData);

      if (newClassData) {
        window.location.assign('./Profile');
      }
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div className="card col-5 text-center p-2 m-2" id={_id}>
    <div className="card-header">
      <h3 className="card-title fw-bold">{firstName}</h3>
    </div>

    <div className="card-body">
      <ul className="project-icons">
        {/* <li 
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Add this to your calendar"
        >
            <span className="project-icon">
              <i className="fa fa-calendar"></i>
            </span>
            <span>Every {date} {startTime} AM</span>
            <p>{duration} mins</p>
        </li> */}

        <li>
        <p>Age: {age} years old</p>
        </li>

      </ul>
    </div>

    <div className="card-footer">
      {
        classes[0]
        ?
        <p className="student__enrolled__text fw-bold">Enrolled to {enrolledClass}</p>
        :
        <>
        {classId
          ?
          <button onClick={() => {enrolStudent()}}>Enroll</button>
          :
          <Link to="/Calendar"><button>Enroll</button></Link>
          }
        </>
      }

      {/* {classId
                ?
                <button onClick={() => {enrolStudent()}}>Enroll</button>
                :
                <Link to="/Calendar"><button>Enroll</button></Link>
                } */}
      
    </div>
    </div>
  );
};

export default Student;