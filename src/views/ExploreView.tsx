import LeftNav from "../components/LeftNav";
import NodeMenu from "../components/NodeMenu";
import Inspector from "../components/Inspector";
import Header from "../components/Header";

function ExploreView() {
  return (
    <div>
      <Header />
      <div className="row justify-content-md-center">
        <div className="flex-300">
          <LeftNav />
        </div>
        <div className="col flex-80">
          <NodeMenu />
        </div>
        <div className="col">
          <p>canvas</p>
        </div>
        <div className="col flex-400">
          <Inspector />
        </div>
      </div>
    </div>
  );
}

export default ExploreView;
