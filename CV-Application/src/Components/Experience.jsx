import { useState } from "react";
import "../Styles/Experience.css";

function Experience({ experiences, setExperiences }) {
  const [isActive, setIsActive] = useState(false);
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState({
    id: "",
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    responsibilites: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevExp) => ({
      //takes existing experience and sets [name] and value
      ...prevExp,
      [name]: value,
    }));
  };

  const handleDescription = (e) => {
    setExperience((prevExp) => ({
      ...prevExp,
      responsibilites: [
        ...prevExp.responsibilites,
        { text: description, id: crypto.randomUUID() },
      ],
    }));
    setDescription("");
  };

  const handleDescriptionEdit = (id) => {
    const result = experience.responsibilities.find((res) => res.id === id);
    setDescription(result.text);
    handleDescriptionDelete(id);
  };

  const handleDescriptionDelete = (id) => {
    setExperience((currentExp) => ({
      ...currentExp,
      responsibilites: currentExp.responsibilites.filter(
        (des) => des.is !== id
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (experience.id) {
      setExperiences((currentExp) =>
        currentExp.map((exp) => (exp.id === experience.id ? experience : exp))
      );
    } else {
      setExperiences((currentExp) => {
        return [...currentExp, { ...experience, id: crypto.randomUUID() }];
      });
    }
    setExperience({
      id: "",
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      responsibilites: [],
    });
    setDescription("");
  };

  const handleEdit = (id) => {
    setExperience(experiences.find((exp) => exp.id === id));
  };

  const handleDelete = (id) => {
    setExperiences((currentExps) => currentExps.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      <form>
        <h2>Professional Experience</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          required
          placeholder="Software Engineer"
          value={Experience.title}
          onChange={handleChange}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={Experience.company}
          onChange={handleChange}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="company"
          placeholder="DD/MM/YYYY"
          value={Experience.startDate}
          onChange={handleChange}
        />
        {!isActive ? (
          <div>
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              required
              placeholder="MM/DD/YYYY"
              value={Experience.endDate}
              onChange={handleChange}
            />
            <div>I currently work here</div>
            <input type="checkbox" onClick={() => setIsActive(true)} />
          </div>
        ) : (
          <input type="checkbox" onClick={() => setIsActive(false)} />
        )}
        <label htmlFor="description">Key Responsibilites</label>
        <div>
          <input
            type="text"
            name="description"
            placeholder="Enter a responsibility"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="button" onClick={handleDescription}>
            +
          </button>
        </div>
        {/* <ul>
          {experience.responsibilities.map((des) => (
            <li key={des.id}>
              {des.text}
              <div id="infoBtn">
                <button
                  type="button"
                  onClick={() => handleDescriptionEdit(des.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDescriptionDelete(des.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="submit-button-container">
          <button type="submit" className="submit-button">
            {experience.id ? "Update Experience" : "Add Experience"}
          </button>
        </div>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.id}>
              <p>{exp.title}</p>
              <p>{exp.startDate + " - " + exp.endDate}</p>

              <div id="infoBtn">
                <button onClick={(e) => handleEdit(exp.id)}>Edit</button>
                <button onClick={(e) => handleDelete(exp.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul> */}
      </form>
    </div>
  );
}

export default Experience;

// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
