import { useScrollHandler } from "../hooks/useScrollHandler";
import Icon from "./Icon";

function About() {
  const scroll = useScrollHandler(0);
  const skillList = [
    "html",
    "css",
    "js",
    "react",
    "vue",
    "mysql",
    "nodejs",
    "git",
  ];
  return (
    <div className="about">
      <ul className="skills">
        {skillList.map((skill) => {
          return (
            <>
              <li
                className={`icon-${skill}`}
                style={scroll > 593 ? { filter: "contrast(100%)" } : undefined}
              >
                <div className={`icon-${skill}`}>
                  <Icon icon={skill}></Icon>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default About;
