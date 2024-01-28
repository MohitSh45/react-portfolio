/* 
   File: components/Card.js
   Author: Mohit Sharma
   Student ID: 301297059
   Date: January 28, 2024
*/
const Card = ({ icon, title, subTitle, description }) => {
  return (
    <div className="card bg-transparent">
      <div className="card-header bg-transparent d-flex align-items-center border-bottom">
        {icon ? (
          <span className="avatar bg-primary text-accent avatar-lg rounded-circle fw-bold px-2 px">
            {icon}
          </span>
        ) : null}
        <div className="ms-3">
          <h6 className="mb-0 fs-sm">{title}</h6>
          <span className="text-muted fs-sm">{subTitle}</span>
        </div>
      </div>
      <div className="card-body">{description}</div>
    </div>
  );
};

export default Card;
