const Notification = (props) => {
  //  Write your code here.
  const { message, className, iconUrl } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="app-container">
    <h1 className="heading">Notifications</h1>
    <div className="app-list-container">
      <Notification
        message="Information Message"
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        message="Success Message"
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        message="Warning Message"
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        message="Error Message"
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
