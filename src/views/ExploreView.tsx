import LeftNav from "../components/LeftNav";
import NodeMenu from "../components/NodeMenu";
import Inspector from "../components/Inspector";
import Header from "../components/Header";

function ExploreView() {
  return (
    <div>
      <Header />
      <div className="row justify-content-md-center">
        <div className="flex-fixed-width-item">
          <LeftNav />
        </div>
        <div className="col flex-node">
          <NodeMenu />
        </div>
        <div className="col">
          <p>canvas</p>
        </div>
        <div className="col flex-inspector">
          <Inspector />
        </div>
      </div>
    </div>
  );
}

export default ExploreView;
