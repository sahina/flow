import ApiNode from "./nodes/ApiNode";
import ViewNode from "./nodes/ViewNode";
import KeyPair from "./nodes/KeyPair";

function NodeMenu() {
  return (
    <div>
      <div className="node">
        <ApiNode />
      </div>
      <div className="node">
        <ViewNode />
      </div>
      <div className="node">
        <KeyPair />
      </div>
    </div>
  );
}

export default NodeMenu;
