import Classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={Classes.container}>
      <p className={Classes.title}>- CSS CssModules -</p>
      <button className={Classes.button}>FIGHT!!</button>
    </div>
  );
};
