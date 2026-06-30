import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { Connectme } from "../../constants";

const Connect = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {Connectme.map((conn) => (
          <div className="h-28 w-28" key={conn.name}>
            <a
            href={conn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-28 w-28"
            key={conn.name}
          ></a>
            <BallCanvas icon={conn.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Connect, "connect");
