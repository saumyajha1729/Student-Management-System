
function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p><b>Roll Number:</b> {props.rollNumber}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>CGPA:</b> {props.cgpa}</p>
    </div>
  );
}

export default StudentCard;
