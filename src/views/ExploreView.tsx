import LeftNav from "../components/LeftNav";
import NodeMenu from "../components/NodeMenu";
import Inspector from "../components/Inspector";

function ExploreView() {
  return (
    <div className="row">
      <div className="col-sm">
        <LeftNav />
      </div>
      <div className="col-sm">
        <NodeMenu />
      </div>
      <div className="col-sm">
        <p>canvas</p>
      </div>
      <div className="col-sm">
        <Inspector />
      </div>
    </div>
  );
}

export default ExploreView;
