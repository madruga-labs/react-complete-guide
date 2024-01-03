import { CoreConcept } from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";
import "./CoreConcepts.css";

export default function CoreConcepts() {
  return (
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept {...concept} key={concept.title} />
      ))}
    </ul>
  );
}
