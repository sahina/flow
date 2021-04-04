import ApiNode from "./nodes/ApiNode";
import ViewNode from "./nodes/ViewNode";

function NodeMenu() {
  return (
    <div>
      <div className="node">
        <ApiNode />
      </div>
      <div className="node">
        <ViewNode />
      </div>
    </div>
  );
}

export default NodeMenu;
