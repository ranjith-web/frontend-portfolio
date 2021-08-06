import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      {props.company ? 
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
         {props.company.toUpperCase()}
      </h5> : null }
      <p>
        <em>{props.title}</em>
      </p>
      <p>
        <em>{props.date}</em>
      </p>
      {props.content ? 
        <ul>
          {props.content.map((value, index) => (
            <li key={index}> ‣ {value}</li>
          ))}
        </ul>
      : null }
    </div>
  );
}

export default ResumeContent;
