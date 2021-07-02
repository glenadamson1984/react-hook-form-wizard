import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseSauce } from "./rootSlice";

const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sauce = useSelector((state) => state.sauce);
  const { register, handleSubmit } = useForm({ defaultValues: { sauce } });

  const onSubmit = (data) => {
    dispatch(chooseSauce(data.sauce));
    history.push("./step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sauce">Pick a base</label>
        <select id="sauce" name="sauce" {...register("sauce")}>
          <option value="no_sauce">No Sauce</option>
          <option value="tomato">Tomato</option>
          <option value="garlic">Garlic</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step1;
