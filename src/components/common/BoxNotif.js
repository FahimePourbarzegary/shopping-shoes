import "./BoxNotif.css";
const BoxNotif = ({ type = "success", message }) => {
  return (
    <div className={type === "success" ? "m-box successBox" : "m-box errorBox"}>
      <p>{message}</p>
    </div>
  );
};

export default BoxNotif;
