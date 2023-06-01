import { useEffect, useState } from "react";
function Content() {
  const [time, setTime] = useState();
  useEffect(() => {
    return () => {
      time && URL.revokeObjectURL(time.link);
    };
  }, [time]);
  const handleChange = (e) => {
    const file = e.target.files[0];
    file.link = URL.createObjectURL(file);
    setTime(file);
  };
  return (
    <div>
      <div>
        <input type="file" onChange={handleChange} />
      </div>
      <img src={time && time.link} stye={{ width: "80px" }} />
    </div>
  );
}
export default Content;
