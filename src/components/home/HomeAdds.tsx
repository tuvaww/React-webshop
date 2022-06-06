import { useEffect, useState } from "react";
import { IProducts } from "../../models/IAPI";
import { getApi } from "../../ts/main-ts";
import { ApiHandler } from "../ApiHandler";

export const HomeAdds = () => {
  const [adds, setAdds] = useState<IProducts[]>([]);
  const addsArray = adds.slice(0, 3);

  /*   const getHomeAdds = (p: IProducts[]) => {
    setAdds([...p]);
  }; */

  useEffect(() => {
    getAdds();
  }, [adds]);

  async function getAdds() {
    const response = await getApi();
    setAdds(response);
  }

  const getAddsArray = addsArray.map((add) => {
    return (
      <article key={add.id} className="addsPlacer">
        <div className="adds">
          <img src={add.image_link} alt={add.name} />
        </div>
      </article>
    );
  });

  return (
    <>
      <section className="addsContainer">{getAddsArray}</section>
      {/*       <ApiHandler getProducts={getHomeAdds}></ApiHandler>
       */}{" "}
    </>
  );
};
