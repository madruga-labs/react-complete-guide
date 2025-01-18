import NoProjectsImage from "../../assets/no-projects.png";
import Button from "../Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="w-[35rem] mt-16">
      <div className="text-center">
        <img
          className="w-16 h-16 object-contain mx-auto"
          src={NoProjectsImage}
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project Seleted
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project or get started with a new one
        </p>
        <p className="mt-8">
          <Button onClick={onStartAddProject}>Create new project</Button>
        </p>
      </div>
    </div>
  );
};

export default NoProjectSelected;
