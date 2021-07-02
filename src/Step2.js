import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseCrust } from "./rootSlice";

const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const crust = useSelector((state) => state.crust);
  const state = useSelector((state) => state);
  console.log(state);
  const { register, handleSubmit } = useForm({ defaultValues: { crust } });

  const onSubmit = (data) => {
    dispatch(chooseCrust(data.crust));
    history.push("./step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="crust">Pick a base</label>
        <select id="crust" name="crust" {...register("crust")}>
          <option value="classic_thin">Classic Thin</option>
          <option value="deep_pan">Deep Pan</option>
          <option value="filled_crust">Filled Crust</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step1;
