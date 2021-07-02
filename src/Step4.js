import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseCheese } from "./rootSlice";

const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cheese = useSelector((state) => state.cheese);
  const { register, handleSubmit } = useForm({ defaultValues: { cheese } });

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cheese">Pick a base</label>
        <select id="cheese" name="cheese" {...register("cheese")}>
          <option value="no_cheese">No Cheese</option>
          <option value="mild">Mild</option>
          <option value="strong">Strong</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step1;
