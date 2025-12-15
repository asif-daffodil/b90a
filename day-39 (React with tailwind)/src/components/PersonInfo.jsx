
const PersonInfo = ({name, gender, age, area}) => {
    return (
        <div className="border rounded p-3 w-max m-3">
            <p><span className="font-bold">Name:</span> {name}</p>
            <p><span className="font-bold">Gender:</span> {gender}</p>
            <p><span className="font-bold">Age:</span> {age}</p>
            <p><span className="font-bold">Area:</span> {area}</p>
        </div>
    );
};

export default PersonInfo;