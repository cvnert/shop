import { useParams } from "react-router-dom";

function Index() {
  const params = useParams();
  console.log(params);
  return <div>产品详情页面{params.id}</div>;
}

export default Index;
